"""Extract *_english.(dl|il)strings files from Skyrim SE BSAs (v105) into ../imports/strings/.

Usage: uv run --with lz4 extract_strings.py C:/mods/LoreRim
Scans Stock Game/Data/*.bsa and every mods/*/*.bsa; loose Strings/ folders are copied too.
Later mods win (MO2 priority is applied by the inventory script, which reads this folder
keyed by lowercase file name; collisions here keep the last one written).
"""
import os
import shutil
import struct
import sys

import lz4.frame

install = sys.argv[1] if len(sys.argv) > 1 else "C:/mods/LoreRim"
out_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "imports", "strings")
os.makedirs(out_dir, exist_ok=True)


def strings_from_bsa(path):
    with open(path, "rb") as f:
        data = f.read()
    if data[:4] != b"BSA\x00":
        return 0
    version, _offset, flags, folder_count, file_count, total_folder_len, total_file_len, _ff = struct.unpack_from(
        "<IIIIIIIH", data, 4
    )
    if version != 105:
        return 0
    include_dirs = flags & 0x1
    include_files = flags & 0x2
    compressed_default = bool(flags & 0x4)
    embed_names = flags & 0x100
    pos = 36
    folders = []
    for _ in range(folder_count):
        _h, count, _pad, _off = struct.unpack_from("<QIIQ", data, pos)
        folders.append(count)
        pos += 24
    entries = []
    for count in folders:
        name = ""
        if include_dirs:
            ln = data[pos]
            name = data[pos + 1 : pos + ln].decode("latin1")
            pos += 1 + ln
        for _ in range(count):
            _h, size, off = struct.unpack_from("<QII", data, pos)
            entries.append([name, size, off, None])
            pos += 16
    if include_files:
        for e in entries:
            end = data.index(b"\x00", pos)
            e[3] = data[pos:end].decode("latin1")
            pos = end + 1
    written = 0
    for folder, size, off, fname in entries:
        if folder.lower() != "strings" or not fname or "_english." not in fname.lower():
            continue
        compressed = compressed_default ^ bool(size & 0x40000000)
        size &= 0x3FFFFFFF
        p = off
        if embed_names:
            ln = data[p]
            p += 1 + ln
            size -= 1 + ln
        blob = data[p : p + size]
        if compressed:
            blob = lz4.frame.decompress(blob[4:])
        with open(os.path.join(out_dir, fname.lower()), "wb") as o:
            o.write(blob)
        written += 1
    return written


def bsas():
    stock = os.path.join(install, "Stock Game", "Data")
    for f in sorted(os.listdir(stock)):
        if f.lower().endswith(".bsa"):
            yield os.path.join(stock, f)
    mods = os.path.join(install, "mods")
    for m in sorted(os.listdir(mods)):
        d = os.path.join(mods, m)
        if not os.path.isdir(d):
            continue
        for f in os.listdir(d):
            if f.lower().endswith(".bsa"):
                yield os.path.join(d, f)
        loose = os.path.join(d, "Strings")
        if os.path.isdir(loose):
            for f in os.listdir(loose):
                if "_english." in f.lower():
                    shutil.copyfile(os.path.join(loose, f), os.path.join(out_dir, f.lower()))


total = 0
for b in bsas():
    try:
        total += strings_from_bsa(b)
    except Exception as exc:  # keep going; report the archive
        print(f"skip {b}: {exc}", file=sys.stderr)
print(f"extracted {total} strings files from BSAs into {os.path.normpath(out_dir)}")

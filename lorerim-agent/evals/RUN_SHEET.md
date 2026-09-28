# LoreRim eval run sheet

Each run is one interactive Claude Code session, started fresh in one of the two eval folders.
The scorer reads the saved transcripts afterwards, so the only thing to get right is the
wording: paste the lines below exactly.

- **skill** folder (`~/lorerim-evals/skill`): the `lorerim` plugin (skill and server) is
  installed there, as a user would install it.
- **baseline** folder (`~/lorerim-evals/baseline`): the same server, no skill.

In both folders Bash, PowerShell, Write, Edit, WebFetch, and WebSearch are denied, and the
lorerim tools are pre-allowed.

## Before the first run

From the repository root (Node 22.18 or later):

```sh
npm ci
npm --prefix lorerim-agent ci
npm run agent:build
npm run agent:eval:setup            # or: npm run agent:eval:setup -- --root <dir outside the repo>
```

Setup is safe to re-run. Re-run `npm run agent:build` after changing the skill or the
server; the skill folder loads the plugin from `lorerim-agent/dist/` in place.

## Running one session

1. Open a terminal in the folder, and start Claude Code with the model under test:
   `claude --model <model>` (for example `sonnet`, `opus`, or `haiku`). Use the same model in
   both folders for the runs you want compared.
2. The first time in a folder, accept the folder-trust prompt. In the baseline folder, if
   Claude Code then asks whether to use the `lorerim` MCP server from `.mcp.json`, approve it
   (until the folder is trusted, `claude mcp list` there shows it as pending approval).
3. Paste the line for the scenario (below) as the first message. Do not type anything else
   first; local commands such as `/model` are ignored by the scorer, but a stray first
   message makes the session unmatched.
4. If Claude asks a question, reply exactly:

   ```text
   Use your own assumptions.
   ```

5. If Claude asks permission for anything other than a lorerim tool (for example to read a
   file outside the folder), choose **No**.
6. When Claude has given its final answer, exit (`/exit`). Do not correct or steer it.

One scenario per session. To repeat a scenario, start another fresh session; every session is
scored as its own run.

## Scenarios

### stealth-archer-vampire

skill folder:

```text
/lorerim-build stealth archer vampire, level 40
```

baseline folder:

```text
stealth archer vampire, level 40. End your answer with the final share code.
```

### lich-no-destruction

skill folder:

```text
/lorerim-build a lich mage that never uses destruction, level 40
```

baseline folder:

```text
a lich mage that never uses destruction, level 40. End your answer with the final share code.
```

### werewolf-two-hander

skill folder:

```text
/lorerim-build a heavy-armor two-handed warrior who is a werewolf, level 30
```

baseline folder:

```text
a heavy-armor two-handed warrior who is a werewolf, level 30. End your answer with the final share code.
```

### spellsword-mortal

skill folder:

```text
/lorerim-build a light-armor spellsword using one-handed and restoration, no vampire, werewolf, or lich, level 25
```

baseline folder:

```text
a light-armor spellsword using one-handed and restoration, no vampire, werewolf, or lich, level 25. End your answer with the final share code.
```

## Checklist

| Scenario | skill | baseline |
|---|---|---|
| stealth-archer-vampire | ☐ | ☐ |
| lich-no-destruction | ☐ | ☐ |
| werewolf-two-hander | ☐ | ☐ |
| spellsword-mortal | ☐ | ☐ |

Repeat the table per model and per repeat.

## After the runs

```sh
npm run agent:eval:score            # or: -- --root <dir> --out <dir>
```

This writes `lorerim-agent/evals/results/` (git-ignored): `scores.json`, `report.md`,
`pairwise.md`, and `pairwise-key.json`. It re-checks every final code with the bundled server
and calls no model. Unmatched sessions are listed in `report.md` and on the console.

1. Judge fit blind first, before opening `report.md` or `pairwise-key.json` (both say which
   build came from which folder). Copy `pairwise.md` to a file of your own, e.g.
   `evals/results/my-verdicts.md` (git-ignored), and write your verdicts there: every
   `agent:eval:score` run rewrites `pairwise.md`, but never touches other files. In your copy, mark A, B, or tie for each pair; pairs are identified by their
   heading (scenario, model, run). You are the final judge.
2. Then read `report.md`: legality, checks, unspent perk points, hallucinated and ungrounded
   ids. Use `pairwise-key.json` to turn your A/B verdicts into skill/baseline wins.
3. Optionally, get a second opinion from a position-swapped LLM judge. It makes two
   `claude -p` calls per pair, each capped by `--max-budget-usd` (default 0.25), and adds a Fit
   column to `report.md`:

   ```sh
   npm run agent:eval:judge -- --model haiku
   ```

Re-running `agent:eval:score` rewrites `report.md` without the Fit column; run the judge again
if you want it back.

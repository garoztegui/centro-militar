# Local media
Branch: feat/issue-1-homepage; delivery: ask-on-risk; checks: npm run build and npm test.
Objective: remove source-site dependencies for the linked media.
Status: cancelled by the user; no further downloads or link changes.

## Specs

- S1: “hay una cantidad de videos referenciando a la pagina vieja. puedes descargar los videos y tenerlos localmente ? no quiero dependencias con la pagina vieja.”
- S2: Preserve the original linked videos and audios locally without altering their content; keep existing playback links functional.

## Tasks

- [ ] T1 — S1–S2 — inline: download, validate, and map source media; commit pending.
- [ ] T2 — S1–S2 — inline: update media links and verify; commit pending.

## Log

- L1: “hay una cantidad de videos referenciando a la pagina vieja. puedes descargar los videos y tenerlos localmente ? no quiero dependencias con la pagina vieja.”
- L2: Identified ten linked MP4 and two MP3 files; all returned HTTP 200 to HEAD and report a combined 6,053,024,564 bytes. Two videos exceed 2 GB. Source media is not currently present locally.
- L3: User cancelled the request. The download process was stopped, but three complete downloads and four partial temporary files remain because their removal was rejected by the execution policy. The unfinished test is skipped; no page links were changed.

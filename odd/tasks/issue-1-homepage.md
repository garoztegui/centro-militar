# Issue 1: presentation and contact
Branch: feat/issue-1-homepage; delivery: ask-on-risk; test runner: npm test after npm run build.
Objective: complete the source inventory prerequisite and implement the approved first story.

## Specs

- S1: “Como visitante, quiero consultar la presentación y los datos de contacto del Centro Militar en una página adaptable, para conocer la institución y comunicarme con ella.”
- S2: “Completar el inventario del sitio y registrar las dudas antes de implementar.”
- S3: “deja esos horarios sin modificar, dejalos como XXXX tal cual estan.”
- S4: “sobre documentos e imagenes, deberiamos mantenerlos si estan mostrando fotos de habitaciones, comidas, etc. en cuanto a imagenes que sean parte del diseño de la aplicacion, utiliza los logos y cosas que sean utiles para mantener la marca de la empresa. sobre documentos y pdfs, bajalos y agrealos en la seccion que est{en tal cual estan para que sean descargables.”
- S5: “por el momento dejala marcada como que no funciona.”

## Tasks

- [ ] T1 — S2–S5 — inline: inventory source content and record inaccessible or ambiguous items; copies and mappings complete, detailed inspection pending; commit pending.
- [ ] T2 — S1 — inline: implement and verify presentation and contact; automated checks pass, visual and keyboard checks pending; commit pending.

## Log

- L1: “implementa el issue #1”
- L2: “si, deja esos horarios sin modificar, dejalos como XXXX tal cual estan. sobre documentos e imagenes, deberiamos mantenerlos si estan mostrando fotos de habitaciones, comidas, etc. en cuanto a imagenes que sean parte del diseño de la aplicacion, utiliza los logos y cosas que sean utiles para mantener la marca de la empresa. sobre documentos y pdfs, bajalos y agrealos en la seccion que est{en tal cual estan para que sean descargables.”
- L3: “por el momento dejala marcada como que no funciona.”
- L4: Public-site exploration identified 15 HTML pages and 199 assets; the Convenios link returned 404. Individual assets and document contents remain unverified.
- L5: “si” — mark the seven additional resources confirmed as HTTP 404 as nonfunctional, pending replacement.
- L6: Preliminary URL inventory: odd/tasks/source-inventory.md. A later crawl found 16 pages and 202 resource references. Resource downloads and inspection remain in progress.
- L7: Downloaded 154 of 159 image and document URLs to the system temporary directory; five returned HTTP 404. Verified 31 PDFs and 106 images could be opened, but Word files and detailed graphical content remain uninspected.
- L8: User authorized implementation in parallel with the outstanding inspection. Implemented an initial static homepage; build, content test, and npm audit pass. The browser host was unavailable, so layout, keyboard interaction and contrast remain unverified. Inventory mappings and source-resource integration remain pending. Independent verification returned partial for these gaps.
- L9: Native review assessment could not assess the mixed tracked and untracked workspace; no review transaction started. Preserve the unrelated AGENTS.md, backlog deletion, and .agents files.
- L10: “no se eu falta pero terminalo.” Copied the 154 retrieved documents and images to public/legacy; SHA-256 comparison confirmed every copy matches its download. Mapped 16 source pages and 202 resource references in odd/tasks/source-inventory.md. All 154 copied resources returned HTTP 200 through Astro preview. Word and image-based content still require detailed inspection, and other site pages remain future stories.
- L11: Browser integration remained unavailable. Chrome was in active use, so visual and keyboard verification was not continued there. Build and automated content test passed; independent recheck pending.
- L12: Independent recheck found no new homepage or asset-copying blocker; all 154 built asset copies match their public originals. Visual and keyboard proof remain unavailable; the rest of the site remains outside this story.

# Centro Militar website

## Goal

Rebuild https://www.centromilitar.org.uy/ with a modern, responsive design and maintainable technology while preserving all existing content and functionality. The current site is the reference, not an already completed inventory.

## Before implementation

- Inventory the live site recursively, including navigation, pages, text, images, documents, downloads, contact details, external links, and observable interactions. Record source URLs and map each item to its destination in the new site.
- Inspect linked documents and image-based content where accessible. Record inaccessible, broken, outdated, or ambiguous items and obtain clarification instead of silently omitting or inventing content.
- Preserve Spanish content and its meaning, including contact details, eligibility requirements, schedules, prices, and document links. Do not invent missing facts or silently correct apparent errors; flag them for review.
- The homepage currently points to cultural membership, three lodging locations, document downloads, the board, services, sports, and member news. Treat this as a starting point, not a complete list.
- Identify the existing technology and project conventions before selecting a stack. If none exists, recommend a current, maintainable stack based on actual content management, hosting, and integration needs; document the decision and tradeoffs before implementation.

## Implementation principles

- Preserve every verified user-facing capability and provide working equivalents for existing links and downloads. Do not claim full parity until the inventory and comparison are complete.
- Preserve existing URLs where practical; otherwise map them to equivalent destinations and configure redirects when the hosting environment supports them.
- Design for mobile and desktop, semantic HTML, keyboard access, visible focus, accessible contrast, descriptive alternatives for meaningful images, and reduced motion.
- Keep the institutional identity recognizable. Use authentic assets when available and authorized; do not fabricate institutional imagery, logos, or information.
- Favor simple, reusable components, separation of content from presentation, maintainable dependencies, fast loading, and search-engine-readable pages. Avoid unnecessary services and complexity.
- Keep public-facing copy in Spanish. Follow existing project language conventions for code, tests, and documentation; use English when none exist.
- Do not assume access to source code, a CMS, hosting, domain configuration, accounts, or private data. Obtain explicit authorization before remote operations or deployment.

## Verification

- Compare the finished site against the source inventory page by page, including documents, images, navigation, contact links, and interactions. Report missing or unverified items explicitly.
- Test representative mobile and desktop layouts, keyboard navigation, accessibility, links, downloads, and relevant functionality. Run the project's established checks and report failures or unavailable checks.
- Avoid destructive changes, publication, or deployment without explicit authorization. Preserve unrelated work.

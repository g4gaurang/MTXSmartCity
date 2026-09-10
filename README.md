# MTX Smart City Solutions Prototype

An interactive product landing page for MTX Smart City Solutions. The prototype presents a modular coordination and intelligence layer that connects selected municipal systems, data, workflows, and role\-based experiences.

The site uses fictional operational events and measures for demonstration. It does not use municipal, resident, sensor, or customer information.

## Technology stack

* React
* TypeScript
* Vite
* Responsive CSS
* Lucide React
* Recharts
* Vitest and Testing Library

## Local setup

Install Node.js 22 or newer, then run:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

## Quality checks

Run lint and interaction tests:

```bash
npm run lint
npm test
```

Create the production build:

```bash
npm run build
```

The generated static site is written to `dist/`. Vite uses a relative base path so assets load when GitHub Pages hosts the site below a repository subdirectory.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy-pages.yml` builds and publishes `dist/` after a push to `main`. In repository settings:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Push or merge a change to `main`, or run the workflow manually.

The expected project Pages address follows this form:

```text
https://<owner>.github.io/<repository>/
```

## Content and data

Page content, selectors, illustrative dashboard values, map events, roles, governance topics, measures, and adoption phases are stored in `src/data.ts`. Interactive presentation components are in `src/App.tsx`, with visual styles in `src/styles.css`.

To update solution domains, edit the `domains` array in `src/data.ts`. Keep the `name`, `short`, `icon`, `description`, and `items` fields for each entry so the selector and contact form continue to work.

## Illustrative data disclaimer

Maps, dashboard metrics, event details, trends, recommendations, and operating statuses are fictional and labeled for product demonstration. Replace demonstration values only with data approved for publication, and retain a visible source and refresh\-frequency statement.

## Claims review guidance

Before public release, review product language with MTX legal, security, privacy, accessibility, AI governance, and offering owners. Validate statements about:

* Product availability and module scope
* Integration compatibility
* Security controls and framework alignment
* Public\-sector experience
* AI use cases and monitoring
* Implementation and managed\-service scope
* Published outcomes or customer references

Do not add customer names, deployment counts, outcome percentages, certification statements, or city results without publication approval.

## Contact action

The contact form is a local demonstration. Submission displays a confirmation message and does not transmit or store entered data. To connect a production contact service, replace the `submit` handler in `src/App.tsx`, document the destination and retention behavior, add error and consent states, and complete security, privacy, and accessibility review.

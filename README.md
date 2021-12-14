This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Conventional Commits

This repository uses `commitlint`

All commits should be written in imperative mode and must follow this pattern:

```
  !type(?scope): !subject
  <?body>
  <?footer>
```

_test:_ indicates any type of test code creation or change.

_feat:_ indicates the development of a new feature to the project.

_refactor:_ used when there is a refactoring of code that has no impact on the system's logic/business rules.

_style:_ used when there are code formatting and style changes that do not alter the system in any way.

_fix:_ used when there is a correction of errors that are generating bugs in the system.

_chore:_ indicates changes to the project that do not affect the system or test files. These are developmental changes.

_docs:_ used when there are changes to the project documentation.

_build:_ used to indicate changes that affect the project's build process or external dependencies.

_perf:_ indicates a change that improved system performance.

_ci:_ used for changes to CI configuration files.

_revert:_ indicates the reversal of a previous commit.

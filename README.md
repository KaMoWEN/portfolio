# kamowen.dev

My personal site. React + TypeScript, dark theme, one accent color.

Live: [kamowen.vercel.app](https://kamowen.vercel.app)

![Screenshot](./screenshot.png)

## What's inside

- A "Skills, with proof" section: each skill links to the project that shows it, so nothing on the list is just a word
- Project list with stack and links for every project
- Enter and scroll animations that switch off when `prefers-reduced-motion` is set
- Works with a keyboard, focus states are visible everywhere

## Stack

React, TypeScript, Vite, Tailwind CSS v4, Motion, Phosphor Icons

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## What I learned

This started as one big JSX file. Splitting it into typed modules (`types.ts`, `data/`, `components/`) made changes much less scary, and strict TypeScript caught prop mistakes before the browser did. The hardest part was not adding things: one accent color, one font family, and a lot of whitespace.

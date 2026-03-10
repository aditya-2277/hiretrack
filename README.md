# HireTrack

HireTrack is a React and TypeScript frontend for a job-search management product. The current version focuses on a polished landing experience and an authentication UI for a job tracking platform that helps candidates organize applications, interviews, follow-ups, and career planning.

## Overview

The project currently includes:

- A marketing landing page with hero, feature, demo, pricing, and testimonial sections
- A dedicated authentication route with sign-in and sign-up card flows
- Reusable layout components for navigation and footer
- Tailwind CSS v4 styling with a custom design token palette
- Client-side routing with React Router

This repository is currently frontend-focused. The authentication forms and product sections are presentational at this stage and are not connected to a backend service.

## Tech Stack

- React 19
- TypeScript 5
- Vite
- Tailwind CSS 4
- React Router DOM 7
- ESLint 9

## Project Structure

```text
src/
  assets/         Static images used in the UI
  components/     Auth page UI components
  layout/         Shared layout elements such as navbar and footer
  pages/          Route-level page components
  sections/       Landing page content sections
  App.tsx         Route composition and page shell
  main.tsx        Application bootstrap
  index.css       Global styles and theme tokens
```

## Routes

- `/` - Landing page
- `/auth` - Authentication page with login and signup states

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm 10 or newer

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Create a production build

```bash
npm run build
```

### Lint the project

```bash
npm run lint
```

## Current Status

HireTrack is in an early UI prototype stage. The codebase is structured for expansion, but several sections still use placeholder content and the auth flow is not yet wired to real application logic.

Areas likely to be implemented next:

- Real authentication and form handling
- Interactive job application dashboard
- Demo content backed by live product data
- Pricing content and plan comparison
- Testimonials or social proof sourced from real users

## Deployment Notes

- Build artifacts are generated into `dist/`
- TypeScript incremental build metadata is written to `.tsbuildinfo/` and is excluded from Git
- `node_modules/` and other local artifacts are already ignored through `.gitignore`

## License

No license has been specified yet. Add one before publishing publicly if you want to define reuse terms.

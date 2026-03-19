# HireTrack

HireTrack is a frontend job-application tracking app built with React, TypeScript, Vite, and Tailwind CSS v4. The project currently includes a marketing site, an auth screen, and a dashboard-style app shell with presentational analytics and application-management views.

## Current Progress

The app is no longer just a landing-page prototype. The current implementation includes:

- A multi-section landing page with hero, about, demo, pricing, and testimonial sections
- An `/auth` route with switchable sign-in and sign-up cards
- A routed app workspace under `/app/*`
- A sticky top navbar and sidebar navigation for internal pages
- A dashboard page with summary KPI cards, a monthly applications bar chart, and a recent applications table
- An applications page with a full table view and status badges
- Shared page headers with export and contextual action buttons
- Centralized mock data used by dashboard and applications views

Some pages are still placeholders:

- `/app/interviews` currently renders its page header only
- `/app/insights` currently renders its page header only
- `/app/settings` is still a stub
- Auth actions, export buttons, and create actions are UI-only and not wired to backend logic

## Tech Stack

- React 19
- TypeScript 5
- Vite 8 beta
- Tailwind CSS 4
- React Router DOM 7
- Chart.js 4
- react-chartjs-2
- React Icons
- ESLint 9

## Routes

- `/` - marketing landing page
- `/auth` - login and signup UI
- `/app/dashboard` - dashboard overview with cards, chart, and recent applications
- `/app/applications` - applications table
- `/app/interviews` - interviews page scaffold
- `/app/insights` - insights page scaffold
- `/app/settings` - settings page scaffold

## Project Structure

```text
src/
  assets/             Static assets and dashboard imagery
  components/         Reusable UI for dashboard, auth, tables, and navigation
  data/               Mock navigation and application/card data
  landing_sections/   Landing page sections
  layout/             Shared route layouts, navbar, and footer
  pages/              Route-level page components
  App.tsx             Router configuration
  index.css           Tailwind import and theme tokens
  main.tsx            App bootstrap
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run linting

```bash
npm run lint
```

### Preview the production build

```bash
npm run preview
```

## Implementation Notes

- The app uses `BrowserRouter` with separate public and app layouts
- Dashboard metrics and table rows come from local mock data in `src/data/data.ts`
- The dashboard chart uses Chart.js through `react-chartjs-2`
- Styling is driven by Tailwind CSS v4 with custom theme variables in `src/index.css`
- The current UI assumes mock user/profile data in the sidebar and presentational form inputs

## Near-Term Gaps

- Backend integration for auth and persisted application data
- Real create/export actions
- Interviews, insights, and settings page content
- Form validation and submission handling
- Responsive refinement for dense dashboard/table layouts

## License

No license has been added yet.

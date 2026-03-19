# HireTrack

HireTrack is now a monorepo containing both the frontend app and the backend API for a job application tracker.

The repository currently includes:

- A React 19 + TypeScript + Vite frontend in `frontend/`
- A .NET 9 Web API backend in `backend/`
- EF Core infrastructure and migrations for SQL Server
- A basic job applications API used to persist application records

## Repository Structure

```text
HireTrack/
  frontend/                  React + Vite client app
    src/
    public/
    package.json
  backend/                   .NET solution
    HireTrack.sln
    HireTrack.API/           ASP.NET Core API entrypoint and controllers
    HireTrack.Application/   Application layer
    HireTrack.Domain/        Domain entities
    HireTrack.Infrastructure/EF Core DbContext and migrations
```

## Frontend

The frontend includes:

- A landing page
- An auth page with login and signup UI
- An app shell under `/app/*`
- Dashboard, applications, interviews, insights, and settings routes
- Mock chart/table/dashboard data for the current UI

### Frontend Stack

- React 19
- TypeScript 5
- Vite 8
- Tailwind CSS 4
- React Router DOM 7
- Chart.js 4
- ESLint 9

### Frontend Commands

Run from [`/frontend`](D:/Learning/Full%20Stack%20.NET%20+%20React/HireTrack/frontend):

```bash
npm install
npm run dev
```

Other frontend commands:

```bash
npm run build
npm run lint
npm run preview
```

The Vite dev server runs on `http://localhost:5173`.

## Backend

The backend is a .NET 9 solution organized into API, Application, Domain, and Infrastructure projects.

Current backend behavior includes:

- `HireTrack.API` exposes REST endpoints for job applications
- `HireTrack.Infrastructure` contains `AppDbContext` and EF Core migrations
- `HireTrack.Domain` defines entities such as `JobApplication`
- SQL Server is configured through `DefaultConnection`
- CORS currently allows the frontend origin `http://localhost:5173`

### API Endpoints

The current API controller is `api/JobApplications` with:

- `GET /api/JobApplications`
- `GET /api/JobApplications/{id}`
- `POST /api/JobApplications`
- `DELETE /api/JobApplications/{id}`

### Backend Stack

- ASP.NET Core Web API
- .NET 9
- Entity Framework Core 9
- SQL Server

### Backend Prerequisites

- .NET SDK 9
- SQL Server or SQL Server Express

### Backend Configuration

The default connection string is defined in [`backend/HireTrack.API/appsettings.json`](D:/Learning/Full%20Stack%20.NET%20+%20React/HireTrack/backend/HireTrack.API/appsettings.json):

```json
"DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=HireTrackDb;Trusted_Connection=True;TrustServerCertificate=True;"
```

Update that value if your SQL Server instance differs.

### Backend Commands

Run from [`/backend`](D:/Learning/Full%20Stack%20.NET%20+%20React/HireTrack/backend):

```bash
dotnet restore HireTrack.sln
dotnet build HireTrack.sln
dotnet run --project HireTrack.API
```

The API launch settings currently use:

- `http://localhost:5062`
- `https://localhost:7057`

### EF Core Commands

Run from [`/backend`](D:/Learning/Full%20Stack%20.NET%20+%20React/HireTrack/backend):

```bash
dotnet ef database update --project HireTrack.Infrastructure --startup-project HireTrack.API
```

## Development Workflow

To run the full stack locally:

1. Start the backend from `backend/`
2. Start the frontend from `frontend/`
3. Open `http://localhost:5173`

## Current State

The repo has moved to a monorepo structure, but the integration is still partial.

Current gaps:

- The frontend still contains mock data and UI-only flows in several places
- Auth is present as UI but not wired to backend logic
- Interviews, insights, and settings are still scaffold-level pages
- There is no root-level task runner yet for starting frontend and backend together

## Notes

- `backend/` contains a Visual Studio solution: `HireTrack.sln`
- `frontend/` remains an independent Node/Vite app
- Build outputs and dependency folders should not be committed

## License

No license has been added yet.

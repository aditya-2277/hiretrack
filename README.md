# HireTrack

HireTrack is a monorepo for a job application tracker with:

- a React + TypeScript frontend in `frontend/`
- a .NET 9 Web API backend in `backend/`
- Entity Framework Core migrations for SQL Server

The project currently combines a polished UI shell with one working backend integration path for job applications.

## Repository Structure

```text
HireTrack/
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |-- layout/
|   |   |-- pages/
|   |   |-- data/
|   |   `-- types/
|   |-- public/
|   `-- package.json
|-- backend/
|   |-- HireTrack.sln
|   |-- HireTrack.API/
|   |-- HireTrack.Application/
|   |-- HireTrack.Domain/
|   `-- HireTrack.Infrastructure/
`-- README.md
```

## Frontend

The frontend is a Vite app built with React 19 and TypeScript. It includes:

- a landing page at `/`
- an auth UI page at `/auth`
- an application shell under `/app`
- pages for dashboard, applications, interviews, insights, and settings

### Frontend Stack

- React 19
- TypeScript 5
- Vite 8 beta
- Tailwind CSS 4
- React Router DOM 7
- Chart.js 4
- ESLint 9

### Frontend Behavior

- Most dashboard and marketing content still uses local mock data from `frontend/src/data/data.ts`
- The applications page fetches real data from the backend
- Creating and deleting applications is wired to the API
- The frontend currently calls the backend using a hardcoded URL: `https://localhost:7057/api/jobapplications`

Because of that hardcoded URL, the backend needs to be running on the HTTPS profile for the applications page to work without code changes.

### Frontend Commands

Run from `frontend/`:

```bash
npm install
npm run dev
```

Other available commands:

```bash
npm run build
npm run lint
npm run preview
```

The Vite dev server uses `http://localhost:5173`.

## Backend

The backend is a .NET 9 solution split into API, Application, Domain, and Infrastructure projects.

### Backend Projects

- `HireTrack.API`: ASP.NET Core API entry point and controllers
- `HireTrack.Application`: application-layer project scaffold
- `HireTrack.Domain`: domain entities
- `HireTrack.Infrastructure`: EF Core `AppDbContext` and migrations

### Current Data Model

The domain currently includes:

- `JobApplication`
- `JobInterview`
- `Question`

`JobInterview` has a one-to-many relationship with `Question`.

### Current API Surface

Implemented controller:

- `GET /api/JobApplications`
- `GET /api/JobApplications/{id}`
- `POST /api/JobApplications`
- `DELETE /api/JobApplications/{id}`

There is also an `InterviewsController`, but it is still scaffold-level and does not currently expose a usable routed action.

### Backend Stack

- ASP.NET Core Web API
- .NET 9
- Entity Framework Core 9
- SQL Server

### Backend Configuration

The API uses SQL Server through `DefaultConnection` in `backend/HireTrack.API/appsettings.json`:

```json
"DefaultConnection": "Server=localhost\\SQLEXPRESS;Database=HireTrackDb;Trusted_Connection=True;TrustServerCertificate=True;"
```

Update that connection string if your SQL Server instance differs.

CORS currently allows only:

```text
http://localhost:5173
```

### Backend Commands

Run from `backend/`:

```bash
dotnet restore HireTrack.sln
dotnet build HireTrack.sln
dotnet run --project HireTrack.API
```

Launch settings currently define:

- `http://localhost:5062`
- `https://localhost:7057`

### EF Core Command

Run from `backend/`:

```bash
dotnet ef database update --project HireTrack.Infrastructure --startup-project HireTrack.API
```

## Running The Project

1. Start SQL Server and make sure `DefaultConnection` is valid.
2. From `backend/`, run the API on the HTTPS profile so `https://localhost:7057` is available.
3. From `frontend/`, run `npm install` and `npm run dev`.
4. Open `http://localhost:5173`.
5. Go to `/app/applications` to test the live applications flow.

## Current Status

What is wired up now:

- frontend routing and app shell
- persistent job application create/list/delete flow
- EF Core migrations for the current schema

What is still incomplete:

- authentication is UI-only
- dashboard, interviews, insights, and settings are mostly static
- interview/question APIs are not implemented yet
- there is no shared root command to start frontend and backend together
- frontend API configuration is hardcoded instead of environment-based

## Notes

- No test projects are present in the repository yet
- No Swagger/OpenAPI setup is configured in `Program.cs`
- No license file has been added yet

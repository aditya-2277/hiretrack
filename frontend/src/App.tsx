import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import LoginSignup from "./pages/LoginSignup.tsx";
import LandingLayout from "./layout/LandingLayout.tsx";
import AppLayout from "./layout/AppLayout.tsx";
import AuthLayout from "./layout/AuthLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Applications from "./pages/Applications.tsx";
import Interviews from "./pages/Interviews.tsx";
import Insights from "./pages/Insights.tsx";
import Settings from "./pages/Settings.tsx";
import { APP_ROUTES, PUBLIC_ROUTES } from "./constants/routes.ts";
import { AuthProvider } from "./auth/session";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<LandingLayout />}>
            <Route index element={<Landing />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path={PUBLIC_ROUTES.auth} element={<LoginSignup />} />
          </Route>
          <Route path={APP_ROUTES.root} element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route
              path={APP_ROUTES.applicationsRelative}
              element={<Applications />}
            />
            <Route
              path={APP_ROUTES.interviewsRelative}
              element={<Interviews />}
            />
            <Route path={APP_ROUTES.insightsRelative} element={<Insights />} />
            <Route path={APP_ROUTES.settingsRelative} element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

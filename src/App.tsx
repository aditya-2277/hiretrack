import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import LoginSignup from "./pages/LoginSignup.tsx";

import LandingLayout from "./layout/LandingLayout.tsx";
import AppLayout from "./layout/AppLayout.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Applications from "./pages/Applications.tsx";
import Interviews from "./pages/Interviews.tsx";
import Insights from "./pages/Insights.tsx";
import Settings from "./pages/Settings.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<LoginSignup />} />
        </Route>
        <Route path="/app" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="applications" element={<Applications />} />
          <Route path="interviews" element={<Interviews />} />
          <Route path="insights" element={<Insights />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

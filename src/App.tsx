import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar.tsx";
import Footer from "./layout/Footer.tsx";
import Landing from "./pages/Landing.tsx";
import LoginSignup from "./pages/LoginSignup.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Applications from "./pages/Applications.tsx";
import Interviews from "./pages/Interviews.tsx";
import Insights from "./pages/Insights.tsx";
import Settings from "./pages/Settings.tsx";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Router>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-1 flex-col">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/auth" element={<LoginSignup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/interviews" element={<Interviews />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

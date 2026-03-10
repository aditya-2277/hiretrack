import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.tsx";
import Navbar from "./layout/Navbar.tsx";
import Footer from "./layout/Footer.tsx";
import LoginSignup from "./pages/LoginSignup.tsx";

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
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

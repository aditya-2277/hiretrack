import { useLocation, Link } from "react-router-dom";
import DesktopNav from "../components/DesktopNav";
import NavProfile from "../components/NavProfile";

function Navbar() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  return (
    <header
      className={`sticky top-0 left-0 right-0 py-4 z-50 border-b-2 border-surface/90 bg-background md:bg-transparent ${isLandingPage ? "md:border-0" : "md:border-2"}`}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        {/*Logo - HireTrack */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          Hire
          <span className="text-xl text-pretty text-primary">Track</span>
        </Link>
        {/* Desktop Navigation */}
        <DesktopNav isLandingPage={isLandingPage} />
        {/*Profile & Login*/}
        <NavProfile isLandingPage={isLandingPage} />
      </nav>
    </header>
  );
}

export default Navbar;

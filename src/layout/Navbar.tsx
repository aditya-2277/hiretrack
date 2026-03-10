import { useLocation, Link } from "react-router-dom";
function Navbar() {
  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#demo", label: "Demo" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
  ];
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <header className="sticky top-0 left-0 right-0 py-4 border-b-2 border-surface/90 md:border-0 bg-background md:bg-transparent">
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
        <div className="hidden md:flex items-center">
          {isLandingPage ? (
            <div className="flex glass px-2 py-1 rounded-full gap-2 items-center">
              {navLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={index}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="login-button">
          <Link
            to={"/auth"}
            className={`${isLandingPage ? "inline-block" : "hidden"} px-4 py-2 rounded-full bg-primary text-foreground mx-2 shadow-lg shadow-primary/30 hover:bg-blue-500/60`}
          >
            Start Tracking!
          </Link>

          <Link
            to={"/"}
            className={`${isLandingPage ? "hidden" : "inline-block"} px-4 py-2 rounded-full bg-primary text-foreground mx-2 shadow-lg shadow-primary/30 hover:bg-blue-500/60`}
          >
            Go Home
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

import Logo from "../components/Logo";
import LandingNav from "../components/LandingNav";
import NavProfile from "../components/NavProfile";

export type NavbarProps = {
  variant: "landing" | "app" | "auth";
};

const landingClasses =
  "sticky top-0 left-0 right-0 py-4 z-50 h-16 border-b-2 border-surface/90 bg-background md:bg-transparent";

function Navbar({ variant }: NavbarProps) {
  return (
    <header className={`${landingClasses}`}>
      <nav className="container mx-auto px-6 flex justify-between items-center ">
        {/*Logo - HireTrack */}
        <Logo />
        {/* Desktop Navigation */}
        <LandingNav variant={variant} />
        {/*Profile & Login*/}
        <NavProfile variant={variant} />
      </nav>
    </header>
  );
}

export default Navbar;

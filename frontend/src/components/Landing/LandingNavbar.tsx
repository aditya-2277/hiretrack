import Logo from "../Logo";
import NavbarLinks from "./NavbarLinks";
import { type NavbarProps } from "../../types/props";

const landingClass =
  "sticky top-0 left-0 right-0 py-4 z-50 bg-background md:bg-transparent";

// const appClass =
//   "sticky top-0 left-0 right-0 py-4 z-50 h-16 border-b-2 border-surface/90 bg-background md:bg-transparent";

function LandingNavbar({ variant }: NavbarProps) {
  return (
    <header className={landingClass}>
      <nav className="container mx-auto px-6 flex justify-between items-center ">
        {/*Logo - HireTrack */}
        <Logo variant={variant} />
        {/* Desktop Navigation */}
        <NavbarLinks variant={variant} />
      </nav>
    </header>
  );
}

export default LandingNavbar;

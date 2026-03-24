import Logo from "../Logo";
import NavbarLinks from "./NavbarLinks";
import { type NavbarProps } from "../../types/props";
import ActionButton from "./ActionButton";

// const appClass =
//   "sticky top-0 left-0 right-0 py-4 z-50 h-16 border-b-2 border-surface/90 bg-background md:bg-transparent";

function LandingNavbar({ variant }: NavbarProps) {
  return (
    <header className="sticky top-0 left-0 right-0 py-4 z-50 bg-background md:bg-transparent">
      <nav className="container mx-auto px-6 flex min-h-11 justify-between items-center ">
        {/*Logo - HireTrack */}
        <Logo variant={variant} />
        {/* Desktop Navigation */}
        <NavbarLinks variant={variant} />
        {/*Action Button*/}
        <ActionButton variant={variant} />
      </nav>
    </header>
  );
}

export default LandingNavbar;

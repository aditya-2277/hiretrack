import Logo from "../Logo";
import NavbarLinks from "./NavbarLinks";
import ActionButton from "./ActionButton";
import { PUBLIC_ROUTES } from "../../constants/routes";

function LandingNavbar() {
  return (
    <header className="sticky top-0 left-0 right-0 py-4 z-50 bg-background md:bg-transparent">
      <nav className="container mx-auto px-6 flex min-h-11 justify-between items-center ">
        <Logo to={PUBLIC_ROUTES.home} />
        <NavbarLinks />
        <ActionButton />
      </nav>
    </header>
  );
}

export default LandingNavbar;

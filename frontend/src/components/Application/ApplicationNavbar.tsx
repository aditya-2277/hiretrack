import type { AppUser } from "../../auth/session";
import { APP_ROUTES } from "../../constants/routes";
import Logo from "../Logo";
import NavProfile from "./NavProfile";

type ApplicationNavbarProps = {
  user: AppUser;
};

const appClass =
  "sticky top-0 left-0 right-0 py-4 z-50 h-16 border-b-2 border-surface/90 bg-background md:bg-transparent";

function ApplicationNavbar({ user }: ApplicationNavbarProps) {
  return (
    <header className={appClass}>
      <nav className="container mx-auto px-6 flex justify-between items-center ">
        <Logo to={APP_ROUTES.root} />
        <NavProfile user={user} />
      </nav>
    </header>
  );
}

export default ApplicationNavbar;

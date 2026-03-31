import { Link } from "react-router-dom";
import { PUBLIC_ROUTES } from "../../constants/routes";
import Logo from "../Logo";

function AuthNavbar() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/95 py-4 backdrop-blur">
      <nav className="container mx-auto flex min-h-11 items-center justify-between px-6">
        <Logo to={PUBLIC_ROUTES.home} />
        <Link
          to={PUBLIC_ROUTES.home}
          className="rounded-full bg-primary px-4 py-2 text-foreground shadow-lg shadow-primary/30 transition-all hover:scale-105"
        >
          Go Home
        </Link>
      </nav>
    </header>
  );
}

export default AuthNavbar;

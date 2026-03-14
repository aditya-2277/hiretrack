import { navLinks } from "../data/data";
interface NavProps {
  isLandingPage: boolean;
}

function DesktopNav({ isLandingPage }: NavProps) {
  //const isLoggedIn = true;
  return (
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
  );
}

export default DesktopNav;

import { navLinks } from "../data/data";
import { type NavbarProps } from "../layout/Navbar";

function LandingNav({ variant }: NavbarProps) {
  return (
    <div
      className={`${(variant == "auth" || variant == "app") && "hidden"} items-center`}
    >
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
    </div>
  );
}

export default LandingNav;

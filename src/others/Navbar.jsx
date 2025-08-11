import FlipNavLink from "../utils/FlipNavLink";
import { navLinks } from "../utils/NavLinks";

export default function Navbar() {
  return (
    <div className="bg-blue-950 p-2 justify-center flex gap-3">
      {navLinks.map(link => (
        <FlipNavLink
          key={link.id}
          to={link.to}
          frontText={link.frontText}
          backContent={link.backContent}
        />
      ))}
    </div>
  );
}


import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { links } from "../data";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-emerald-100/90 backdrop-blur-sm border-b border-emerald-200">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:py-8">
        <div className="flex justify-between items-center">
          <a href="#">
            <h2 className="text-3xl font-bold">
              Web<span className="text-emerald-600">Dev</span>
            </h2>
          </a>
          <button
            className="sm:hidden text-3xl text-emerald-600"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        <div
          className={`${isMobileMenuOpen ? "flex" : "hidden"} flex-col gap-y-4 mt-4 sm:mt-0 sm:flex sm:flex-row sm:gap-x-8`}
        >
          {links.map(({ id, href, text }) => (
            <a
              key={id}
              href={href}
              className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              onClick={closeMenu}
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { links } from "../data";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-emerald-100/90 backdrop-blur-sm border-b border-emerald-200">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        {/* Header du menu : Logo + Bouton Burger */}
        <div className="flex justify-between items-center w-full sm:w-auto">
          <a href="#">
            <h2 className="text-3xl font-bold">
              Web<span className="text-emerald-600">Dev</span>
            </h2>
          </a>
          {/* Bouton Burger visible uniquement sur mobile */}
          <button
            className="sm:hidden text-3xl text-emerald-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Liens : cachés sur mobile sauf si isMobileMenuOpen est vrai */}
        <div
          className={`${isMobileMenuOpen ? "flex" : "hidden"} flex-col gap-y-4 mt-4 sm:mt-0 sm:flex sm:flex-row sm:gap-x-3 sm:block`}
        >
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
                onClick={() => setIsMobileMenuOpen(false)} // Ferme le menu au clic
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

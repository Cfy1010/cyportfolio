import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Product Owner / Lead Produit
            <span class="block text-emerald-600">UX & Qualité</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-700 font-medium">
            Responsable UX/UI & Développeur Web 4 ans en produit digital · 12
            ans en management de la qualité
          </p>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed">
            Concevoir, cadrer et faire évoluer des produits numériques utiles,
            accessibles et durables.
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Cfy1010">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/cyrilleallard/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="Image telephone" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;

import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">Je suis Cyrille</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Responsable UX/UI & Développeur Web
          </p>
          <p className="mt-2 text-lg text-slate-700 tracking-wide">
            Transformer les idées en réalité interactive
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="#">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 " />
            </a>
            <a href="#">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300 " />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="Image telephone" className="h-80 lg:h-96 " />
        </article>
      </div>
    </div>
  );
};
export default Hero;

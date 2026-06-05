import { FaGithubSquare, FaLinkedin, FaShieldAlt, FaThLarge, FaClipboardList, FaAsterisk } from "react-icons/fa";

const tags = [
  "PSPO I · 98,8 %",
  "PSM I · 92,5 %",
  "Opquast 880 / 1000",
  "HTML · CSS · React · PHP · SQL",
  "Figma · Azure DevOps · Jira",
];

const Hero = () => {
  return (
    <div className="bg-emerald-900 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Product Owner
            <br />
            Cadrage fonctionnel,
            <span className="block italic text-emerald-400 mt-1">
              UX &amp; Delivery
              <br />
              Agile
            </span>
          </h1>
          <p className="mt-6 text-emerald-100/80 leading-relaxed text-base">
            4 ans en Product Ownership sur un catalogue SaaS B2B multi-produits
            (30+ départements, secteur public) · 11 ans en management de la
            qualité dont une accréditation COFRAC ISO 17020. Profil M-shaped :
            qualité, UX/UI, développement full-stack et agilité — un
            interlocuteur crédible côté métier comme côté technique.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm bg-emerald-800 text-emerald-200 border border-emerald-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-x-4 mt-6">
            <a href="https://github.com/Cfy1010">
              <FaGithubSquare className="h-8 w-8 text-emerald-400 hover:text-white duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/cyrilleallard/">
              <FaLinkedin className="h-8 w-8 text-emerald-400 hover:text-white duration-300" />
            </a>
          </div>
        </article>

        <article className="grid grid-cols-2 gap-4">
          <div className="bg-emerald-800 rounded-2xl p-5">
            <FaThLarge className="h-6 w-6 text-emerald-400 mb-3" />
            <div className="text-3xl font-bold text-white">4 ans</div>
            <div className="text-sm text-emerald-300 mt-1 leading-snug">
              Product Owner &amp; Lead UX
              <br />
              SaaS B2B · secteur public
            </div>
          </div>

          <div className="bg-emerald-800 rounded-2xl p-5">
            <FaShieldAlt className="h-6 w-6 text-emerald-400 mb-3" />
            <div className="text-3xl font-bold text-white">11 ans</div>
            <div className="text-sm text-emerald-300 mt-1 leading-snug">
              Management qualité
              <br />
              dont COFRAC ISO 17020
            </div>
          </div>

          <div className="col-span-2 bg-emerald-800 rounded-2xl p-5 flex items-center gap-6">
            <FaClipboardList className="h-6 w-6 text-emerald-400 shrink-0" />
            <div className="flex gap-8">
              <div>
                <div className="font-bold text-white text-sm">PSPO I</div>
                <div className="text-emerald-300 text-sm">98,8 %</div>
              </div>
              <div>
                <div className="font-bold text-white text-sm">PSM I</div>
                <div className="text-emerald-300 text-sm">92,5 %</div>
              </div>
              <div>
                <div className="font-bold text-white text-sm">Opquast</div>
                <div className="text-emerald-300 text-sm">880 / 1000</div>
              </div>
            </div>
          </div>

          <div className="col-span-2 bg-emerald-800 rounded-2xl p-5 flex items-center gap-4">
            <FaAsterisk className="h-6 w-6 text-emerald-400 shrink-0" />
            <div className="text-sm text-emerald-200">
              Profil M-shaped · Qualité · UX/UI · Développement · Agilité Scrum
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Hero;

const stats = [
  { value: "~4 ans", label: "UX/UI et qualité web chez un éditeur SaaS" },
  { value: "12 ans", label: "Management qualité dont COFRAC ISO 17020" },
  { value: "30+", label: "Départements clients servis" },
  { value: "885", label: "Score Opquast Niveau Avancé" },
];

const tags = [
  "Cadrage fonctionnel",
  "Priorisation UX/UI & correctifs",
  "User Stories",
  "Agile Scrum · EBM",
  "Design System Figma",
  "Audits UX & Opquast",
  "React · PHP · SQL",
  "Azure DevOps · Jira",
];

const About = () => {
  return (
    <section className="bg-emerald-950 py-20 scroll-mt-20" id="about">
      <div className="align-element grid md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">
            À propos
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Mon Parcours</h2>
          <div className="w-10 h-1 bg-emerald-400 mb-8 rounded" />
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }, i) => (
              <div key={i} className="bg-emerald-900 rounded-2xl p-5">
                <div className="text-3xl font-bold text-emerald-400">{value}</div>
                <div className="text-sm text-emerald-300 mt-1 leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-emerald-100/80 leading-relaxed space-y-5 text-base">
          <p>
            12 ans en inspection et management de la qualité, dont la
            construction complète d'une accréditation{" "}
            <strong className="text-emerald-400">COFRAC ISO 17020</strong>.
            Puis presque 4 ans chez Berger-Levrault, éditeur de logiciels SaaS
            pour des départements et des régions : d&apos;abord Référent Qualité,
            puis développeur web responsable UX/UI et qualité web, avec la
            décision finale sur l&apos;UX/UI. Refontes produit de l&apos;analyse de
            l&apos;existant jusqu&apos;à la livraison, en équipe travaillant en sprints,
            et support fonctionnel au quotidien.
          </p>

          <div className="border-l-4 border-emerald-500 pl-4">
            <p className="text-xs font-bold tracking-widest uppercase text-emerald-400 mb-2">
              Ce que j'apporte concrètement
            </p>
            <p>
              Une{" "}
              <strong className="text-white">
                lecture produit nourrie par la qualité
              </strong>{" "}
              et la gestion des exigences · Une capacité à{" "}
              <strong className="text-white">
                cadrer des besoins métiers et réglementaires complexes
              </strong>{" "}
              · Une{" "}
              <strong className="text-white">pratique technique réelle</strong>{" "}
              (HTML/CSS, React, PHP/SQL) qui facilite le dialogue et la
              confiance avec les équipes de dev.
            </p>
          </div>

          <p>
            Certifié PSPO I (98,8 %) et PSM I (92,5 %) chez Scrum.org en 2026,
            et{" "}
            <strong className="text-emerald-400">Opquast Avancé (885/1000)</strong>
            , je recherche un poste de Product Owner : en présentiel autour de
            Tours, en hybride selon la distance, ou en full remote.
          </p>

          <p>
            J'évolue naturellement dans des{" "}
            <strong className="text-white">équipes pluridisciplinaires</strong>{" "}
            et j&apos;ai conçu des produits pour les{" "}
            <strong className="text-white">secteurs public et social</strong>,
            utilisés par 6 profils d&apos;usagers (allocataires RSA, recruteurs,
            conseillers, décideurs…). Aujourd&apos;hui, je pratique le rôle de
            Product Owner sur{" "}
            <a
              href="https://ofests.com"
              className="text-emerald-400 underline hover:text-white"
            >
              O-Fests
            </a>
            , mon projet personnel.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm bg-emerald-900 text-emerald-200 border border-emerald-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

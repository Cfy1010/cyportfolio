import { skills } from "../data";
import SkillsCard from "./SkillsCard";

const mainSkills = (all) => all.slice(0, all.length - 1);
const lastSkill = (all) => all[all.length - 1];

const Skills = () => {
  return (
    <section className="bg-emerald-950 py-20 scroll-mt-20" id="skills">
      <div className="align-element">
        <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Compétences
        </p>
        <h2 className="text-4xl font-bold text-white mb-4">
          Expertise Produit &amp; UX
        </h2>
        <div className="w-10 h-1 bg-emerald-400 mb-6 rounded" />
        <p className="text-emerald-700 text-xs font-semibold tracking-widest uppercase border-b border-emerald-800 pb-4 mb-8">
          Produit · Agilité · Design
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mainSkills(skills).map((skill) => (
            <SkillsCard key={skill.id} {...skill} />
          ))}
        </div>
        <div className="mt-4">
          <SkillsCard {...lastSkill(skills)} wide />
        </div>
      </div>
    </section>
  );
};

export default Skills;

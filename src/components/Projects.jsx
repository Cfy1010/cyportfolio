import { projects, professionalProjects } from "../data";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section className="bg-emerald-950 py-20 scroll-mt-20" id="projects">
      <div className="align-element">
        <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Portfolio
        </p>
        <h2 className="text-4xl font-bold text-white mb-4">Mes Réalisations</h2>
        <div className="w-10 h-1 bg-emerald-400 mb-10 rounded" />

        <p className="text-emerald-700 text-xs font-semibold tracking-widest uppercase border-b border-emerald-800 pb-4 mb-6">
          Réalisations professionnelles — Berger-Levrault
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {professionalProjects.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </div>

        <p className="text-emerald-700 text-xs font-semibold tracking-widest uppercase border-b border-emerald-800 pb-4 mb-6">
          Projets personnels &amp; apprentissage
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="image" className="w-full h-64" />
        <article>
          <SectionTitle text="About Me" />
          <p>
            Fort de plus de 6 ans d'expérience en tant que responsable UX/UI et
            développeur web, je suis passionné par la conception et la gestion
            de projets web innovants, axés sur l'expérience utilisateur. <br />
            Certifié OpQuast (score 885), Agile Scrum et Google IT Support, j'ai
            acquis une expertise solide dans la création de plateformes
            collaboratives performantes et accessibles. Mon parcours de 12 ans
            en gestion de la qualité (QSE) vient renforcer mes compétences en
            gestion de projets complexes. <br /> <br />
            {/* Chez Berger-Levrault, leader du numérique au service du secteur
            public et social, j'ai contribué à la refonte UX/UI de plateformes
            destinées à des collectivités, associations et établissements de
            santé. <br /> */}
            Mon travail collaboratif avec des équipes pluridisciplinaires a
            permis de livrer des solutions de qualité, optimisées pour
            l'accessibilité, la performance et l'innovation. <br />
            Je suis fier d'avoir participé à des projets facilitant la
            coopération et la coordination dans des environnements publics et
            sociaux.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;

import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="image" className="w-full h-64" />
        <article className="prose prose-lg">
          <SectionTitle text="About Me" />
          <p>
            Avec plus de <strong>4 ans d’expérience en produit digital</strong>{" "}
            en tant que Responsable UX/UI et Développeur Web, je conçois et fais
            évoluer des projets numériques centrés utilisateur, utiles et
            durables.
          </p>

          <p>
            Certifié <strong>OpQuast niveau avancé (score 885)</strong> et
            Google IT Support, j’ai contribué à la création de
            <strong>
              plateformes collaboratives performantes et accessibles
            </strong>
            , dans des contextes métiers et réglementaires exigeants.
          </p>

          <p>
            Mon parcours de{" "}
            <strong>12 ans en management de la qualité (QSE)</strong>
            renforce mon approche produit : exigence, fiabilité, amélioration
            continue et pilotage de projets complexes.
          </p>

          <p>
            J’évolue naturellement dans des{" "}
            <strong>équipes pluridisciplinaires</strong>
            et j’ai participé à des projets à fort impact dans les secteurs
            public et social, facilitant la coopération, la coordination et la
            mise en valeur de l’expérience utilisateur.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;

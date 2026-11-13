import { nanoid } from "nanoid";
import {
  // FaAccessibleIcon,
  // FaAtlassian,
  // FaChartBar,
  FaClipboardList,
  FaCode,
  // FaDev,
  FaFigma,
  // FaGit,
  // FaGithub,
  FaMapMarkerAlt,
  FaMobileAlt,
  // FaPhp,
  // FaRProject,
  FaToolbox,
  FaUsers,
} from "react-icons/fa";
import { FaDiagramProject } from "react-icons/fa6";
// import { SiFigma } from "react-icons/si";

// import zazyImg from "./assets/zazymusic-min.jpg";
// import cymoviesImg from "./assets/cymovies-min.jpg";
// import cynewsImg from "./assets/cynews-min.jpg";
// import cysongImg from "./assets/cysong-min.jpg";
// import cysoundImg from "./assets/cysound-min.jpg";
// import formvalidatorImg from "./assets/formvalidator-min.png";
// import guitargodsImg from "./assets/guitargods-min.jpg";
// import imgstarwarsImg from "./assets/imgstarwars-min.jpg";
// import modernportfolioImg from "./assets/modernportfolio.png";
// import respireImg from "./assets/respire-min.jpg";
// import todolistReactImg from "./assets/todolist_in_react.png";
// import todolistVanillaImg from "./assets/todolist-vanillajs-min.png";
// import todosImg from "./assets/todos-min.jpg";
// import cyimmoImg from "./assets/cyimmo-min.jpg";
import ofestsImg from "./assets/ofests-card.svg";

export const links = [
  // { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "Expertise Produit & UX" },
  { id: nanoid(), href: "#about", text: "Mon Parcours" },
  { id: nanoid(), href: "#projects", text: "Mes Réalisations" },
];

export const skills = [
  {
    id: nanoid(),
    title: "Gestion de produit & Méthodologies agiles",
    icon: <FaDiagramProject className="h-16 w-16 text-emerald-500" />,
    text: `Cadrage fonctionnel dans des contextes métiers et réglementaires complexes : recueil des besoins, cahiers des charges, user stories et critères d'acceptation, découpage en lots.\nTravail en équipe, en sprints, jusqu'à la mise en production. Certifié PSPO I et PSM I.\nCollaboration étroite avec développeurs et parties prenantes pour aligner besoins utilisateurs, contraintes techniques et objectifs.`,
  },
  {
    id: nanoid(),
    title: "UX / UI",
    icon: <FaFigma className="h-16 w-16 text-emerald-500" />,
    text: `Conception d’interfaces orientées usage et valeur : recherche utilisateur, parcours, wireframes, maquettage et prototypage interactif.
    Audits UX et analyses heuristiques pour améliorer l’utilisabilité et l’accessibilité.
    Attention forte portée à la cohérence des interfaces, aux design systems et à l’amélioration continue de l’expérience.
    `,
    tools: "Outils : Figma, Adobe XD",
  },
  {
    id: nanoid(),
    title: "Qualité web & Accessibilité",
    icon: <FaToolbox className="h-16 w-16 text-emerald-500" />,
    text: `Intégration des bonnes pratiques de qualité web dès la conception : accessibilité, performance, robustesse et maintenabilité.
    Application du référentiel Opquast (certifié niveau avancé – score 885) dans une logique produit, en lien avec les enjeux utilisateurs et réglementaires.
    La qualité est abordée comme un levier de valeur produit, et non comme une contrainte.`,
  },
  {
    id: nanoid(),
    title: "Culture technique",
    icon: <FaCode className="h-16 w-16 text-emerald-500" />,
    text: `Développement front-end et back-end (React, JavaScript, HTML/CSS, PHP, SQL) : je lis, j'écris et je relis du code, ce qui facilite le dialogue avec les équipes de développement.`,
  },

  // {
  //   id: nanoid(),
  //   title: "Jira",
  //   icon: <FaAtlassian className="h-16 w-16 text-emerald-500" />,
  //   text: "Compétences sur l’outil de gestion de projet agile pour planifier, suivre et coordonner efficacement les tâches en équipe. Configuration de workflows, gestion des sprints Scrum/Kanban, suivi des tickets, et reporting pour une meilleure visibilité sur l'avancement des projets. Collaboration avec les équipes pluridisciplinaires (PO,QA).",
  // },
  // {
  //   id: nanoid(),
  //   title: "",
  //   icon: <FaChartBar className="h-16 w-16 text-emerald-500" />,
  //   text: "",
  // },
  {
    id: nanoid(),
    title: "Outils & collaboration",
    icon: <FaToolbox className="h-16 w-16 text-emerald-500" />,
    text: `Utilisation quotidienne d’outils collaboratifs et de pilotage : Jira, Azure DevOps, Git/GitHub, Confluence.
    Gestion du versioning, des branches, des revues de pull requests et de la documentation, dans une logique de travail d’équipe et d’amélioration continue.`,
  },
  // {
  //   id: nanoid(),
  //   title: "Git/GitHub",
  //   icon: <FaGithub className="h-16 w-16 text-emerald-500" />,
  //   text: "Utilisation quotidienne de pour le versioning, la gestion de branches, les merges, résolution de conflits, pull requests, revue de code,documentation collaborative.",
  // },
  // {
  //   id: nanoid(),
  //   title: "Php",
  //   icon: <FaPhp className="h-16 w-16 text-emerald-500" />,
  //   text: "Copetences back-end orienté objet (POO), gestion des requêtes SQL (MySQL), intégration d'APIs REST, génération de PDF, traitement de formulaires.",
  // },
  // {
  //   id: nanoid(),
  //   title: "",
  //   icon: <FaCode className="h-16 w-16 text-emerald-500" />,
  //   text: "",
  // },
];

// Projets masqués le 29/10/2026 pour recentrer le portfolio sur le profil PO
// (réversible : décommenter l'entrée et son import d'image).
export const projects = [
  {
    id: nanoid(),
    img: ofestsImg,
    url: "https://ofests.com",
    github: "https://github.com/Cfy1010/ofests",
    title: "O-Fests · projet personnel (2026)",
    text: "Annuaire des festivals de metal en Europe, bilingue, en construction et livré par incréments. Rôle de Product Owner : Product Goal, backlog en epics et user stories, Definition of Done, 30 décisions tracées en ADR, analyse de la concurrence. Développement assisté par IA (Claude Code) : je définis, découpe, arbitre et valide.",
    tags: ["Product Ownership", "Astro", "React", "Supabase", "Claude Code"],
  },
  // {
  //   id: nanoid(),
  //   img: cyimmoImg,
  //   url: "https://cfy1010.github.io/CyPyImmo/",
  //   github: "https://github.com/Cfy1010/CyPyImmo",
  //   title: "CyPyImmo",
  //   text: "Site immobilier, ancien projet d'apprentissage : Python, Django, PostgreSQL.",
  // },
  // {
  //   id: nanoid(),
  //   img: cysoundImg,
  //   url: "https://cfy1010.github.io/CySounds/",
  //   github: "https://github.com/Cfy1010/CySounds",
  //   title: "CySounds",
  //   text: "Site vitrine thématique musique : HTML/CSS/JS.",
  // },
  // {
  //   id: nanoid(),
  //   img: zazyImg,
  //   url: "https://cfy1010.github.io/CyMusicPlayer/",
  //   github: "https://github.com/Cfy1010/CyMusicPlayer",
  //   title: "Zazy's Music Player",
  //   text: "Lecteur audio custom : HTML/CSS/JS.",
  // },
  // {
  //   id: nanoid(),
  //   img: todolistReactImg,
  //   url: "https://cfy1010.github.io/todolist-in-react/",
  //   github: "https://github.com/Cfy1010/todolist-in-react",
  //   title: "Todolist in React",
  //   text: "Todo list : exercice React (composants, état, CRUD).",
  // },
  // {
  //   id: nanoid(),
  //   img: cysongImg,
  //   url: "https://cfy1010.github.io/CyLyricsSearchApp/",
  //   github: "https://github.com/Cfy1010/CyLyricsSearchApp",
  //   title: "Lyrics Search App",
  //   text: "Recherche de paroles via API : JS, Fetch, async/await.",
  // },
  // {
  //   id: nanoid(),
  //   img: cymoviesImg,
  //   url: "https://cfy1010.github.io/CyMovies-2022/",
  //   github: "https://github.com/Cfy1010/CyMovies-2022",
  //   title: "CyMovies",
  //   text: "App de films coups de cœur : React, API TMDB.",
  // },
  // {
  //   id: nanoid(),
  //   img: respireImg,
  //   url: "https://cfy1010.github.io/CyRelaxerApp/",
  //   github: "https://github.com/Cfy1010/CyRelaxerApp",
  //   title: "Relaxer App",
  //   text: "Mini app de relaxation : CSS animation, JS timer.",
  // },
  // {
  //   id: nanoid(),
  //   img: modernportfolioImg,
  //   url: "https://cfy1010.github.io/CyOldPortfolio/",
  //   github: "https://github.com/Cfy1010/CyOldPortfolio",
  //   title: "CyOldPortfolio",
  //   text: "1er portfolio personnel : HTML/CSS/JS (2019).",
  // },
];

export const professionalProjects = [
  {
    id: nanoid(),
    img: null,
    date: "2020 – 2024",
    title: "NeoJob / NeoGestion / Insertion-Formation-Inclusion",
    subtitle: "SaaS B2B · Secteur public · 30+ départements clients",
    text: "Cadrage fonctionnel et UX/UI multiproduits pour 6 profils usagers : user stories et critères d'acceptation, maquettes, recette, support fonctionnel au quotidien. Développement sur 15+ instances clients.",
    tags: ["Cadrage fonctionnel", "Figma", "React", "PHP", "SQL", "Azure DevOps"],
    icon: <FaUsers className="h-4 w-4 text-emerald-400" />,
    professional: true,
  },
  {
    id: nanoid(),
    img: null,
    date: "2020 – 2024",
    title: "Qanteen",
    subtitle: "Application mobile · Restauration collective",
    text: "Conception des parcours et des maquettes d'une application mobile de restauration scolaire : repas, évaluation par les usagers, fiches recette avec allergènes et labels, compte famille.",
    tags: ["UX Design", "Adobe XD", "Figma"],
    icon: <FaMobileAlt className="h-4 w-4 text-emerald-400" />,
    professional: true,
  },
  {
    id: nanoid(),
    img: null,
    date: "2020 – 2024",
    title: "Cartographie interactive des offres",
    subtitle: "Offres d'emploi & d'insertion géolocalisées",
    text: "Carte interactive des offres pour le CD17, construite à partir des demandes du client : spécification et tests des comportements de recherche.",
    tags: ["Leaflet", "Spécification", "Tests"],
    icon: <FaMapMarkerAlt className="h-4 w-4 text-emerald-400" />,
    professional: true,
  },
  {
    id: nanoid(),
    img: null,
    date: "2020 – 2024",
    title: "Design System Figma multi-équipes",
    subtitle: "Référentiel UX commun · Comité Ergonomique",
    text: "Déploiement d'un Design System partagé entre plusieurs équipes produit. Reprise et animation, comme Référent Qualité, du Comité Ergonomique sponsorisé par le CODIR. Audits Opquast (25 critères/plateforme).",
    tags: ["Figma", "Design System", "Opquast", "Accessibilité"],
    icon: <FaFigma className="h-4 w-4 text-emerald-400" />,
    professional: true,
  },
  {
    id: nanoid(),
    img: null,
    date: "2021 – 2022",
    title: "Viviers",
    subtitle: "Module conçu pour un département, pensé pour être proposé à tous les clients",
    text: "Rédaction des user stories, des flux et des wireframes, puis revue de la fonctionnalité développée par l'équipe.",
    tags: ["User Stories", "FigJam", "Figma", "Recette"],
    icon: <FaClipboardList className="h-4 w-4 text-emerald-400" />,
    professional: true,
  },
];

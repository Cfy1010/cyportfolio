import { nanoid } from "nanoid";
import {
  FaAccessibleIcon,
  FaAtlassian,
  FaChartBar,
  FaCode,
  FaDev,
  FaFigma,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaPhp,
  FaReact,
  FaRProject,
  FaToolbox,
  FaUsers,
} from "react-icons/fa";
import { FaDiagramNext, FaDiagramProject } from "react-icons/fa6";
import { SiFigma } from "react-icons/si";

import zazyImg from "./assets/zazymusic-min.jpg";
import cymoviesImg from "./assets/cymovies-min.jpg";
import cynewsImg from "./assets/cynews-min.jpg";
import cysongImg from "./assets/cysong-min.jpg";
import cysoundImg from "./assets/cysound-min.jpg";
import formvalidatorImg from "./assets/formvalidator-min.png";
import guitargodsImg from "./assets/guitargods-min.jpg";
import imgstarwarsImg from "./assets/imgstarwars-min.jpg";
import modernportfolioImg from "./assets/modernportfolio.png";
import respireImg from "./assets/respire-min.jpg";
import todolistReactImg from "./assets/todolist_in_react.png";
import todolistVanillaImg from "./assets/todolist-vanillajs-min.png";
import todosImg from "./assets/todos-min.jpg";
import accessformImg from "./assets/formvalidator-min.png";
import cyimmoImg from "./assets/cyimmo-min.jpg";
import tableaubord67Img from "./assets/tableaubord67.png";
import qanteenImg from "./assets/qanteen.png";
import cartographyImg from "./assets/cartography.webp";

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
    text: `Cadrage fonctionnel et pilotage de projets numériques dans des contextes métiers et réglementaires complexes.\nApproche Agile Scrum : priorisation par la valeur, gestion du backlog, rédaction et suivi des user stories, animation des rituels (daily, sprint review, rétrospectives).\nCollaboration étroite avec développeurs, designers et parties prenantes afin d’aligner besoins utilisateurs, contraintes techniques et objectifs organisationnels.`,
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
    Application du référentiel OpQuast (certifié niveau avancé – score 885) dans une logique produit, en lien avec les enjeux utilisateurs et réglementaires.
    La qualité est abordée comme un levier de valeur produit, et non comme une contrainte.`,
  },
  {
    id: nanoid(),
    title: "React & front-end moderne",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: `Développement d’interfaces front-end avec React dans une approche orientée produit et expérience utilisateur : composants réutilisables, gestion de l’état, formulaires, listes dynamiques et intégration d’API.
    Attention portée aux performances, à l’accessibilité et à la qualité de l’expérience utilisateur dans des projets concrets.`,
  },
  {
    id: nanoid(),
    title: "JavaScript & logique applicative",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: `Développement de fonctionnalités web interactives avec une attention particulière portée à la logique métier, à la clarté des flux utilisateurs et à la maintenabilité du code.
    Gestion des interactions (DOM, événements), appels asynchrones (Fetch, Promises, async/await) et structuration de fonctionnalités lisibles, évolutives et alignées avec les besoins produit.`,
  },

  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: `Intégration HTML sémantique et CSS responsive pour des interfaces accessibles, performantes et cohérentes visuellement.
    Attention portée à la lisibilité du code, à la compatibilité multi-supports et aux standards du web.`,
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
    text: `Utilisation quotidienne d’outils collaboratifs et de pilotage : Jira, Azure DevOps, Git/GitHub, Confluence, Miro.
    Gestion du versioning, des branches, des revues de code et de la documentation, dans une logique de travail d’équipe et d’amélioration continue.`,
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

export const projects = [
  {
    id: nanoid(),
    img: cyimmoImg,
    url: "https://cfy1010.github.io/CyPyImmo/",
    github: "https://github.com/Cfy1010/CyPyImmo",
    title: "CyPyImmo",
    text: "Site immobilier — Python, Django, PostgreSQL.",
  },
  {
    id: nanoid(),
    img: cysoundImg,
    url: "https://cfy1010.github.io/CySounds/",
    github: "https://github.com/Cfy1010/CySounds",
    title: "CySounds",
    text: "Site vitrine thématique musique — HTML/CSS/JS.",
  },
  {
    id: nanoid(),
    img: zazyImg,
    url: "https://cfy1010.github.io/CyMusicPlayer/",
    github: "https://github.com/Cfy1010/CyMusicPlayer",
    title: "Zazy's Music Player",
    text: "Lecteur audio custom — HTML/CSS/JS.",
  },
  {
    id: nanoid(),
    img: todolistReactImg,
    url: "https://cfy1010.github.io/todolist-in-react/",
    github: "https://github.com/Cfy1010/todolist-in-react",
    title: "Todolist in React",
    text: "Todo list — exercice React (composants, état, CRUD).",
  },
  {
    id: nanoid(),
    img: cysongImg,
    url: "https://cfy1010.github.io/CyLyricsSearchApp/",
    github: "https://github.com/Cfy1010/CyLyricsSearchApp",
    title: "Lyrics Search App",
    text: "Recherche de paroles via API — JS, Fetch, async/await.",
  },
  {
    id: nanoid(),
    img: cymoviesImg,
    url: "https://cfy1010.github.io/CyMovies-2022/",
    github: "https://github.com/Cfy1010/CyMovies-2022",
    title: "CyMovies",
    text: "App de films coups de cœur — React, API TMDB (2019).",
  },
  {
    id: nanoid(),
    img: accessformImg,
    url: "https://cfy1010.github.io/CyAccessForm/",
    github: "https://github.com/Cfy1010/CyAccessForm",
    title: "CyAccessForm",
    text: "Formulaire accessible — exemples HTML5 accessibilité.",
  },
  {
    id: nanoid(),
    img: respireImg,
    url: "https://cfy1010.github.io/CyRelaxerApp/",
    github: "https://github.com/Cfy1010/CyRelaxerApp",
    title: "Relaxer App",
    text: "Mini app de relaxation — CSS animation, JS timer.",
  },
  {
    id: nanoid(),
    img: modernportfolioImg,
    url: "https://cfy1010.github.io/CyOldPortfolio/",
    github: "https://github.com/Cfy1010/CyOldPortfolio",
    title: "CyOldPortfolio",
    text: "1er portfolio personnel — HTML/CSS/JS (2019).",
  },
];

export const professionalProjects = [
  {
    id: nanoid(),
    img: tableaubord67Img,
    date: "2020 – 2024",
    title: "NeoJob / NeoGestion / Insertion-Formation-Inclusion",
    subtitle: "SaaS B2B · Secteur public · 30+ départements clients",
    text: "Cadrage fonctionnel et UX/UI multiproduits pour 6 profils usagers. Priorisation backlog par la valeur, rédaction US et critères d'acceptation. 15+ instances clients déployées.",
    tags: ["Product Ownership", "Figma", "React", "PHP", "SQL", "Azure DevOps"],
    icon: <FaUsers className="h-4 w-4 text-emerald-400" />,
    professional: true,
  },
  {
    id: nanoid(),
    img: qanteenImg,
    date: "2020 – 2024",
    title: "Qanteen",
    subtitle: "Application mobile · Restauration collective",
    text: "Conception UX et développement full-stack : planning hebdomadaire, fiches recettes et allergènes, onboarding multiprofils, authentification SMS.",
    tags: ["UX Design", "Adobe XD", "React", "PHP", "Auth SMS"],
    icon: <FaMobileAlt className="h-4 w-4 text-emerald-400" />,
    professional: true,
  },
  {
    id: nanoid(),
    img: cartographyImg,
    date: "2020 – 2024",
    title: "Cartographie interactive des offres",
    subtitle: "Offres d'emploi & d'insertion géolocalisées",
    text: "Interfaces cartographiques interactives avec filtres dynamiques, alimentées par les flux data du service interne.",
    tags: ["JavaScript", "React", "Leaflet", "API data"],
    icon: <FaMapMarkerAlt className="h-4 w-4 text-emerald-400" />,
    professional: true,
  },
  {
    id: nanoid(),
    img: null,
    date: "2020 – 2024",
    title: "Design System Figma multi-équipes",
    subtitle: "Référentiel UX commun · Comité Ergonomique",
    text: "Déploiement d'un Design System partagé entre plusieurs équipes produit. Comité Ergonomique mis en place en 2 mois, remonté jusqu'au CODIR. Audits Opquast (25 critères/plateforme).",
    tags: ["Figma", "Design System", "Opquast", "Accessibilité"],
    icon: <FaFigma className="h-4 w-4 text-emerald-400" />,
    professional: true,
  },
];

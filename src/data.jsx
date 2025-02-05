import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Expert en HTML et CSS, capable de créer des sites web visuellement attractifs et responsives pour offrir une expérience utilisateur optimale.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Compétence en JavaScript, pour la création d'applications web interactives et dynamiques, en mettant l'accent sur des interactions utilisateur fluides et une fonctionnalité optimale.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Maîtrise avancée de React, pour le développement d'applications front-end efficaces et interactives, avec un fort accent sur l'architecture basée sur les composants.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "../src/assets/imgstarwars-min.jpg",
    url: "https://cfy1010.github.io/CyIntroStarWars/",
    github: "https://github.com/Cfy1010/CyIntroStarWars",
    title: "Star Wars opening crawl",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "../src/assets/cysound-min.jpg",
    url: "https://cfy1010.github.io/CySounds/",
    github: "https://github.com/Cfy1010/CySounds",
    title: "CySounds",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "../src/assets/cynews-min.jpg",
    url: "https://cfy1010.github.io/Cy-News/",
    github: "https://github.com/Cfy1010/Cy-News",
    title: "CyNews",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    id: nanoid(),
    img: "../src/assets/guitargods-min.jpg",
    url: "https://cfy1010.github.io/CyGuitarGods/",
    github: "https://github.com/Cfy1010/CyGuitarGods",
    title: "Guitar Gods",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "../src/assets/zazymusic-min.jpg",
    url: "https://cfy1010.github.io/CyMusicPlayer/",
    github: "https://github.com/Cfy1010/CyMusicPlayer",
    title: "Zazy's Music Player",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "../src/assets/modernportfolio.png",
    url: "https://cfy1010.github.io/CyModernPortfolio/",
    github: "https://github.com/Cfy1010/CyModernPortfolio",
    title: "CyModernPortfolio",
    text: "1er portfolio datant de 2019",
  },
  {
    id: nanoid(),
    img: "../src/assets/formvalidator-min.png",
    url: "https://cfy1010.github.io/CyFormValidator/",
    github: "https://github.com/Cfy1010/CyFormValidator",
    title: "Little Form Validator in HTML5 CSS3 & JS",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: nanoid(),
    img: "../src/assets/cyaccessform.png",
    url: "https://cfy1010.github.io/CyAccessForm/",
    github: "https://github.com/Cfy1010/CyAccessForm",
    title: "CyAccessForm",
    text: "Exemples d'accessibilité en HTML.",
  },
  {
    id: nanoid(),
    img: "../src/assets/todolist_in_react.png",
    url: "https://cfy1010.github.io/todolist_in_react/",
    github: "https://github.com/Cfy1010/todolist_in_react",
    title: "todolist_in_react",
    text: "",
  },
  {
    id: nanoid(),
    img: "../src/assets/todolist-vanillajs-min.png",
    url: "https://cfy1010.github.io/todolist/",
    github: "https://github.com/Cfy1010/todolist",
    title: "My TodoList",
    text: "Petite TodoListe en Vanilla JS.",
  },
];

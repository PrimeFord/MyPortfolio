import { link } from "fs";
import { title } from "process";

interface NavData {
  id: number;
  name: string;
  route: string;
}

export const navData: NavData[] = [
  {
    id: 1,
    name: "About",
    route: "#about",
  },
  {
    id: 2,
    name: "Skills",
    route: "#skills",
  },
  {
    id: 3,
    name: "Projects",
    route: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    route: "#contact",
  },
];

interface UsingData {
  src: string;
  title: string;
  alt: string;
}

export const usingData: UsingData[] = [
  {
    src: "html",
    title: "Html5",
    alt: "Html",
  },
  {
    src: "css",
    title: "Css3",
    alt: "Css",
  },
  {
    src: "js",
    title: "JavaScript",
    alt: "JavaScript",
  },
  {
    src: "tailwind",
    title: "Tailwind",
    alt: "Tailwind",
  },
  {
    src: "react",
    title: "React JS",
    alt: "React",
  },
  {
    src: "redux",
    title: "Redux",
    alt: "Redux",
  },

  {
    src: "nextjs",
    title: "Next JS",
    alt: "Next",
  },
  {
    src: "ts",
    title: "TypeScript",
    alt: "TypeScript",
  },
  {
    src: "sass",
    title: "Sass",
    alt: "Sass",
  },
  {
    src: "babel",
    title: "Babel",
    alt: "Babel",
  },
  {
    src: "vite",
    title: "Vite",
    alt: "Vite",
  },
  {
    src: "npm",
    title: "Npm",
    alt: "Npm",
  },
  {
    src: "git",
    title: "Git",
    alt: "Git",
  },
  {
    src: "github",
    title: "Github",
    alt: "Github",
  },
  {
    src: "figma",
    title: "Figma",
    alt: "Figma",
  },
  {
    src: "vscode",
    title: "Vscode",
    alt: "Vscode",
  },
];

interface UsingData {
  src: string;
  title: string;
  alt: string;
}

export const learningData: UsingData[] = [
  {
    src: "./images/vue.svg",
    title: "Vue JS",
    alt: "Vue",
  },
  {
    src: "./images/figma.svg",
    title: "Figma",
    alt: "Figma",
  },
  {
    src: "./images/python.svg",
    title: "Python",
    alt: "Python",
  },
];

interface ProjectData {
  id: number;
  title: string;
  desc: string;
  tools: string;
  img: string;
  link: string;
  github: string;
}

export const projectData: ProjectData[] = [
  {
    id: 1,
    title: "Weather App",
    desc: "This Project shows the weather condition of a searched location and the forecast of the next five days.... it visualize the location's windspeed, humidity, pressure and temperature graph.",
    tools: "HTML, CSS, ReactJS, Vite and Tailwind-CSS",
    img: "/images/weather_app.png",
    link: "https://weather-app-pi-rosy.vercel.app/",
    github: "https://github.com/PrimeFord/WeatherApp",
  },
  {
    id: 2,
    title: "URL Shortner",
    desc: "This site truncates a website into its short version, while still lading the same webpage. it has full mobile responsiveness",
    tools: "HTML, CSS, ReactJS, Vite amd Tailwind-CSS",
    img: "/images/url_shortner.png",
    link: "https://url-shortener-primeford.vercel.app/",
    github: "https://github.com/PrimeFord/URL_shortener",
  },
  {
    id: 3,
    title: "Share Web-router",
    desc: "This project is a clone of Share website. it is fully responsive on a mobile phone",
    tools: "HTML, CSS, ReactJS, React-router, Vite and Tailwind-CSS",
    img: "/images/web_router.png",
    link: "https://hilarious-daffodil-d9f7b0.netlify.app/",
    github: "https://github.com/PrimeFord/Share_WebRouter",
  },
  {
    id: 4,
    title: "Code-Village Website",
    desc: "This project is a clone of code village official website. it is fully responsive on a mobile phone",
    tools: "HTML, CSS, ReactJS, Vite and Tailwind-CSS",
    img: "/images/code_village.png",
    link: "https://beautiful-heliotrope-b80911.netlify.app/",
    github: "https://github.com/PrimeFord/Code_Village-Website-Clone",
  },
  {
    id: 5,
    title: "Landing Page",
    desc: "This project is a landing page design from figma using react app with full mobile responsiveness",
    tools: "HTML, CSS, ReactJS, myreact-app and Tailwind-CSS",
    img: "/images/landing_page.png",
    link: "https://sparkling-tartufo-5e204b.netlify.app/",
    github: "https://github.com/PrimeFord/Figma_Landing_Page_1",
  },
  {
    id: 6,
    title: "Redux Todo List",
    desc: "This todo list project was developed using react-redux.... it possses add, toggle and remove reducer to make it effective. it comes with full mobile responsiveness.",
    tools: "HTML, CSS, ReactJS, Redux, Vite and Tailwind-CSS",
    img: "/images/redux_todo.png",
    link: "https://redux-todo-list-amber.vercel.app/",
    github: "https://github.com/PrimeFord/Redux-Todo_List",
  },
];

interface SocialData {
  name: string;
  link: string;
}

export const socialData: SocialData[] = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/muhammedfuad-bashar",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/BMuhammedfuad",
  },
  {
    name: "Github",
    link: "https://github.com/PrimeFord",
  },
  {
    name: "CodePen",
    link: "https://codepen.io/PrimeFord",
  },
  {
    name: "Telegram",
    link: "https://t.me/bjford",
  },
  {
    name: "Email",
    link: "https://mailto:wolabash@gmail.com",
  },
];

export const platformData: SocialData[] = [
  {
    name: "Vercel",
    link: "https://vercel.com/primeford",
  },
  {
    name: "Netlify",
    link: "https://app.netlify.com/teams/primeford/overview",
  },
  {
    name: "Codementor",
    link: "https://www.codementor.io/projects",
  },
  {
    name: "Notion",
    link: "https://www.notion.so",
  },
];

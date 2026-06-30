import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiFigma,
  SiGit,
  SiGithub,
  SiLinux,
  SiVercel,
  SiRender,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const skillGroups = [
{
  title: "Frontend",
  items: [
    { icon: SiReact, name: "React.js" },
    { icon: SiJavascript, name: "JavaScript ES6+" },
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiCss, name: "CSS3" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiBootstrap, name: "Bootstrap" },
  ],
},
{
  title: "Backend",
  items: [
    
    { icon: SiExpress, name: "Express.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPostman, name: "Postman" },
    { icon: FaJava, name: "Java" },
  ],
},
{
  title: "DATABASE",
  items: [
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiMysql, name: "SQL" },
  ],
},
{
  title: "DevOps",
  items: [
    { icon: SiGit, name: "Git" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiLinux, name: "Linux" },
    { icon: SiVercel, name: "Vercel" },
    { icon: SiRender, name: "Render" },
    { icon: SiDocker, name: "Docker" },
  ],
},
];
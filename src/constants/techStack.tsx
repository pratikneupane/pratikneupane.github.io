import type { Icon } from "../types";
import {
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { DiMongodb } from "react-icons/di";

export const icons: Icon[] = [
  {
    name: "Typescript",
    icon: <SiTypescript />,
    darkColor: "#007acc",
    lightColor: "#007acc",
  },
  {
    name: "React",
    icon: <SiReact />,
    darkColor: "#61DAFB",
    lightColor: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    darkColor: "#ffffff",
    lightColor: "#000000",
  },
  {
    name: "Node.js",
    icon: <IoLogoNodejs />,
    darkColor: "#339933",
    lightColor: "#339933",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    darkColor: "#ffffff",
    lightColor: "#000000",
  },
  {
    name: "MongoDB",
    icon: <DiMongodb />,
    darkColor: "#47A248",
    lightColor: "#47A248",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    darkColor: "#00758F",
    lightColor: "#00758F",
  },
];

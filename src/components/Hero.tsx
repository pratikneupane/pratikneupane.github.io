import {
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { DiMongodb } from "react-icons/di";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import IconContainer from "./IconContainer";
import Link from "next/link";

type Props = {
  isDarkMode: boolean;
};

type Icon = {
  name: string;
  icon: JSX.Element;
  darkColor: string;
  lightColor: string;
};

const icons: Icon[] = [
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
const Hero = (props: Props) => {
  const { isDarkMode } = props;
  return (
    <section
      className={` py-4 pt-8 mt-[70px] relative ${
        isDarkMode ? "bg-primaryDark text-white" : "bg-primaryLight text-black"
      }flex items-center justify-center`}
    >
      <main className="max-w-screen-lg  mx-auto">
        <div className="px-12 flex md:flex-row flex-col-reverse md:gap-15 lg:gap-32 gap-10 md:h-90 h-auto overflow-hidden items-center w-full justify-center">
          <article className="text-center md:text-left">
            <h1
              className={`text-header  font-black mb-6 text-3xl md:text-[55px] leading-tight `}
            >
              Fullstack <span className="block">Developer</span>{" "}
            </h1>
            <p className={` text-xl text-para  `}>
              Hi, I&apos;m <span className="font-bold">Pratik Neupane</span> . A
              passionate Fullstack Developer 📍
            </p>
            <div className="icons flex my-6 gap-2 justify-center md:justify-normal">
              <Link
                href={"https://linkedin.com/in/lordhendrix40"}
                target="_blank"
                className={`${isDarkMode ? "text-white" : "text-black"}} hover:text-[#0077b5] transition-ease-in-out duration-300`}
              >
                <FaLinkedin className="text-3xl" />
              </Link>
              <Link
                href={"https://github.com/pratikneupane"}
                target="_blank"
                className={`${isDarkMode ? "text-white" : "text-black"}} hover:text-[#333333] transition-ease-in-out duration-300`}
              >
                <FaGithub className="text-3xl" />
              </Link>
            </div>
          </article>
          <div className={`image`}></div>
        </div>
        <div className="skills flex flex-col md:flex-row items-center mt-20 gap-12 px-12">
          <h1
            className={`text-header text-xl font-bold border-b-4 boder-r-0 md:border-b-0  md:border-r-4 border-solid ${
              isDarkMode ? "border-white" : "border-black"
            }  md:pr-8 pb-2 md:pb-0`}
          >
            Tech Stack
          </h1>
          <ul className=" flex flex-wrap items-center justify-center gap-6 ">
            {icons.map((icon: Icon) => (
              <IconContainer
                key={icon.name}
                isDarkMode={isDarkMode}
                icon={icon.icon}
                darkColor={icon.darkColor}
                lightColor={icon.lightColor}
              />
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Hero;

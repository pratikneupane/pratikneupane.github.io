import { FaGithub, FaLinkedin } from "react-icons/fa";
import IconContainer from "./IconContainer";
import Link from "next/link";
import type { HeroProps } from "@/types/";

const icons = [
  "typescript",
  "react",
  "next",
  "tailwind",
  "nodejs",
  "express",
  "mongodb",
  "mysql",
];
const Hero = (props: HeroProps) => {
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
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                }} hover:text-[#0077b5] transition-ease-in-out duration-300`}
              >
                <FaLinkedin className="text-3xl" />
              </Link>
              <Link
                href={"https://github.com/pratikneupane"}
                target="_blank"
                className={`${
                  isDarkMode ? "text-white" : "text-black"
                }} hover:text-[#333333] transition-ease-in-out duration-300`}
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
            {icons.map((icon: string) => (
              <IconContainer key={icon} isDarkMode={isDarkMode} icon={icon} />
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Hero;

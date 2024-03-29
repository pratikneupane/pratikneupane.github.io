import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import type { HeaderProps } from "@/types";

const Header = (props: HeaderProps) => {
  const { isDarkMode, handleDarkMode } = props;
  const [toggle, setToggle] = useState<boolean>(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className={`shadow-[0_0_10px_rgba(0,0,0,.09)] ${
        isDarkMode ? "bg-primaryDark text-white" : "bg-primaryLight text-black"
      } z-20  w-full sticky top-0 poppins `}
    >
      <div className="w-full px-[40px] ">
        <header className="flex items-center justify-between px-2 py-4 md:py-6  ">
          <h1 className="logo text-xl font-bold">Pratik</h1>
          <nav className="">
            <ul className="hidden  md:flex gap-6  font-semibold tracking-wider ">
              {/* <li>
                <a className="text-[17px]" href="Home">
                  Home
                </a>
              </li>
              <li>
                <a className="text-[17px]" href="About">
                  About
                </a>
              </li>
              <li>
                <a className="text-[17px]" href="Project">
                  Project
                </a>
              </li>
              <li>
                <a className="text-[17px]" href="Contact">
                  Contact
                </a>
              </li> */}
              <li>
                <button
                  className="text-[17px]"
                  onClick={handleDarkMode}
                  type="button"
                >
                  {isDarkMode ? (
                    <span className="text-[30px] outline-none focus:outline-none text-yellow-200">
                      <BsFillSunFill />
                    </span>
                  ) : (
                    <span className="text-[25px] outline-none focus:outline-none text-black">
                      <BsFillMoonFill />
                    </span>
                  )}
                </button>
              </li>
            </ul>
            <div className="block md:hidden">
              <HiMenuAlt1 className="text-4xl " onClick={handleClick} />
            </div>
          </nav>
        </header>
        <AnimatePresence mode="wait">
          {toggle ? (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0" }}
              exit={{ x: "-100%", transition: { duration: 0.3 } }}
              transition={{
                ease: "ease-in-out",
                duration: 1,
                x: { duration: 0.3 },
              }}
              className={`w-screen h-screen absolute  ${
                isDarkMode
                  ? "bg-primaryDark text-white"
                  : "bg-primaryLight text-black"
              } top-0 left-0`}
            >
              <span className="absolute top-2.5 right-1 p-2">
                <GrFormClose onClick={handleClick} className=" text-5xl " />
              </span>
              <ul className="grid place-content-center w-full h-full gap-8 font-semibold text-xl">
                {/* <li>
                  <a href="Home">Home</a>
                </li>
                <li>
                  <a href="About">About</a>
                </li>
                <li>
                  <a href="Project">Project</a>
                </li>
                <li>
                  <a href="Contact">Contact</a>
                </li> */}
                <li>
                <button
                  className="text-[17px]"
                  onClick={handleDarkMode}
                  type="button"
                >
                  {isDarkMode ? (
                    <span className="text-[30px] outline-none focus:outline-none text-yellow-200">
                      <BsFillSunFill />
                    </span>
                  ) : (
                    <span className="text-[25px] outline-none focus:outline-none text-black">
                      <BsFillMoonFill />
                    </span>
                  )}
                </button>
              </li>
              </ul>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default Header;

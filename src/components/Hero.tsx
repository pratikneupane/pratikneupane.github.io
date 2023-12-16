import React from "react";
import reactImage from "/public/images/react.png";
import typescriptImage from "/public/images/typescript.png";
import tailwindImage from "/public/images/tailwind.png";
import nextjsImage from "/public/images/nextjs.png";
import nodejsImage from "/public/images/nodejs.png";
import expressjsImage from "/public/images/expressjs.png";
import mongodbImage from "/public/images/mongodb.png";
import mysqlImage from "/public/images/mysql.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" py-4 pt-8 mt-[70px] relative bg-white flex items-center justify-center">
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
              <FaLinkedin className="text-3xl" />
              <FaGithub className="text-3xl" />
            </div>
          </article>
          <div className="image"></div>
        </div>
        <div className="skills flex flex-col md:flex-row items-center mt-20 gap-12 px-12">
          <h1 className=" text-header text-xl font-bold border-b-4 boder-r-0 md:border-b-0  md:border-r-4 border-solid border-slate-900   md:pr-8 pb-2 md:pb-0">
            Tech Stack
          </h1>
          <ul className=" flex flex-wrap items-center justify-center gap-6 ">
           
            <li className="w-10 md:w-12 lg:w-14 xl:w-16 p-2 md:p-4  bg-white rounded-full shadow-lg">
              <Image
                height={50}
                width={50}
                className="obeject-cover w-full"
                src={reactImage.src}
                alt="REACT"
              />
            </li>
            <li className="w-10 md:w-12 lg:w-14 xl:w-16 p-2 md:p-4  bg-white rounded-full shadow-lg">
              <Image
                height={50}
                width={50}
                className="obeject-cover w-full"
                src={tailwindImage.src}
                alt="TAILWIND"
              />
            </li>
            <li className="w-10 md:w-12 lg:w-14 xl:w-16 p-2 md:p-4  bg-white rounded-full shadow-lg">
              <Image
                height={50}
                width={50}
                className="obeject-cover w-full"
                src={typescriptImage.src}
                alt="TYPESCRIPT"
              />
            </li>
            <li className="w-10 md:w-12 lg:w-14 xl:w-16 p-2 md:p-4  bg-white rounded-full shadow-lg">
              <Image
                height={100}
                width={100}
                className="object-cover w-full"
                src={nextjsImage.src}
                alt="NEXTJS"
              />
            </li>
            <li className="w-10 md:w-12 lg:w-14 xl:w-16 p-2 md:p-4  bg-white rounded-full shadow-lg">
              <Image
                height={100}
                width={100}
                className="object-cover w-full"
                src={nodejsImage.src}
                alt="Nodejs"
              />
            </li>
            <li className="w-10 md:w-12 lg:w-14 xl:w-16 p-2 md:p-4  bg-white rounded-full shadow-lg">
              <Image
                height={100}
                width={100}
                className="object-cover w-full"
                src={expressjsImage.src}
                alt="ExpressJS"
              />
            </li>
            <li className="w-10 md:w-12 lg:w-14 xl:w-16 p-2 md:p-4  bg-white rounded-full shadow-lg">
              <Image
                height={100}
                width={100}
                className="object-cover w-full"
                src={mongodbImage.src}
                alt="MongoDB"
              />
            </li>
            <li className="w-10 md:w-12 lg:w-14 xl:w-16 p-2 md:p-4  bg-white rounded-full shadow-lg">
              <Image
                height={100}
                width={100}
                className="object-cover w-full"
                src={mysqlImage.src}
                alt="MySQL"
              />
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
};

export default Hero;

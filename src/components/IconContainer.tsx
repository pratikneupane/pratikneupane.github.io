import type { IconContainerProps } from "@/types";
import Image from "next/image";

const IconContainer = (props: IconContainerProps) => {
  const { isDarkMode, icon } = props;

  return (
    <li className="w-10 h-20 flex justify-center items-center md:w-12 lg:w-14 xl:w-16 text-3xl relative hover:animate-bounce transition-all duration-300 ease-in-out ">
      {
        <Image
          src={`https://skillicons.dev/icons?i=${icon}&theme=${
            !isDarkMode ? "dark" : "light"
          }`}
          alt={icon}
          height={200}
          width={200}
        />
      }
    </li>
  );
};

export default IconContainer;

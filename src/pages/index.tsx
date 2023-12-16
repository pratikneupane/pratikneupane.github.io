import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-primaryDark text-white" : "bg-primaryLight text-black"}`}>
      <Header isDarkMode={isDarkMode} handleDarkMode={handleDarkMode} />
      <Hero isDarkMode={isDarkMode} />
    </div>
  );
}

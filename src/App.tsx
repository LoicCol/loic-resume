/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import "./App.css";
import resume from "./assets/resume.json";
import { Experiences } from "./components/Experiences";
import { Skills } from "./components/Skills";
import { Basics } from "./components/Basics";
import { Education } from "./components/Education";
import { DarkThemeWrapper } from "./components/DarkThemeWrapper";
import { Menu } from "./components/Menu";

function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem("isDark");
    return saved !== null ? JSON.parse(saved) : false;
  });

  const toggleDark = () => {
    setIsDark((prev) => {
      localStorage.setItem("isDark", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <DarkThemeWrapper isDark={isDark}>
      <div className="z-10 flex w-full max-w-screen-xl">
        <LeftContent />
        <CenterContent />
        <Menu isDark={isDark} toggleDark={toggleDark} />
      </div>
    </DarkThemeWrapper>
  );
}

const LeftContent = () => {
  return (
    <div className="scrollbar w-1/5 overflow-auto border-gray-400 pr-6">
      <Basics basics={resume.basics} />
      <Skills skills={resume.skills} />
    </div>
  );
};

const CenterContent = () => {
  return (
    <div className="scrollbar w-3/5 overflow-auto border-l border-gray-400 px-6">
      <div id="basics">
        <Experiences experiences={resume.work} />
      </div>
      <div id="educations">
        <Education educations={resume.education} />
      </div>
    </div>
  );
};

export default App;

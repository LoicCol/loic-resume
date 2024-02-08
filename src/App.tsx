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
import { Interests } from "./components/Interests";

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
      <div className="z-10 flex w-full flex-col sm:max-w-screen-xl sm:flex-row sm:p-0">
        <div className="scrollbar w-full border-gray-400 sm:w-1/5 sm:overflow-auto sm:pr-6">
          <Basics
            basics={resume.basics}
            isDark={isDark}
            toggleDark={toggleDark}
          />
          <Skills skills={resume.skills} />
        </div>
        <div className="scrollbar mt-10 flex w-full flex-col border-gray-400 pb-10 sm:mt-0 sm:w-3/5 sm:overflow-auto sm:border-l sm:px-10">
          <div id="experiences" className="mb-10">
            <Experiences experiences={resume.work} />
          </div>
          <hr className="mb-20 w-1/2 self-center border-t border-gray-400" />
          <div id="educations" className="mb-10">
            <Education educations={resume.education} />
          </div>
          <hr className="mb-20 w-1/2 self-center border-t border-gray-400" />
          <div id="interests" className="mb-10">
            <Interests interests={resume.interests} />
          </div>
        </div>
        <Menu isDark={isDark} toggleDark={toggleDark} />
      </div>
    </DarkThemeWrapper>
  );
}

export default App;

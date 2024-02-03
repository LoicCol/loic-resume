/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import "./App.css";
import resume from "./assets/resume.json";
import { Experiences } from "./components/Experiences";
import { Skills } from "./components/Skills";
import { Basics } from "./components/Basics";
import { Education } from "./components/Education";
import { AnimatedIcon } from "./components/AnimatedIcon";
import { DarkThemeWrapper } from "./components/DarkThemeWrapper";

function App() {
  const [isDark, setDarkMode] = useState(true);

  const toggleDark = () => {
    setDarkMode((prevValue) => !prevValue);
  };

  return (
    <DarkThemeWrapper isDark={isDark}>
      <div className="z-10 flex w-full max-w-screen-xl">
        <div className="scrollbar w-1/5 overscroll-auto border-gray-400 pr-6">
          {/* Content for the left div */}
          <Basics basics={resume.basics} />
          <Skills skills={resume.skills} />
        </div>
        <div className="scrollbar w-3/5 overflow-auto border-l border-gray-400 px-6">
          <div id="basics">
            <Experiences experiences={resume.work} />
          </div>
          <div id="educations">
            <Education educations={resume.education} />
          </div>
        </div>
        <div className="flex w-1/5 flex-col justify-center border-gray-400 pl-6">
          <a
            href="#basics"
            className="mb-4 text-base italic text-gray-700 underline dark:text-gray-300"
          >
            Experiences
          </a>
          <a
            href="#educations"
            className="mb-4 text-base italic text-gray-700 underline dark:text-gray-300"
          >
            Education
          </a>
          <hr className="mb-4 w-1/5 border-t border-gray-400" />
          <AnimatedIcon isDark={isDark} toggleDark={toggleDark} />
        </div>
      </div>
    </DarkThemeWrapper>
  );
}

export default App;

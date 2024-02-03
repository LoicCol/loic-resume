import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import resume from "./assets/resume.json";
import { Experiences } from "./components/Experiences";
import { Skills } from "./components/Skills";
import { Basics } from "./components/Basics";
import { Education } from "./components/Education";

function App() {
  const [isDark, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!isDark);
  };

  // console.log("resume", resume);

  return (
    <div
      className={`${
        isDark && "dark"
      } flex h-screen justify-center border-black bg-nice-white p-10 font-mono transition-colors duration-200`}
    >
      <div className="z-10 flex w-full max-w-screen-lg">
        <div className="scrollbar w-1/5 overscroll-y-auto border-gray-400 pr-6">
          {/* Content for the left div */}
          <Basics basics={resume.basics} />
          <Skills skills={resume.skills} />
        </div>
        <div className="scrollbar w-4/5 overflow-auto border-l border-gray-400 px-6">
          <Experiences experiences={resume.work} />
          <Education educations={resume.education} />
        </div>
      </div>
      <button
        onClick={toggleDark}
        className="absolute right-5 top-5 z-10 rounded-full bg-gray-400 px-3 py-2 text-sm text-white hover:bg-indigo-600 dark:bg-nice-white dark:text-gray-700 dark:hover:bg-indigo-400"
      >
        {isDark ? "L" : "D"}
      </button>
      <motion.div
        animate={{
          clipPath: isDark
            ? `circle(130% at 90% 10%)`
            : "circle(0% at 90% 10%)",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="pointer-events-none fixed left-0 top-0 h-screen w-screen bg-white opacity-100 mix-blend-difference"
      ></motion.div>
    </div>
  );
}

export default App;

import { AnimatedIcon } from "./AnimatedIcon";

export const Menu = ({
  isDark,
  toggleDark,
}: {
  isDark: boolean;
  toggleDark: () => void;
}) => (
  <div className="hidden flex-col justify-center border-gray-400 pl-6 sm:flex sm:w-1/5">
    <a
      href="#basics"
      className="test:sm mb-4 text-base italic text-gray-700 underline dark:text-gray-300"
    >
      Experiences
    </a>
    <a
      href="#educations"
      className="test:sm mb-4 text-base italic text-gray-700 underline dark:text-gray-300"
    >
      Education
    </a>
    <a
      href="#interests"
      className="test:sm mb-4 text-base italic text-gray-700 underline dark:text-gray-300"
    >
      Interests
    </a>
    <hr className="mb-4 w-1/5 border-t border-gray-400" />
    <div className="hidden sm:block">
      <AnimatedIcon isDark={isDark} toggleDark={toggleDark} />
    </div>
  </div>
);

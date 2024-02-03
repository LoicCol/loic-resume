import { AnimatedIcon } from "./AnimatedIcon";

export const Menu = ({
  isDark,
  toggleDark,
}: {
  isDark: boolean;
  toggleDark: () => void;
}) => (
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
);

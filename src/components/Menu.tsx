import { AnimatedIcon } from "./AnimatedIcon";

import { Book, Briefcase, Heart } from "react-feather";

export const Menu = ({
  isDark,
  toggleDark,
}: {
  isDark: boolean;
  toggleDark: () => void;
}) => (
  <div className="hidden flex-col justify-center border-gray-400 pl-10 sm:flex sm:w-1/5">
    <a href="#experiences" className="mb-8 w-min">
      <Briefcase
        size={20}
        className="test-sm text-gray-900 duration-75 dark:text-gray-300"
      />
    </a>
    <a href="#educations" className="mb-8 w-min">
      <Book
        size={20}
        className="test-sm text-gray-900 duration-75 dark:text-gray-300"
      />
    </a>
    <a href="#interests" className="mb-8 w-min">
      <Heart
        size={20}
        className="test-sm text-gray-900 duration-75 dark:text-gray-300"
      />
    </a>
    <hr className="mb-6 w-5 border-t border-gray-400" />
    <div className="hidden sm:block">
      <AnimatedIcon isDark={isDark} toggleDark={toggleDark} />
    </div>
  </div>
);

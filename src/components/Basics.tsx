import { GitHub } from "react-feather";
import { BasicsType } from "../types";
import { AnimatedIcon } from "./AnimatedIcon";

type BasicsProps = {
  basics: BasicsType;
  isDark: boolean;
  toggleDark: () => void;
};

export const Basics = ({ basics, isDark, toggleDark }: BasicsProps) => (
  <div className="mb-10 flex flex-col sm:items-end">
    <Photo />
    <div className="mb-6 flex items-center justify-between">
      <h1 className="z-20  text-3xl font-bold text-blue-700 dark:text-blue-400">
        Loïc Colin
      </h1>
      <div className="sm:w-0 sm:overflow-hidden">
        <AnimatedIcon isDark={isDark} toggleDark={toggleDark} />
      </div>
    </div>
    <p className="text-sm dark:text-white">{basics.label}</p>
    <p className="text-sm dark:text-white">{basics.email}</p>
    <p className="text-sm dark:text-white">{basics.location.city}</p>
    <a
      href={basics.profiles[0].url}
      className="w-min pt-2 text-sm"
      target="_blank"
    >
      <GitHub
        size={20}
        className="text-blue-700 duration-75 dark:text-blue-400"
      />
    </a>
  </div>
);

const Photo = () => (
  <img
    src="https://avatars.githubusercontent.com/u/32926059?v=4"
    alt="profile"
    className="mb-20 w-1/2 self-center rounded-full sm:mb-10 sm:self-end"
    loading="lazy"
  />
);

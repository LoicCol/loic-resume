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
      <h1 className="z-20  text-3xl font-bold text-blue-500">Loïc Colin</h1>
      <div className="sm:w-0 sm:overflow-hidden">
        <AnimatedIcon isDark={isDark} toggleDark={toggleDark} />
      </div>
    </div>

    <p className="text-sm dark:text-white">{basics.label}</p>
    <p className="text-sm dark:text-white">{basics.email}</p>
    <p className="text-sm dark:text-white">{basics.location.city}</p>
  </div>
);

const Photo = () => (
  <img
    src="https://avatars.githubusercontent.com/u/15937574?v=4"
    alt="profile"
    className="mb-6 w-11/12 rounded-full"
  />
);

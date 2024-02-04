import { BasicsType } from "../types";

type BasicsProps = {
  basics: BasicsType;
};

export const Basics = ({ basics }: BasicsProps) => (
  <div className="mb-10 flex flex-col sm:items-end">
    <Photo />
    <h1 className="z-20 mb-6 text-3xl font-bold text-blue-500">Loïc Colin</h1>
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

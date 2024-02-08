import { ExperienceType } from "../types";
import { formattedPeriod } from "../utils/formattedPeriod";
import CollapsibleList from "./CollapsableList";

type ExperienceProps = {
  experience: ExperienceType;
  isFirst: boolean;
};
export const Experience = ({ experience, isFirst }: ExperienceProps) => {
  return (
    <div className="mb-10 border-gray-400 pb-6">
      <ExperienceHeader experience={experience} />
      <CollapsibleList
        isDefaultCollapsed={!isFirst}
        title={
          <p className="text-sm italic dark:text-white">{experience.summary}</p>
        }
      >
        <ul className="list-disc pt-6 sm:px-16">
          {experience.highlights.map((highlight, index) => (
            <Task key={index}>{highlight}</Task>
          ))}
        </ul>
      </CollapsibleList>
    </div>
  );
};

const ExperienceHeader = ({ experience }: { experience: ExperienceType }) => {
  const { startDate, endDate } = experience;

  return (
    <div className="items-center justify-between pb-6 sm:flex">
      <p className="text-xl text-blue-700 dark:text-blue-400 ">
        {experience.position},{" "}
        <a
          href={experience.url}
          target="_blank"
          className="text-xl font-semibold text-blue-700 underline dark:text-blue-400"
        >
          {experience.name}
        </a>
      </p>
      <p className="justify-self-end text-sm dark:text-white">
        {formattedPeriod({ startDate, endDate })}
      </p>
    </div>
  );
};

const Task = ({ children }: { children: React.ReactNode }) => (
  <li className="pt-4 text-sm dark:text-white">{children}</li>
);

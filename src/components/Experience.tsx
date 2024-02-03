import { ExperienceType } from "../types";
import { formattedPeriod } from "../utils/formattedPeriod";

type ExperienceProps = {
  experience: ExperienceType;
};
export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <div className="mb-3  border-gray-400 pb-10">
      <ExperienceHeader experience={experience} />
      <p className="mt-6 text-sm italic dark:text-white">
        {experience.summary}
      </p>

      <ul className="mt-8 list-inside list-disc px-8">
        {experience.highlights.map((highlight, index) => (
          <Task key={index}>{highlight}</Task>
        ))}
      </ul>
    </div>
  );
};

const ExperienceHeader = ({ experience }: { experience: ExperienceType }) => {
  const { startDate, endDate } = experience;

  return (
    <div className="flex items-center justify-between">
      <p className="text-xl text-blue-500 dark:text-white">
        {experience.position},{" "}
        <a
          href={experience.url}
          target="_blank"
          className="text-xl font-semibold text-blue-500"
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
  <li className="mt-4 text-sm dark:text-white">{children}</li>
);

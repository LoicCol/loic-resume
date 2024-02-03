import { ExperienceType } from "../types";
import { Experience } from "./Experience";

export const Experiences = ({
  experiences,
}: {
  experiences: ExperienceType[];
}) => (
  <>
    <h2 className="mb-8 text-2xl font-bold text-gray-700 dark:text-white">
      Experiences
    </h2>
    {experiences.map((experience, index) => (
      <Experience key={index} experience={experience} />
    ))}
  </>
);

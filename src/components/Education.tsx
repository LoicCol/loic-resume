import { EducationType } from "../types";
import { formattedPeriod } from "../utils/formattedPeriod";

type EductionsProps = {
  educations: EducationType[];
};

export const Education = ({ educations }: EductionsProps) => (
  <>
    <h2 className="mb-8 text-2xl font-bold text-gray-700 dark:text-white">
      Education
    </h2>
    {educations.map((education, index) => (
      <EducationRow key={index} education={education} />
    ))}
  </>
);

const EducationRow = ({ education }: { education: EducationType }) => (
  <div className="mb-12">
    <EducationHeader education={education} />
    <p className="mt-8 text-sm italic dark:text-white">{education.area}</p>
    <ul className="mt-8 list-inside list-disc sm:px-8">
      {education.courses.map((course, index) => (
        <Course key={index}>{course}</Course>
      ))}
    </ul>
  </div>
);

const EducationHeader = ({ education }: { education: EducationType }) => {
  const { startDate, endDate } = education;

  return (
    <div className="flex items-center justify-between">
      <p className="text-xl text-blue-500 ">
        {education.studyType},{" "}
        <a
          href={education.url}
          target="_blank"
          className="text-xl font-semibold text-blue-500"
        >
          {education.institution}
        </a>
      </p>
      <p className="justify-self-end text-sm dark:text-white">
        {formattedPeriod({ startDate, endDate })}
      </p>
    </div>
  );
};

const Course = ({ children }: { children: React.ReactNode }) => (
  <li className="mt-2 text-sm dark:text-white">{children}</li>
);

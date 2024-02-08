import { EducationType } from "../types";
import { formattedPeriod } from "../utils/formattedPeriod";
import CollapsibleList from "./CollapsableList";

type EductionsProps = {
  educations: EducationType[];
};

export const Education = ({ educations }: EductionsProps) => (
  <>
    <h2 className="pb-8 text-2xl font-bold text-gray-700 dark:text-white">
      Education
    </h2>
    {educations.map((education, index) => (
      <EducationRow key={index} isFirst={index === 0} education={education} />
    ))}
  </>
);

const EducationRow = ({
  education,
  isFirst,
}: {
  education: EducationType;
  isFirst: boolean;
}) => (
  <div className="pb-12">
    <EducationHeader education={education} />

    <CollapsibleList
      isDefaultCollapsed={!isFirst}
      title={<p className="text-sm italic dark:text-white">{education.area}</p>}
    >
      <ul className="list-disc pt-8 sm:pl-16">
        {education.courses.map((course, index) => (
          <Course key={index}>{course}</Course>
        ))}
      </ul>
    </CollapsibleList>
  </div>
);

const EducationHeader = ({ education }: { education: EducationType }) => {
  const { startDate, endDate } = education;

  return (
    <div className="items-center justify-between pb-6 sm:flex">
      <p className="text-xl text-blue-700 dark:text-blue-400 ">
        {education.studyType},{" "}
        <a
          href={education.url}
          target="_blank"
          className="text-xl font-semibold text-blue-700 underline dark:text-blue-400"
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
  <li className="pt-2 text-sm dark:text-white">{children}</li>
);

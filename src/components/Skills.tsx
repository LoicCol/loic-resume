import { SkillType } from "../types";

type SkillsProps = {
  skills: SkillType[];
};

export const Skills = ({ skills }: SkillsProps) => (
  <div className="text-end">
    {skills.map((skill, index) => (
      <Skill key={index} skill={skill} />
    ))}
  </div>
);

type SkillProps = {
  skill: SkillType;
};

const Skill = ({ skill }: SkillProps) => (
  <div className="mb-10">
    <h2 className="text-md mb-2 font-bold text-gray-700 dark:text-gray-400">
      {skill.name}
    </h2>
    <p className="text-sm dark:text-white">{skill.keywords.join(", ")}</p>
  </div>
);

type InterestsProps = {
  interests: {
    name: string;
  }[];
};

export const Interests = ({ interests }: InterestsProps) => (
  <div>
    <h2 className="mb-8 text-2xl font-bold text-gray-700 dark:text-white">
      Interests
    </h2>
    <ul className="mt-4 list-inside list-disc sm:px-8">
      {interests.map((interest, index) => (
        <li key={index} className="mt-2 text-sm dark:text-white">
          {interest.name}
        </li>
      ))}
    </ul>
  </div>
);

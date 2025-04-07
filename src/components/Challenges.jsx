import React from "react";
import Flag from "react-world-flags";

const Challenges = () => {
  return (
    <div>
      <Flag code="GB" className="w-[2rem]" />
      <p className="bg-white text-black dark:bg-gray-900 dark:text-white p-4">
        Hello, I'm styled based on theme!
      </p>
    </div>
  );
};

export default Challenges;

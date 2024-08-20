import React from "react";

const Heading = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h1
      className={`text-[2.6rem] leading-10 md:text-6xl font-bold py-2 text-[orange] heading ${className}`}
    >
      {text}
    </h1>
  );
};

export default Heading;

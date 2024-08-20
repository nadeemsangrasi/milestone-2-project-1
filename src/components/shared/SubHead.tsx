import React from "react";

const SubHead = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h1
      className={`text-2xl sm:text-3xl font-semibold py-2 text-[orange] subHead ${className}`}
    >
      {text}
    </h1>
  );
};

export default SubHead;

import React from "react";

const SubHeading = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <h1
      className={`text-3xl font-semibold py-2 text-[orange] subHeading ${className}`}
    >
      {text}
    </h1>
  );
};

export default SubHeading;

import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:container mx-auto sm:py-6 my-6 sm:px-10">{children}</div>
  );
};

export default Wrapper;

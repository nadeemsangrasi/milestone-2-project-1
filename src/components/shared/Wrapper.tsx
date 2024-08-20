import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="container mx-auto py-6 my-6 px-10">{children}</div>;
};

export default Wrapper;

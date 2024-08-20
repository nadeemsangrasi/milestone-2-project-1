import React from "react";

const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;

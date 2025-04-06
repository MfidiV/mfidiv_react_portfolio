import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg text-sm font-semibold transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

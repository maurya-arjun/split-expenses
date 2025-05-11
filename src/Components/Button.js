import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-orange-500 px-5 py-2 rounded text-white"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

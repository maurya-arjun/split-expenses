import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div>
      <button
        style={{
          padding: "10px 25px 10px 24px",
          background: "orange",
          border: "none",
          borderRadius: "5px",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

import React from "react";

const Button_1 = ({ disabled, type, nameButton }) => {
  return (
    <>
      <button
        disabled={disabled}
        className="text-gray-25 bg-tic-100 px-5 py-3 rounded-3xl font-bold mt-4 disabled:opacity-50 disabled:bg-gray-700"
        type={type}
      >
        {nameButton}
        
      </button>
    </>
  );
};

export default Button_1;


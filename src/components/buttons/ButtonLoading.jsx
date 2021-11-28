import React from "react";

const ButtonLoading = ({ disabled, type, nameButton }) => { //loading => usar este estado para mostrar icono de espera
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

export default ButtonLoading;


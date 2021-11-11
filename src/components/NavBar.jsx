import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({setModeResponsive, modeResponsive}) => {
  return (
    <div className="flex flex-row justify-between items-center shadow border-gray-100 bg-white absolute w-screen h-22 z-20">
      <div className="flex h-10 text-gray-50 pl-10 items-center ">
        <button onClick={()=> setModeResponsive(!modeResponsive)}>
          <i className="fad fa-angle-double-left hover:text-tic-100"></i>
        </button>
        <div className="pl-10 text-xs relative hidden sm:flex">
          <input
            type="text"
            placeholder="Búsqueda"
            className="bg-gray-100 h-10 w-26 rounded-3xl px-3 "
          ></input>
          <span className="text-sm absolute right-3 top-3">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
      <div className="flex h-10 items-center text-gray-50 hidden sm:flex">
          LOGO
          </div>

      <div className="flex h-10 items-center text-gray-300 text-lg ">
        <div className="flex bg-gray-200 w-10 h-6 mr-5 rounded-xl text-white items-center pl-1 hover:text-tic-100">
          <Link to="">
            <i className="fas fa-circle"></i>
          </Link>
        </div>
        <div className="mr-5 hover:text-tic-100">
          <i className="fas fa-user-cog"></i>
        </div>
        <div className="mr-5 hover:text-tic-100">
          <i className="far fa-bell"></i>
        </div>
        <div className="">
          <button className="bg-blue-200 rounded-full h-12 w-12 mr-10"></button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

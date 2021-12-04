import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-white shadow-lg border-gray-50 rounded-xl w-28 z-10 hidden sm:flex">
      <div className="divide-y divide-gray-100 overflow-scroll text-gray-75 text-5xl">
        <Items icon="uil uil-dashboard" items="Dasboard" />
        <Items icon="uil uil-0-plus" items="Usuarios" />
        <Items icon="uil uil-0-plus" items="Proyectos" />
        <Items icon="uil uil-0-plus" items="item" />
        <Items icon="uil uil-0-plus" items="item" />
        <Items icon="uil uil-0-plus" items="item" />
      </div>
    </div>
  );
};

const Items = ({ icon, items, route }) => {
  return (
    <div className="flex flex-col justify-center items-center h-32 w-26 p-2 hover:text-tic-100 ">
      <Link to="">
        <i className={icon}></i>
      </Link>
      <span className="text-xs">{items}</span>
    </div>
  );
};

export default SideBar;

import React from "react";

const SideBar = () => {
  return (
    <div className="bg-white shadow-lg border-gray-50 rounded-xl w-28 z-10 hidden sm:flex">
      <div className="divide-y divide-gray-100 overflow-scroll text-gray-75 text-4xl">
        <Items icon="fas fa-columns" items="item"/>
        <Items icon="fas fa-columns" items="item"/>
        <Items icon="fas fa-columns" items="item"/>
        <Items icon="fas fa-columns" items="item"/>
        <Items icon="fas fa-columns" items="item"/>
        <Items icon="fas fa-columns" items="item"/>
      </div>
    </div>
  );
};

const Items = ({icon, items}) => {
  return (
    <div className="flex flex-col justify-center items-center h-32 w-26 p-2 hover:text-tic-100 ">
      <a href="#">
        <i class={icon}></i>
      </a>
      <span className="text-xs">{items}</span>
    </div>
  );
};

export default SideBar;

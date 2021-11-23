import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const sx = "32";

  const chats = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sx}
      height={sx}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-pie-chart"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
  const projects = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sx}
      height={sx}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-briefcase"
    >
      <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
  const users = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={sx}
      height={sx}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-users"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx={9} cy={7} r={4} />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  return (
    <div className="bg-white shadow-lg border-gray-50 rounded-xl w-28 z-10 hidden sm:flex">
      <div className="divide-y divide-gray-100 overflow-scroll text-gray-75 text-5xl ">
        
        <Items icon={chats} items="Dashboard" />
        <Items icon={users} items="Usuarios" />
        <Items icon={projects} items="Proyectos" />
        {/* <Items icon={} items="item" />
        <Items icon={} items="item" />
        <Items icon={} items="item" /> */}
      </div>
    </div>
  );
};

const Items = ({ icon, items }) => {
  return (
    <div className="flex flex-col justify-center items-center h-32 w-26 p-2 hover:text-tic-100">
    
      <Link to="" className="">
        {icon}
      </Link>
      <span className="text-xs mt-2">{items}</span>
    </div>
  );
};

export default SideBar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubITems = {
  user:[["@", "itemuser1"], ["@", "item_user2"], ["@", "item_user3"]],
  project:[["@", "item_project1"], ["@", "item_project2"], ["@", "item_project3"]],
  dashboard:[["@", "item_dashboard1"], ["@", "item_dashboard2"], ["@", "item_dashboard3"]],
}

const SideBar = ({ setItemsSidebar, itemsSidebar }) => {
  const [item, setItem] = useState("");

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
    <div className="relative text-gray-75 flex">
      <div className="flex-1 bg-white shadow-lg border-gray-50 w-27 rounded-xl z-10 hidden sm:flex h-full">
        <div className="divide-y divide-gray-100 overflow-scroll text-5xl w-full">
          <Items
            icon={chats}
            items="Dashboard"
            setItemsSidebar={setItemsSidebar}
            _id="dashboard"
            setItem={setItem}
          />
          <Items
            icon={users}
            items="Usuarios"
            setItemsSidebar={setItemsSidebar}
            _id="user"
            setItem={setItem}
          />
          <Items
            icon={projects}
            items="Proyectos"
            setItemsSidebar={setItemsSidebar}
            _id="project"
            setItem={setItem}
          />
        </div>
      </div>
      {itemsSidebar ? (
        <SidebarRight SubITems_={SubITems} item={item} />
      ) : (
        <></>
      )}
    </div>
  );
};

const Items = ({ icon, items, setItemsSidebar, _id, setItem }) => {
  const ejct = () => {
    setItemsSidebar(true);
    setItem(_id);
  };

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="w-1 h-22 rounded-lg bg-tic-100"></div>
      <div className="flex flex-col justify-center items-center h-32 w-full p-2 hover:text-tic-100">
        <button onMouseEnter={() => ejct()}> <Link to="/admin/user/index">{icon}</Link></button>
        <span
          className="text-xs mt-2"
          onMouseEnter={() => setItemsSidebar(false)}
        >
          {items}
        </span>
      </div>
    </div>
  );
};


const SidebarRight = ({item}) => {
  console.log("SubITems", SubITems)
  return (
    <div className="flex-1 shadow-lg inline-block bg-white rounded-r-xl top-0 px-4 h-full pt-10 text-gray-75">
      <div className="flex flex-col px-2 py-2 w-52">
        {SubITems[item].map((u)=>{
          return(
            <div className="my-2 text-xs hover:text-tic-100">
            <a className="mr-2">{u[0]}</a>
            <a className="">{u[1]}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;

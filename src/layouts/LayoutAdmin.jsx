import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Content from "../components/Content";

const LayoutAdmin = () => {
  const [modeResponsive, setModeResponsive] = useState(false);
  const [itemsSidebar, setItemsSidebar] = useState(false);
  return (
    <div className="flex flex-col relative h-screen">
      <NavBar
        setModeResponsive={setModeResponsive}
        modeResponsive={modeResponsive}
      />
      <div className="flex flex-row bg-gray-50 mt-22 h-full">
        {!modeResponsive ? <SideBar setItemsSidebar={setItemsSidebar} itemsSidebar={itemsSidebar} /> : ""}
        <div className="bg-gray-50 w-screen" onMouseEnter={()=>{setItemsSidebar(false)}}>
          <Content>
            <Outlet />
          </Content>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;

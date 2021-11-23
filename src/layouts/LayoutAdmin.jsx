import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Content from "../components/Content";

const LayoutAdmin = () => {
  const [modeResponsive, setModeResponsive] = useState(false);
  return (
    <div className="flex flex-col relative">
      <NavBar
        setModeResponsive={setModeResponsive}
        modeResponsive={modeResponsive}
      />
      <div className="flex flex-row bg-gray-50 mt-22 h-screen">
        {!modeResponsive ? <SideBar /> : ""}
        <div className="bg-gray-50 w-screen">
          <Content>
            <Outlet />
          </Content>
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;

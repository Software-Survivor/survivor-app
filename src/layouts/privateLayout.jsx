import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import Content from "../components/Content";
import { useMutation } from "@apollo/client";
import { useAuth } from "../context/authContext";
import { VALIDATE_TOKEN } from "../graphql/auth/mutation";

const PrivateLayouth = () => {
  const [modeResponsive, setModeResponsive] = useState(false);
  const [itemsSidebar, setItemsSidebar] = useState(false);
  const [popupInfoProfile, setPopupInfoProfile] = useState(false);
  const {authToken, setToken, loadingAuth } = useAuth();
  const [validateToken, { data: mutationData, loading: mutationLoading, error: mutationError }] = useMutation(VALIDATE_TOKEN);

  useEffect(() => {
   validateToken();
  }, [])

  const MouseEnter = () =>{
    setItemsSidebar(false);
    setPopupInfoProfile(false);
  }
  return (
    <div className="flex flex-col relative h-screen">
      <NavBar
        setModeResponsive={setModeResponsive}
        modeResponsive={modeResponsive}
        popupInfoProfile={popupInfoProfile}
        setPopupInfoProfile={setPopupInfoProfile}
      />
      <div className="flex flex-row bg-gray-50 mt-22 h-full">
        {!modeResponsive ? <SideBar setItemsSidebar={setItemsSidebar} itemsSidebar={itemsSidebar} /> : <></>}
        <div className="bg-gray-50 w-screen" onMouseEnter={()=>{MouseEnter()}}>
          <Content>
            <Outlet />
          </Content>
        </div>
      </div>
    </div>
  );
};

export default PrivateLayouth;

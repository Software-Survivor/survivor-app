import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useUser } from "../context/user";
import { useDark } from "../context/dark";


const LayoutAdmin = () => {
    const { userData } = useUser();
    const { modeDark, setModeDark } = useDark();
    return (
        <div>
            <Header />
            <NavBar userData={userData} modeDark={modeDark} setModeDark={setModeDark} />
            <SideBar />
            <Outlet /> 
            <Footer />
        </div>
    )
}

export default LayoutAdmin

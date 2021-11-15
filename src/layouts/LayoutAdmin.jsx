import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'


const LayoutAdmin = () => {
    return (
        <div>
           
            <NavBar />
            <SideBar />
            <Outlet /> 
            
        </div>
    )
}

export default LayoutAdmin

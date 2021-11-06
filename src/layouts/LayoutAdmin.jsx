import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


const LayoutAdmin = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <SideBar />
            <Outlet /> 
            <Footer />
        </div>
    )
}

export default LayoutAdmin

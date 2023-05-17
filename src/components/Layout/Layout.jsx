import React from 'react'
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";
import Footer from './Footer';


export const Index = (props) => {
    return (

        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Index;

import React from 'react'
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";

export const Index = (props) => {
    return (

        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Index;

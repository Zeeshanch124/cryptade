import React from "react";
import Landing from "./Landing";
import Layout from "../components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import tw from 'twin.macro';
import styled from "styled-components";
import LoginPage from "./Login";


const Body = styled.div`${tw`bg-backColor min-h-screen text-white lg:px-24 xl:px-36 2xl:px-36`}`;

// const Body = tw.div`bg-primary text-white xl:px-12 2xl:px-32`;

const AppRoutes = () => {
    return (
        <>
            <Body>
                <Routes>
                    {/* <Route index path="/login" element={<LoginPage />} /> */}
                    <Route path="/" element={<Layout />}>
                        <Route index path="/" element={<Landing />} />
                        <Route index path="/login" element={<LoginPage />} />

                    </Route>
                </Routes>
            </Body>
        </>

    )
}

export default AppRoutes;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';

import NavBar from '../Pages/NavBar/NavBar';
import NewNav from '../Pages/NavBar/NewNav';
import TopHeader from '../Pages/TopHeader/TopHeader';

const Main = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
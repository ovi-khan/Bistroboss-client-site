import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sheared/Footer/Footer';
import NavBar from '../Pages/Sheared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
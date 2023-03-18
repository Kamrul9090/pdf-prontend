import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
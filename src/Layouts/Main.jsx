import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/Navbar/Navigationbar';
import Foot from '../Pages/Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;
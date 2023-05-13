import React from 'react';
import NavigationBar from '../Pages/Shared/Navbar/Navigationbar';
import { Outlet } from 'react-router-dom';
import Foot from '../Pages/Shared/Footer/Footer';

const Details = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div>
                <Outlet></Outlet>
            </div>
            <Foot></Foot>
        </div>
    );
};

export default Details;
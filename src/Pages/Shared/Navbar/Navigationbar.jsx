
import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link to='/about' className='font-semibold'>About</Link></li>
        <li><Link to='/services' className='font-semibold'>Services</Link></li>
        <li><Link to='/blog' className='font-semibold'>Blog</Link></li>
        <li><Link to='/contact' className='font-semibold'>Contact</Link></li>
        {
            user?.email ?
                <li><Link to="/bookings" className='font-semibold'>My Bookings</Link></li> : ''
        }
    </>
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link>
                    <img src={logo} alt="" className='h-[40px] lg:h-[80px]' />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end flex justify-end items-center">
                <ul tabIndex={0} className="menu menu-compact p-2 rounded-box">
                    {
                        user?.email ?
                            <li><Link className='font-semibold py-3.5' onClick={handleLogout}>Log Out</Link></li>
                            :
                            <li><Link to='/login' className='font-semibold py-3.5'>Login</Link></li>
                    }
                </ul>
                <button className="btn btn-outline btn-primary">Appointment</button>
            </div>
        </div>
    );
};

export default NavigationBar;
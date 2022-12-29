import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../../Components/MenuItem';
import { TbBuildingCommunity } from "react-icons/tb";

const Header = () => {

    return (
        <div className="navbar mx-auto bg-base-100 lg:w-5/6">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label htmlFor="offCanvas" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <MenuItem></MenuItem>
                    </ul> */}
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">SWEET HOME</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <MenuItem></MenuItem>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/AddListing' className="btn bg-red-500 border-0 text-white font-bold"><TbBuildingCommunity className='mr-2 text-xl'></TbBuildingCommunity>Add Listing</Link>

            </div>
        </div>
    );
};

export default Header;
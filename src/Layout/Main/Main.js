import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import { HiHomeModern, HiPencilSquare } from "react-icons/hi2";
import { RiLoginCircleLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import './Main'
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <div className="drawer drawer-end">
                <input id="offCanvas" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="offCanvas" className="drawer-overlay"></label>
                    <ul className="menu px-4 pt-4 w-80 bg-orange-500 text-white font-bold">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/'><HiHomeModern className='text-white'></HiHomeModern>Home</Link></li>
                        <li><Link to='/'><HiPencilSquare className='text-white'></HiPencilSquare>Blog</Link></li>
                        <li><Link to='/'><RiLoginCircleLine className='text-white'></RiLoginCircleLine>Login</Link></li>
                        <div className='absolute left-0 px-4 pt-4 py-20 bottom-0 bg-red-600 w-full'>
                            <div className='flex justify-around'>
                                <FaFacebookSquare className='text-3xl'></FaFacebookSquare>
                                <FaLinkedin className='text-3xl'></FaLinkedin>
                                <FaInstagramSquare className='text-3xl'></FaInstagramSquare>
                                <FaYoutubeSquare className='text-3xl'></FaYoutubeSquare>
                            </div>
                            <div className='flex justify-center mt-4 border-dotted bg-red-900 p-2'>
                                <MdSupportAgent className='text-xl' />
                                <h2 className=''>+49 178 8026998</h2>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>



            <Footer></Footer>
        </div>
    );
};

export default Main;
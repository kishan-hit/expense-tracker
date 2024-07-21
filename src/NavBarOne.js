import React from "react";
import { useNavigate } from "react-router-dom";
import LogoHome from '../src/assets/images/logo-home.png';

const NavBarOne = () => {
    const navigate = useNavigate();
    return (
        <div className='flex fixed top-0 left-0 right-0 z-10 w-full justify-between px-10 mt-4 items-center space-x-12 h-[75px]'>
            <div className='h-full flex items-center w-fit'>
                <img src={LogoHome} alt='logo' className='h-full object-cover' />
            </div>
            <div className="flex items-center justify-center bg-white">
                <a href="/assets" className="text-gray-700 hover:text-gray-900 bg-[#E6E6E6] px-3 py-2 rounded">
                    Home
                </a>
                <a href="/dashboard" className="text-gray-700 hover:bg-[#E6E6E6] px-3 py-2 rounded">
                    Our Services
                </a>
                <a href="/transactions" className="text-gray-700 hover:bg-[#E6E6E6] px-3 py-2 rounded">
                    Pricing
                </a>
                <a href="/help" className="text-gray-700 hover:bg-[#E6E6E6] px-3 py-2 rounded">
                    About Us
                </a>
                <a href="/account" className="text-gray-700 hover:bg-[#E6E6E6] px-3 py-2 rounded">
                    Blog
                </a>
                <a href="/account" className="text-gray-700 hover:bg-[#E6E6E6] px-3 py-2 rounded">
                    Contact Us
                </a>
            </div>
            <div className="flex space-x-4">
                <button
                onClick={() => navigate('/login')}
                    className="text-[#30628C] border-[#72777F] border-1 hover:bg-gray-200 py-2 rounded-full flex items-center justify-center w-[100px] h-fit"
                >
                    Login
                </button>
                <button
                    onClick={() => navigate('/google-signup')}
                    className="text-[#30628C] border-[#72777F] border-1 hover:bg-gray-200 py-2 rounded-full flex items-center justify-center w-[100px] h-fit"
                >
                    Sign up
                </button>
            </div>
        </div>
    )
}

export default NavBarOne;
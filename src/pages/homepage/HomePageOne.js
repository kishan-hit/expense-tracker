import React from "react";
import NavBarOne from "../../NavBarOne";
import DashboardImg from '../../assets/images/Dashboard.jpg';

const HomePageOne = () => {
    return (
        <div>
            <NavBarOne />
            <div className="h-screen px-52 flex flex-column items-center relative">
                <div className="mt-[200px] flex flex-column items-center">
                    <div className="text-[45px] font-700 leading-[52px] text-[#30628C] text-center">
                        Unified Wealth Management at Your Fingertips
                    </div>
                    <div className="text-[24px] font-500 leading-[30px] text-center px-16 mt-[20px]">
                        Simplify your financial life with Net Worth Tracker - your all-in-one solution for managing investments, assets, and accounts.
                    </div>
                    <button className="bg-[#9CCBFB] px-4 py-2 rounded-full mt-[34px]">
                        Get started
                    </button>
                </div>
                <div className="mt-14 absolute bottom-0">
                    <img src={DashboardImg} alt='dashboard' />
                </div>
            </div>
        </div>
    )
}

export default HomePageOne;
import React from "react";
import Logo from './assets/images/Headline.png';
import CreditCard from './assets/images/credit_card.png';
import Savings from './assets/images/savings.png';
import Home from './assets/images/home.png';
import Diamond from './assets/images/diamond.png';
import Technology from './assets/images/technology.png';
import Pallete from './assets/images/palette.png';

const LeftSideBar = () => {
    return (
        <div className="w-[25%] bg-[#F2F3F9] m-[10px] rounded-[12px] p-3">
            <img src={Logo} alt='logo' className="" />
            <div className="w-full mt-2 w-[288px] h-[60px] bg-[#E6E8EE] rounded-[12px] text-[#30628C] flex items-center px-3">
                Dashboard
            </div>
            <div className="flex flex-col px-3 mt-3">
                <div className="flex space-x-3 items-center px-2 py-3">
                    Assets
                </div>
                <div className="flex space-x-3 items-center px-2 py-3">
                    <div className="w-[28px]">
                        <img src={CreditCard} />
                    </div>
                    <div>
                        Banks and Credit Cards
                    </div>
                </div>
                <div className="flex space-x-3 items-center px-2 py-3">
                    <div className="w-[28px]">
                        <img src={Savings} />
                    </div>
                    <div>
                        Investments and Loans
                    </div>
                </div>
                <div className="flex space-x-3 items-center px-2 py-3">
                    <div className="w-[28px]">
                        <img src={Home} />
                    </div>
                    <div>
                        Property and Vehicles
                    </div>
                </div>
                <div className="flex space-x-3 items-center px-2 py-3">
                    <div className="w-[28px]">
                        <img src={Diamond} />
                    </div>
                    <div>
                        Precious Metals, Jewels
                    </div>
                </div>
                <div className="flex space-x-3 items-center px-2 py-3">
                    <div className="w-[28px]">
                        <img src={Technology} />
                    </div>
                    <div>
                        Technology and Hardware
                    </div>
                </div>
                <div className="flex space-x-3 items-center px-2 py-3">
                    <div className="w-[28px]">
                        <img src={Pallete} />
                    </div>
                    <div>
                        Art and Collectibles
                    </div>
                </div>
                <div className="flex space-x-3 items-center px-2 py-3 border-t-2 border-[#E6E8EE]">
                    Transactions
                </div>
                <div className="flex space-x-3 items-center px-2 py-3 border-t-2 border-[#E6E8EE]">
                    Help
                </div>
                <div className="flex space-x-3 items-center px-2 py-3 border-t-2 border-[#E6E8EE]">
                    Account
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar;
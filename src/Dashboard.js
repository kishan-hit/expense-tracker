import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import DashBoardLogo from "./DashBoardLogo";
import ShowModal from "./components/ShowModal";

const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="h-screen flex">
            <LeftSideBar />
            <div className="w-[75%] m-[10px]">
                <div className="">
                    <DashBoardLogo />
                    <div className="text-[#181C20] font-400 text-[16px] tracking-[0.5px] py-2">
                        To track your net worth, begin by connecting a bank or credit card where most of your spending happens.
                    </div>
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#9CCBFB] px-[20px] py-2 rounded-[100px]"
                    >
                        Add a Bank
                    </button>
                    <div className="font-500 text-[12px] text-[#BA1A1A] leading-[16px] tracking-[0.5px] mt-3 py-1">
                        THIS IS A SAMPLE DASHBOARD
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex border py-[2px]">
                            <div className="w-[6px] h-full bg-[#0079C1] mr-4 rounded-[2px]"></div>
                            <div className="py-2">
                                <div className="text-[#42474E] text-[16px] font-500 leading-[24px] tracking-[0.1px]">
                                    My Balance
                                </div>
                                <div className="text-[#15223C] font-sans font-600 text-[20px] leading-[24.38px]">
                                    $128,320
                                </div>
                            </div>
                        </div>
                        <div className="flex border py-[2px]">
                            <div className="w-[6px] h-full bg-[#2DD683] mr-4 rounded-[2px]"></div>
                            <div className="py-2">
                                <div className="text-[#42474E] text-[16px] font-500 leading-[24px] tracking-[0.1px]">
                                    Income
                                </div>
                                <div className="text-[#15223C] font-sans font-600 text-[20px] leading-[24.38px]">
                                    $128,320
                                </div>
                            </div>
                        </div>
                        <div className="flex border py-[2px]">
                            <div className="w-[6px] h-full bg-[#FED142] mr-4 rounded-[2px]"></div>
                            <div className="py-2">
                                <div className="text-[#42474E] text-[16px] font-500 leading-[24px] tracking-[0.1px]">
                                    Savings
                                </div>
                                <div className="text-[#15223C] font-sans font-600 text-[20px] leading-[24.38px]">
                                    $128,320
                                </div>
                            </div>
                        </div>
                        <div className="flex border py-[2px]">
                            <div className="w-[6px] h-full bg-[#FA8B3A] mr-4 rounded-[2px]"></div>
                            <div className="py-2">
                                <div className="text-[#42474E] text-[16px] font-500 leading-[24px] tracking-[0.1px]">
                                    Expense
                                </div>
                                <div className="text-[#15223C] font-sans font-600 text-[20px] leading-[24.38px]">
                                    $128,320
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                {
                    showModal && <ShowModal showModal={showModal} setShowModal={setShowModal} />
                }
            </div>
        </div>
    )
}

export default Dashboard;
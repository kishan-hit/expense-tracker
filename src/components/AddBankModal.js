import React from "react";
import HDFC from '../assets/images/hdfc-logo.png';
import ICICI from '../assets/images/icici-logo.png';
import SBI from '../assets/images/sbi-logo.png';
import Kotak from '../assets/images/kotak-bank-logo.png';
import Axis from '../assets/images/axis-bank.png';
import PNB from '../assets/images/pnb-logo.png';
import BOB from '../assets/images/bob-logo.png';
import IndOverseas from '../assets/images/indian-overseas-bank-logo.png';
import Indusland from '../assets/images/indusland-logo.png';
import Union from '../assets/images/union-bank-logo.png';
import HotSearch from "../pages/HotSearch";

const AddBankModal = (props) => {
    const banks = [
        {
            "image": HDFC,
            "name": "HDFC bank"
        },
        {
            "image": ICICI,
            "name": "ICICI bank"
        },
        {
            "image": SBI,
            "name": "State Bank of India"
        },
        {
            "image": Kotak,
            "name": "Kotak Mahindra"
        },
        {
            "image": Axis,
            "name": "Axis bank"
        },
        {
            "image": PNB,
            "name": "Punjab National Bank"
        },
        {
            "image": BOB,
            "name": "Bank of Baroda"
        },
        {
            "image": IndOverseas,
            "name": "Indian Overseas Bank"
        },
        {
            "image": Indusland,
            "name": "Indusland bank"
        },
        {
            "image": Union,
            "name": "Union bank"
        }
    ]

    const styles = {
        backgroundColor: '#E6E8EE',
        borderRadius: '28px',
        height: '56px',
        width: '360px',
        fontSize: '16px'
    };

    const handleUploadFile = (bank) => {
        props.setBankDetail({
            image: bank.image,
            name: bank.name
        });
        props.setUploadFileModal(true);
    };

    return (
        <div className="mt-4">
            <div className="text-[#181C20] text-[18px] font-500 leading-[24px] tracking-[0.1px]">
                Add a bank
            </div>
            <div className="text-[#42474E] font-400 text-[16px] leading-[24px] tracking-[0.25px]">
                Select your bank from the choices below or find it via search.
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-5 gap-6 mt-4">
                    {
                        banks.map((bank, index) => (
                            <div key={index} className="h-[96px] cursor-pointer"
                                onClick={() => handleUploadFile(bank)}>
                                <img src={bank.image} alt={bank.name} className="h-full border-[#C2C7CF] rounded-lg" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex items-center justify-center mt-4">
                <HotSearch placeholder="Search for other instutions" styles={styles} />
            </div>
        </div>
    )
}

export default AddBankModal;
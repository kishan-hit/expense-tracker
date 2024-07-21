import React, { useRef } from "react";
import Icon from '../assets/images/Icon.png';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { uploadFile } from "../api/discover.js";
import { parse, format } from 'date-fns';

const UploadFileModal = ({ bankDetail, closeModal }) => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const handleChange = async (e) => {
        e.preventDefault();
        let selectedFile = e.target.files[0];
        const validTypes = [
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'text/csv'
        ];
        if (selectedFile && validTypes.includes(selectedFile.type)) {
            handleUpload(selectedFile);
        } else {
            toast.error('Invalid file format');
            e.target.value = null;
        }
    }

    const formatDate = (dateString) => {
        const possibleFormats = [
            "dd/MM/yy",
            "yyyy-MM-dd",
            "MM/dd/yyyy",
            "dd-MM-yyyy",
            "MMM dd, yyyy",
        ];

        for (let formatString of possibleFormats) {
            const parsedDate = parse(dateString, formatString, new Date());
            if (!isNaN(parsedDate)) {
                return format(parsedDate, 'MMM dd, yyyy');
            }
        }

        console.error("Invalid date format:", dateString);
        return dateString;
    }

    const handleUpload = async (selectedFile) => {
        if (selectedFile) {
            toast("Uploading the file...");
            let formData = new FormData();
            formData.append('file', selectedFile);
            let result = await uploadFile(formData);
            console.log('result', result);
            result.forEach(transaction => {
                transaction.transactionDate = formatDate(transaction.transactionDate);
            });
            closeModal(false);
            navigate('/data', { state: { result: result } });
        } else {
            toast.error('Please choose a valid file before uploading');
        }
    }

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    return (
        <div>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="flex p-3 mt-3">
                <div className="h-[64px]">
                    <img src={bankDetail.image} alt={bankDetail.name} className="h-full" />
                </div>
                <div className="px-3 py-1">
                    <div className="text-[#181C20] font-500 text-[18px] leading-6 tracking-[0.1px]">
                        {bankDetail.name}
                    </div>
                    <div className="text-[#42474E] font-400 text-[16px] leading-6 tracking-[0.25px]">
                        Add your bank account manually
                    </div>
                </div>
            </div>
            <div className="px-6">
                <div className="bg-[#E6E8EE] rounded-[28px] flex flex-col items-center justify-center space-y-3 p-4">
                    <img src={Icon} alt='upload-icon' />
                    <div className="text-[#181C20] text-[24px] w-[512px] font-400 text-center">
                        Upload Statement
                    </div>
                    <div className="text-[#42474E] font-400 text-[16px] leading-6 tracking-[0.25px]">
                        Securely add your account by attaching a CSV statement from your bank. You will first need to download and save the file on your device.
                    </div>
                    <div>
                        <button
                            className="border border-black rounded-full h-[40px] w-fit px-3 mr-2">
                            Step-by-step-guide
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <button
                            className="border bg-[#30628C] text-[#FFFFFF] rounded-full h-[40px] w-[142px] px-3"
                            onClick={handleButtonClick}
                        >
                            Select CSV file
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadFileModal;

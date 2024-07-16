import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { useLocation } from "react-router-dom";
import { uploadFile } from "../../api/discover";

const HomePage = () => {
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    // useEffect(() => {
    //     const token = localStorage.getItem('accessToken');
    //     if (!token || token !== location.state.token) {
    //         navigate('/login');
    //     }
    // }, [navigate]);

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

    const handleUpload = async (selectedFile) => {
        if (selectedFile) {
            toast("Uploading the file...");
            let formData = new FormData();
            formData.append('file', selectedFile);
            let result = await uploadFile(formData);
            console.log('result', result);
            navigate('/data', { state: { result: result }} );
        } else {
            toast.error('Please choose a valid file before uploading');
        }
    }

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }

    return (
        <div className="lg:max-w-full sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center justify-center h-screen border border-red-300">
            <div className="text-gray-700 font-bold text-4xl">Upload CSV/Excel file</div>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className="mt-5 flex flex-col items-center justify-center">
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleChange}
                    className="hidden"
                />
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleButtonClick}
                >
                    UPLOAD
                </button>
            </div>
        </div>
    )
}

export default HomePage;

import React, { useState, useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SignUpImg from '../src/assets/images/signUpImg.png';
import Logo from '../src/assets/images/Logo.png';

const GoogleSignUp = () => {
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log('codeResponse', codeResponse);
            setUser(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        if (user) {
            console.log('User state set:', user);
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })
                .then((res) => {
                    console.log('res', res);
                    const userData = res.data;
                    navigate('/dashboard', { state: { user: userData } });
                })
                .catch((err) => console.log(err));
        }
    }, [user, navigate]);

    return (
        <div className='flex'>
            <div className="flex flex-col items-center justify-center min-h-screen w-full p-4 md:w-[50%]">
                <img src={Logo} alt='logo' className='mb-8' />
                <div className="text-[#42474E] text-center text-[24px] font-500 leading-[30px] h-[30px] mb-2 w-[481.3px]">
                    Sign Up: Take control of your finances
                </div>
                <p className="text-sm text-[#42474E] font-400 text-[14px] leading-[20px] mb-6">Try for free, cancel anytime</p>

                <button
                    onClick={() => login()}
                    className="w-[260px] max-w-sm flex items-center justify-center py-[8px] mb-4 border border-[#72777F] text-gray-700 rounded-full hover:bg-gray-200"
                >
                    <i className="bi bi-google mr-2"></i>
                    Continue with Google
                </button>

                <button className="w-[260px] max-w-sm flex items-center justify-center py-[8px] mb-4 border border-[#72777F] text-gray-700 rounded-full hover:bg-gray-200">
                    <i className="bi bi-apple mr-2"></i>
                    Continue with Apple
                </button>

                <div className="flex items-center w-full max-w-sm my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-4 text-[#000000] text-[14px] leading-[20px] font-400 ">Or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <div className='relative'>
                    <div className='absolute -mt-[12px] px-[5px] ml-[10px] bg-white'>Your Email Address</div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[260px] max-w-sm py-2 px-4 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button className="w-[260px] max-w-sm py-2 px-4 bg-[#9CCBFB] rounded-full"
                    onClick={() => navigate('/signup', { state: { email } })}
                >
                    Sign up using email
                </button>
            </div>
            <div className='w-[50%] h-screen hidden md:block'>
                <img src={SignUpImg} alt='SignUpImg' className='h-full w-full' />
            </div>
        </div>
    );
};

export default GoogleSignUp;

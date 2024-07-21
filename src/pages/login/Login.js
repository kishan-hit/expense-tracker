import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import {Toaster, toast} from 'react-hot-toast';
import { loginUser } from '../../api/discover.js';

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });
    const [visible, setVisible] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        setUserData({
            email: "",
            password: ""
        });

        const loginData = await loginUser(userData);
        const accessToken = loginData.accessToken;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('email', userData.email);
        navigate('/dashboard', { state: { token: accessToken } });
    }

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center text-gray-600">
            {/* <Toaster position='top-center' reverseOrder={false}></Toaster> */}
            <div className='flex min-h-full flex-1 flex-col justify-center'>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
                        Login to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleLogin}>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="off"
                                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                    value={userData.email}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-3 outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6">
                                    Password
                                </label>
                            </div>
                            <div className="relative mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type={ visible ? "text" : "password"}
                                    required
                                    autoComplete="off"
                                    onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                                    value={userData.password}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 px-3 outline-none"
                                />
                                <div className='absolute inset-y-0 right-0 p-2 cursor-pointer text-gray-600'
                                    onClick={() => setVisible(!visible)}
                                >
                                    {
                                        visible ? <i class="bi bi-eye"></i> : <i class="bi bi-eye-slash"></i>
                                    }
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Log in
                            </button>
                        </div>
                        <div className="mt-10 text-center text-gray-300 text-sm">
                            New user?{' '}
                            <div className="font-semibold leading-6 hover:text-indigo-500 cursor-pointer" onClick={() => navigate('/signup')}>
                                Register
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateComponent = () => {
    return (
        <>
            let auth = false;
            const token = localStorage.getItem('accessToken');
            const email = localStorage.getItem('email');
        </>
    )
}

export default PrivateComponent;
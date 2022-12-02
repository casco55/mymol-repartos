import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Login } from '../views/Login';

export const PublicRoute = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }
    return <Login />;
};

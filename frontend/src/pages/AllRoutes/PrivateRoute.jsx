import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    let loginValue = localStorage.getItem("login") || false;
    const location = useLocation();


    if (!loginValue) {
        return <Navigate state={location.pathname} to="/signup" replace />;
    }

    return children;
};

export default PrivateRoute;
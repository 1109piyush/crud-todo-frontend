import React, { useEffect } from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const isLoggedIn = localStorage.getItem('token');

  useEffect(() => {
    if (!isLoggedIn) {
        return <Navigate to="/"/>
    }
  }, [isLoggedIn]);
  
  return (
    <div>
      {props.children}
    </div>
  );
};

export default ProtectedRoute;



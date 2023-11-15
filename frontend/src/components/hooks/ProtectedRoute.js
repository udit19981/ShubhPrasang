import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, allowedRoles }) => {
  const isAuthenticated = !!localStorage.getItem('userRole');
  console.log(element)
  console.log(isAuthenticated)
  const userRole = localStorage.getItem('userRole');
  console.log(userRole)

  if (!isAuthenticated) {
    // Redirect to the login page if the user is not authenticated
    console.log("User is authenticated")
    return <Navigate to="/login" />;
  }
  else if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Redirect to the login page if the user does not have the required role
    console.log("user role is not matched")
    return <Navigate to="/login" />;
  }

  // Render the component if the user is authenticated and has the required role
  return (
    <Routes>
       <Route element={element} />
    </Routes>
  )
};

export default ProtectedRoute;

import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
// import { AuthContext } from "../provider/AuthProvider";
// import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-3xl text-center text-green-600">Loading......</div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to={`/signin` || `/`} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;

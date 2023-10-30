import React from "react";

import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token")) || null;

  if (token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRouter;

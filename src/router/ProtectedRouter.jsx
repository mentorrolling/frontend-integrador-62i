import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const login = true;

  if (login) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRouter;

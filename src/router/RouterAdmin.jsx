import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { obtenerDatosAuth } from "../helpers/authApi";

const RouterAdmin = ({ children }) => {
  const [role, setRole] = useState("");
  const token = JSON.parse(localStorage.getItem("token")) || null;

  obtenerDatosAuth(token).then((respuesta) => {
    setRole(respuesta.role);
    console.log(role);
  });

  if (role && role == "ADMIN_ROLE") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default RouterAdmin;

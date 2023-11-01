import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
//importar función para obtener el dato del rol
import { obtenerDatosAuth } from "../api/authApi";
import ProductosAdmin from "../components/ProductosAdmin";

const AdminScreen = () => {
  const [role, setRole] = useState(null);
  const token = JSON.parse(localStorage.getItem("token")) || null;

  useEffect(() => {
    queRolEs();
  }, []);

  const queRolEs = async () => {
    //obtengo el rol
    const respuesta = await obtenerDatosAuth(token);
    // const {role}=respuesta
    //respuesta={
    //   id,
    //   role
    // }
    console.log(respuesta);
    //lo guardo en el estado
    setRole(respuesta.role);
  };

  return (
    <>
      {role ? (
        role === "ADMIN_ROLE" ? (
          <div className="container">
            <div className="row pt-5">
              <div className="col">
                <h1>Administrador</h1>
              </div>
            </div>
            <ProductosAdmin />
          </div>
        ) : (
          <Navigate to="/" />
        )
      ) : (
        <div className="container">
          <div className="row pt-5">
            <div className="col">
              <h3>Esperando respuesta...</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminScreen;

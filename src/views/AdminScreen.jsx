import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
//importar función para obtener el dato del rol
import ProductosAdmin from "../components/ProductosAdmin";

const AdminScreen = () => {
  const [role, setRole] = useState(null);
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    queRolEs();
  }, []);

  const queRolEs = async () => {
    //obtengo el rol
    //lo guardo en el estado
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

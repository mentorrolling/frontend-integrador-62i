import React, { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
//importar función para obtener el dato del rol
import { obtenerDatosAuth } from "../api/authApi";
import ProductosAdmin from "../components/ProductosAdmin";

const AdminScreen = () => {
  const [role, setRole] = useState(null);
  const [mensaje, setMensaje] = useState(null);
  const token = JSON.parse(localStorage.getItem("token")) || null;

  useEffect(() => {
    queRolEs();
  }, []);

  const queRolEs = async () => {
    const respuesta = await obtenerDatosAuth(token);

    if (respuesta?.msg) {
      setMensaje(respuesta.msg);
    } else {
      setRole(respuesta.role);
    }
    // console.log(respuesta);
  };

  return (
    <>
      {mensaje ? (
        <div className="container">
          <div className="row pt-5">
            <div className="col">
              <h3>{mensaje}</h3>
              <Link className="nav-link" to="/login">
                Iniciar Sesión
              </Link>
            </div>
          </div>
        </div>
      ) : role ? (
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

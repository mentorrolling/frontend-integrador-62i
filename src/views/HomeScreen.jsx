import React, { useEffect, useState } from "react";
import { productsList } from "../api/productsApi";
import "../css/cards.css";

const HomeScreen = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    traerData();
  }, []);

  const traerData = async () => {
    const { productos } = await productsList();
    setDatos(productos);
  };

  return (
    <div className="container">
      <div className="row pt-5">
        <div className="col">
          <h1>Bienvenidos!!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Productos</h3>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {datos.length > 0 ? (
          datos.map((producto) => (
            <div className="col" key={producto._id}>
              <div className="card h-100">
                <img
                  src={producto.img}
                  className="card-img-top img-card"
                  alt={producto.nombre}
                />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col">
            <h3>Cargando data...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;

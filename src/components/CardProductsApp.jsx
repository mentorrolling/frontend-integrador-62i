import React from "react";
import "../css/cards.css";

const CardProductsApp = ({ producto }) => {
  return (
    <div className="col mb-2 mb-md-0  ">
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
  );
};

export default CardProductsApp;

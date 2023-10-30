import React from "react";
import CardProductsApp from "./CardProductsApp";
import MessageAlertApp from "./MessageAlertApp";

const ProductosListApp = ({ datos }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {datos.total > 0 ? (
          datos.productos.map((producto) => (
            <CardProductsApp key={producto._id} producto={producto} />
          ))
        ) : (
          <MessageAlertApp message={"No hay productos para mostrar"} />
        )}
      </div>
    </>
  );
};

export default ProductosListApp;

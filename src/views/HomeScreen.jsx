import React, { useState, useEffect } from "react";
import { productosList } from "../helpers/productosApi";

import ProductosListApp from "../components/ProductosListApp";
import SpinnerApp from "../components/SpinnerApp";

const HomeScreen = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    traerProductos();
  }, []);

  const traerProductos = async () => {
    const { total, productos } = await productosList();
    setDatos({
      total,
      productos,
    });
  };

  return (
    <div className="container">
      <div className="row p-5">
        <div className="col">
          <h1>GeekStore</h1>
        </div>
      </div>
      {datos ? <ProductosListApp datos={datos} /> : <SpinnerApp />}
    </div>
  );
};

export default HomeScreen;

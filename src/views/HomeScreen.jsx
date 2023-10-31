import React, { useState, useEffect } from "react";

import useGetProducts from "../hooks/useGetProducts";
import ProductosListApp from "../components/ProductosListApp";
import SpinnerApp from "../components/SpinnerApp";

const HomeScreen = () => {
  const { datos } = useGetProducts();

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

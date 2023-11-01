import { useState, useEffect } from "react";
import { productsList } from "../api/productsApi";

const useGetProducts = (pagina = 0) => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    //traer datos
    traerDatos();
  }, [datos]);

  const traerDatos = async () => {
    const { total, productos } = await productsList(pagina);
    setDatos({
      total,
      productos,
    });
  };

  return { datos };
};

export default useGetProducts;

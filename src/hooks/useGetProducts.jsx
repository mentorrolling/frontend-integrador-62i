import { useState, useEffect } from "react";
import { productosList } from "../api/productosApi";

const useGetProducts = (pagina = 0) => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    traerProductos();
  }, [datos]);

  const traerProductos = async () => {
    const { total, productos } = await productosList(pagina);
    setDatos({
      total,
      productos,
    });
  };

  return { datos };
};

export default useGetProducts;

import {
  productosList,
  productosDelete,
  productosUpdate,
} from "../api/productosApi";

const traerProductos = async () => {
  const { total, productos } = await productosList();
  return {
    total,
    productos,
  };
};

const actualizarProducto = async (id, datos) => {
  const respuesta = await productosUpdate(id, datos);
  return respuesta;
};

const borrarProducto = async (id) => {
  const validar = confirm("Está seguro que quiere borrar el producto?");
  if (validar) {
    const respuesta = await productosDelete(id);
    console.log(respuesta);
    return respuesta;
  }
};

export { traerProductos, borrarProducto, actualizarProducto };

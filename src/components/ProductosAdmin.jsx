import React, { useState } from "react";
//custom hook
import useGetProducts from "../hooks/useGetProducts";
//importar funcion para borrar producto
import { productDelete } from "../api/productsApi";
//Importar componente de paginación
import BtnPaginationProd from "../components/BtnPaginationProd";
//Importar componente modal para actualizar producto
import ModalProductUpdate from "./ModalProductUpdate";

const ProductosAdmin = () => {
  const [pagina, setPagina] = useState(0); //desde
  //cargar productos
  const { datos } = useGetProducts(pagina);
  const [show, setShow] = useState(false); //Estado para manejo de Modal
  const [producto, setProducto] = useState(null); //datos del producto a actualizar

  const handleClose = () => {
    //Función para cerrar modal
    setProducto(null);
    setShow(false);
  };

  const handleShow = (datos) => {
    //Función para mostrar modal
    setProducto(datos);
    setShow(true);
  };

  //Función para modificar estado de producto
  const modificarProducto = (datos) => {
    setProducto(datos);
  };

  const borrarProducto = async (id) => {
    const validar = confirm("Está seguro que quiere borrar el producto?");
    if (validar) {
      const respuesta = await productDelete(id);
      console.log(respuesta);
    }
  };

  //Funciones para manejo de paginación---------
  const nextPage = () => {
    //total de los productos = 8 / 2 página
    const totalPages = datos.total / 5;
    console.log(totalPages);
    if (pagina + 1 < totalPages) {
      setPagina(pagina + 5);
    }
  };

  const backPage = () => {
    if (pagina >= 5) {
      setPagina(pagina - 5);
    }
  };
  //---------------------------------------------

  return (
    <>
      <div className="col">
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {/* Cargar tabla con los datos y botones para borrar y actualizar  */}
            {datos?.productos.length > 0 &&
              datos.productos.map((producto) => (
                <tr key={producto._id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.categoria.nombre}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => borrarProducto(producto._id)}
                      >
                        X
                      </button>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleShow(producto)}
                      >
                        X
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* Componente del Modal con sus respectivos Props  */}
        {producto && (
          <ModalProductUpdate
            show={show}
            handleClose={handleClose}
            producto={producto}
            setProducto={modificarProducto}
          />
        )}
      </div>
      <div className="col">
        {/* Componente de paginación con sus funciones  */}
        <BtnPaginationProd nextPage={nextPage} backPage={backPage} />
      </div>
    </>
  );
};

export default ProductosAdmin;

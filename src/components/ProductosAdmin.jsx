import React, { useState } from "react";
//custom hook
//importar funcion para borrar producto
//Importar componente modal para actualizar producto
//Importar componente de paginación

const ProductosAdmin = () => {
  const [pagina, setPagina] = useState(0);

  //cargar productos

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

  //Funciones para manejo de paginación---------
  const nextPage = () => {};

  const backPage = () => {};
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
          </tbody>
        </table>

        {/* Componente del Modal con sus respectivos Props  */}
      </div>
      <div className="col">
        {/* Componente de paginación con sus funciones  */}
      </div>
    </>
  );
};

export default ProductosAdmin;

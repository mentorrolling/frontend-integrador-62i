import React, { useEffect, useState } from "react";
import useGetProducts from "../hooks/useGetProducts";
import { borrarProducto } from "../helpers/productos";
import ModalProductUpdate from "./ModalProductUpdate";
import BtnPaginationProd from "./BtnPaginationProd";

const ProductosAdmin = () => {
  const [pagina, setPagina] = useState(0);
  const { datos } = useGetProducts(pagina);

  const [show, setShow] = useState(false);
  const [producto, setProducto] = useState(null);

  const handleClose = () => {
    setProducto(null);
    setShow(false);
  };

  const handleShow = (datos) => {
    setProducto(datos);
    setShow(true);
  };

  const modificarProducto = (datos) => {
    setProducto(datos);
  };

  const nextPage = () => {
    const totalPages = Math.floor(datos.total / 5);
    console.log(totalPages);
    if (pagina < totalPages) {
      setPagina(pagina + 5);
    }
  };

  const backPage = () => {
    if (pagina >= 5) {
      setPagina(pagina - 5);
    }
  };

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
            {datos?.productos.length > 0 &&
              datos.productos.map((producto) => (
                <tr key={producto._id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.categoria.nombre}</td>
                  <td className="text-end">${producto.precio}</td>
                  <td className="text-center">{producto.stock}</td>
                  <td>
                    <div className="d-flex gap-2">
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
                        O
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
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
        <BtnPaginationProd nextPage={nextPage} backPage={backPage} />
      </div>
    </>
  );
};

export default ProductosAdmin;

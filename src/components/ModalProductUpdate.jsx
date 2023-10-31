import React, { useState } from "react";
import { actualizarProducto } from "../helpers/productos";

import Modal from "react-bootstrap/Modal";

const ModalProductUpdate = ({ show, handleClose, producto, setProducto }) => {
  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const actualizar = async (e) => {
    e.preventDefault();
    await actualizarProducto(producto._id, producto);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Actualizar {producto?.nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          onSubmit={actualizar}
          className="bg-light text-dark p-3 rounded w-100"
        >
          <section className="row">
            <fieldset className="col-12 ">
              <label htmlFor="Nombre-input" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="Nombre-input"
                name="nombre"
                className="form-control"
                value={producto.nombre}
                onChange={handleChange}
                required
              />
            </fieldset>

            <fieldset className="col-12">
              <label htmlFor="description-input" className="form-label">
                Descripcion
              </label>
              <textarea
                type="text"
                id="description-input"
                name="descripcion"
                className="form-control"
                value={producto.descripcion}
                onChange={handleChange}
                required
              ></textarea>
            </fieldset>
          </section>
          <div className="text-end mt-2">
            <button type="submit" className="btn btn-primary">
              Guardar cambios
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalProductUpdate;

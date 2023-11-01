import React from "react";
//Importar funcion para actualizar producto
//importar función para traer categorías

import Modal from "react-bootstrap/Modal"; //importación de React-Bootstrap

const ModalProductUpdate = ({ show, handleClose, producto, setProducto }) => {
  const [datosCategorias, setDatosCategorias] = useState(null);

  useEffect(() => {
    //cargar las categorias
  }, []);

  //cuando los datos de los inputs cambian
  const handleChange = (e) => {
    //y si es el checkbox??

    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const actualizar = async (e) => {
    //prevenir el refresh de submit
    //llamar funcion para actualizar
    //cerrar el modal
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
            <fieldset className="col-12">
              <label htmlFor="categoria-input" className="form-label">
                Categoría
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handleChange}
                name="categoria"
              >
                <option value="">Elegir Categoría</option>
                {/* cargar las categorías en el select */}
              </select>
            </fieldset>
            <fieldset className="col-12 ">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="estado"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked={producto.estado}
                  onChange={handleChange}
                />
                <label className="form-check-label">Estado</label>
              </div>
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

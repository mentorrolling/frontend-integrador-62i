import React from "react";
import { useForm } from "react-hook-form";
import { usuarioAdd } from "../helpers/usuariosApi";

const RegistroUsuarioApp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const newUser = async (data) => {
    await usuarioAdd(data);
    reset();
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(newUser)}
      className="bg-light text-dark p-3 rounded w-100"
    >
      <h1 className="text-center">Registro de Usuario</h1>
      <section className="row">
        <fieldset className="col-12 ">
          <label htmlFor="nameUser-input" className="form-label">
            Nombre completo
          </label>
          <input
            type="text"
            id="nameUser-input"
            className="form-control"
            {...register("name", {
              required: "Este campo es requerido",
              minLength: {
                value: 3,
                message: "Este campo tiene un mínimo de 3 caracteres",
              },
              maxLength: {
                value: 100,
                message: "Este campo tiene un máximo de 15 caracteres",
              },
            })}
            required
            minLength={3}
            maxLength={100}
          />
          <p className="text-danger">{errors.name?.message}</p>
        </fieldset>
        <fieldset className="col-12 ">
          <label htmlFor="Email-input" className="form-label">
            Correo
          </label>
          <input
            type="email"
            id="Email-input"
            className="form-control"
            {...register("email", {
              required: "Este campo es requerido",
            })}
            required
          />
          <p className="text-danger">{errors.email?.message}</p>
        </fieldset>

        <fieldset className="col-12">
          <label htmlFor="password-input" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password-input"
            className="form-control"
            {...register("password", {
              required: "Este campo es requerido",
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/i,
                message:
                  "La Contraseña debe tener 8 caracteres mínimos y contener números y letras",
              },
            })}
            required
          />
          <p className="text-danger">{errors.password?.message}</p>
        </fieldset>
      </section>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </div>
    </form>
  );
};

export default RegistroUsuarioApp;

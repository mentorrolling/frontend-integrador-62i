import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../helpers/authApi";

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const inicioSesion = async (data) => {
    const respuesta = await login(data);
    console.log(respuesta);
    reset();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <form
                noValidate
                onSubmit={handleSubmit(inicioSesion)}
                className="bg-light text-dark p-3 rounded w-100"
              >
                <h1 className="text-center">Inicio de sesión</h1>
                <section className="row">
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
                          value: /^.{8,}$/i,
                          message:
                            "La Contraseña debe tener 8 caracteres mínimos",
                        },
                      })}
                      required
                    />
                    <p className="text-danger">{errors.password?.message}</p>
                  </fieldset>
                </section>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary">
                    Iniciar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

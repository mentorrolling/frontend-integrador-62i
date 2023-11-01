import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../api/authApi";

const LoginScreen = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loginUser, setLoginUser] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const inicioSesion = async (data) => {
    setLoading(true);
    const respuesta = await login(data);
    console.log(respuesta);
    setLoginUser(respuesta);
    reset();
    setLoading(false);

    if (respuesta?.token) {
      localStorage.setItem("token", JSON.stringify(respuesta.token));
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="row vh-100 d-flex align-items-center">
        <div className="col-12 col-md-6 offset-md-3">
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
                      disabled={loading ? true : false}
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
                          value: /^.{8,16}$/i,
                          message:
                            "La Contraseña debe tener 8 caracteres mínimos",
                        },
                      })}
                      required
                      disabled={loading ? true : false}
                    />
                    <p className="text-danger">{errors.password?.message}</p>
                  </fieldset>
                </section>
                <div className="text-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading ? true : false}
                  >
                    Iniciar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {loginUser?.msg && (
        <div className="row mt-3">
          <div className="col">
            <div className="alert alert-danger" role="alert">
              {loginUser.msg}
            </div>
          </div>
        </div>
      )}
      {loginUser?.errors && (
        <div className="row mt-3">
          {loginUser.errors.map((error, index) => (
            <div className="col" key={index}>
              <div className="alert alert-danger" role="alert">
                {error.msg}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoginScreen;

import { useEffect, useState } from "react";
import "../../App.css";

function Login({ alCerrarLogin, userLogin }) {
  const url = "http://serviya.local/api/login.php";
  const [correoCliente, setCorreoCliente] = useState("");
  const [passCliente, setPassCliente] = useState("");
  const [error, setError] = useState("");

  const validacion = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: correoCliente,
          contrasena: passCliente,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Error ${response.status}: ${response.statusText}");
      }

      if (data.status === "ok") {
        localStorage.setItem("usuario", JSON.stringify(data));
        setCorreoCliente("");
        setPassCliente("");
        alert("Sesion Iniciada con exito");
        userLogin();
        alCerrarLogin();
      } else {
        setError(data.mensaje || "Correo o contraseña incorrectos");
        alert("correo y/o contraseña incorrecta");
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="modal">
      <div className="contenido-modal form form-login">
        <form className="contenido-form" onSubmit={validacion}>
          <div className="input-div">
            <div className="titulo-login"><h2>Ingrese sus datos</h2></div>
            <label>Correo</label>
            <input
              type="text"
              className="inputs"
              placeholder="Correo"
              id="correo"
              value={correoCliente}
              onChange={(e) => setCorreoCliente(e.target.value)}
              required
            />
          </div>

          <div className="input-div">
            <label>Contraseña</label>
            <input
              type="password"
              className="inputs"
              placeholder="Contraseña"
              id="password"
              value={passCliente}
              onChange={(e) => setPassCliente(e.target.value)}
              required
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Iniciar Sesión
            </button>
          </div>
        </form>
        <div className="login-close">
          <button className="btn" onClick={alCerrarLogin}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

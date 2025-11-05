import { useEffect, useState } from "react";


function Login({ alCerrarLogin }) {
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
        console.log("Sesion iniciada con caca");
        //alCerrarLogin();
      } else {
        setError(data.mensaje || "Correo o contraseña incorrectos");
      }
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <form onSubmit={validacion}>
        <div>
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

        <div>
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
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
      <button onClick={alCerrarLogin}>Cerrar</button>
    </div>
  );
}

export default Login;

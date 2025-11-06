import { useEffect, useState } from "react";
import "../../App.css";

function SignUp({ alCerrar }) {
  const url = "http://serviya.local/api/signup.php";
  const [nomCliente, setNomCliente] = useState("");
  const [fechaCliente, setFechaCliente] = useState("");
  const [correoCliente, setCorreoCliente] = useState("");
  const [passCliente, setPassCliente] = useState("");
  const [telCliente, setTelCliente] = useState("");
  const [ciudadCliente, setCiudadCliente] = useState("");
  const [dirCliente, setDirCliente] = useState("");
  const [error, setError] = useState("");
  const [tipo, setTipo] = useState("");
  const campos = [
    nomCliente,
    fechaCliente,
    correoCliente,
    passCliente,
    telCliente,
    ciudadCliente,
    dirCliente,
  ];
  const crearCuenta = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (campos.every((campo) => campo.trim() !== "")) {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tipo: tipo,
            nombre: nomCliente,
            fecha: fechaCliente,
            correo: correoCliente,
            contrasena: passCliente,
            telefono: telCliente,
            ciudad: ciudadCliente,
            direccion: dirCliente,
          }),
        });

        const data = await response.json();
        console.log(data);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        if (data.status === "success") {
          setNomCliente("");
          setFechaCliente("");
          setCorreoCliente("");
          setPassCliente("");
          setTelCliente("");
          setCiudadCliente("");
          setDirCliente("");
          setTipo("");
          alert("cuenta creada con exito");
          const inputs = document.querySelectorAll(".inputs");
          inputs.value = "";
          alCerrar();
        } else if (data.tipo === "edad") {
          alert("Para poder registrarte, debes de ser mayor de edad");
        } else if (data.tipo === "usuario") {
          alert("Seleccione un tipo de usuario");
        }
      } else {
        alert("Todos los campos son necesarios");
      }
    } catch (err) {
      setError(err);
    }
  };
  const tipoProveedor = () => {
    setTipo("proveedor");
  };
  const tipoCliente = () => {
    setTipo("cliente");
  };
  return (
    <div className="modal">
      <div className="contenido-modal form">
        <div className="btn btn-tipo">
          <button className="btn tipo-choose" onClick={tipoCliente}>
            Usuario
          </button>
          <button className="btn tipo-choose" onClick={tipoProveedor}>
            Proveedor
          </button>
        </div>
        <form className="formulario">
          <div>
            <label>Nombre Completo</label>
            <input
              type="text"
              className="inputs"
              placeholder="Nombre Completo"
              id="nombre"
              value={nomCliente}
              onChange={(e) => setNomCliente(e.target.value)}
            />
          </div>

          <div>
            <label>Fecha de Nacimiento</label>
            <input
              type="date"
              className="inputs"
              placeholder="AAAA-MM-DD"
              id="fecha"
              value={fechaCliente}
              onChange={(e) => setFechaCliente(e.target.value)}
            />
          </div>

          <div>
            <label>Correo</label>
            <input
              type="text"
              className="inputs"
              placeholder="Correo"
              id="correo"
              value={correoCliente}
              onChange={(e) => setCorreoCliente(e.target.value)}
            />
          </div>

          <div>
            <label>Contraseña</label>
            <input
              type="password"
              className="inputs"
              placeholder="Contrasena"
              id="contrasena"
              value={passCliente}
              onChange={(e) => setPassCliente(e.target.value)}
            />
          </div>

          <div>
            <label>Telefono</label>
            <input
              type="number"
              className="inputs"
              placeholder="Telefono"
              id="telefono"
              value={telCliente}
              onChange={(e) => setTelCliente(e.target.value)}
            />
          </div>

          <div>
            <label>Ciudad</label>
            <input
              type="text"
              className="inputs"
              placeholder="Ciudad"
              id="ciudad"
              value={ciudadCliente}
              onChange={(e) => setCiudadCliente(e.target.value)}
            />
          </div>

          <div>
            <label>Dirección</label>
            <input
              type="text"
              className="inputs"
              placeholder="Dirección"
              id="direccion"
              value={dirCliente}
              onChange={(e) => setDirCliente(e.target.value)}
            />
          </div>

          <button onClick={crearCuenta}>Crear Cuenta</button>
        </form>
        <button onClick={alCerrar}>Cerrar</button>
      </div>
    </div>
  );
}

export default SignUp;

import { useEffect, useState } from "react";

function SignUp({ alCerrar }) {
  const url = "http://serviya.local/";
  const [clienteId, setClienteId] = useState("");
  const [nomCliente, setNomCliente] = useState("");
  const [fechaCliente, setFechaCliente] = useState("");
  const [correoCliente, setCorreoCliente] = useState("");
  const [passCliente, setPassCliente] = useState("");
  const [telCliente, setTelCliente] = useState("");
  const [ciudadCliente, setCiudadCliente] = useState("");
  const [dirCliente, setDirCliente] = useState("");
  const [error, setError] = useState("");

  const crearCuenta = async (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <form onSubmit={crearCuenta} className="formulario">
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
      </form>
      <button onClick={alCerrar}>Cerrar</button>
    </div>
  );
}

export default SignUp;

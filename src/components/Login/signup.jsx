import { useEffect, useState } from "react";
import "../../App.css";

function SignUp({ alCerrar }) {
  const url = "http://192.168.100.109/backend_proveedores/api/signup.php";
  const [nomCliente, setNomCliente] = useState("");
  const [fechaCliente, setFechaCliente] = useState("");
  const [correoCliente, setCorreoCliente] = useState("");
  const [passCliente, setPassCliente] = useState("");
  const [telCliente, setTelCliente] = useState("");
  const [ciudadCliente, setCiudadCliente] = useState("");
  const [dirCliente, setDirCliente] = useState("");
  const [calleCliente, setCalleCliente] = useState("");
  const [numCliente, setNumCliente] = useState("");
  const [colCliente, setColCliente] = useState("");
  const [cpCliente, setCPCliente] = useState("");
  const [estadoCliente, setEstadoCliente] = useState("");
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
  const btnActivo = (tipo) => {
    if (tipo === "cliente") {
      const boton = document.querySelector(".cliente-btn");
      boton.classList.add("btn-activo");
      const botonOtro = document.querySelector(".proveedor-btn");
      botonOtro.classList.remove("btn-activo");
    } else {
      const boton = document.querySelector(".proveedor-btn");
      boton.classList.add("btn-activo");
      const botonOtro = document.querySelector(".cliente-btn");
      botonOtro.classList.remove("btn-activo");
    }
  };

  useEffect(() => {
    const dirCom = `${calleCliente} ${numCliente} ${colCliente} ${cpCliente} ${ciudadCliente} ${estadoCliente}`;
    setDirCliente(dirCom.trim());
  }, [
    calleCliente,
    numCliente,
    colCliente,
    cpCliente,
    ciudadCliente,
    estadoCliente,
  ]);

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
    btnActivo("proveedor");
  };
  const tipoCliente = () => {
    setTipo("cliente");
    btnActivo("cliente");
  };
  return (
    <div className="modal">
      <div className="contenido-modal form">
        <div className="btn-tipo">
          <button className="btn tipo-choose cliente-btn" onClick={tipoCliente}>
            Usuario
          </button>
          <button
            className="btn tipo-choose proveedor-btn"
            onClick={tipoProveedor}
          >
            Proveedor
          </button>
        </div>
        <form className="formulario">
          <div className="form-datos">
            <label className="label">Nombre Completo</label>
            <input
              type="text"
              className="inputs"
              placeholder="Nombre Completo"
              id="nombre"
              value={nomCliente}
              onChange={(e) => setNomCliente(e.target.value)}
            />
          </div>

          <div className="form-datos">
            <label className="label">Fecha de Nacimiento</label>
            <input
              type="date"
              className="inputs"
              placeholder="AAAA-MM-DD"
              id="fecha"
              value={fechaCliente}
              onChange={(e) => setFechaCliente(e.target.value)}
            />
          </div>

          <div className="form-datos">
            <label className="label">Correo</label>
            <input
              type="text"
              className="inputs"
              placeholder="Correo"
              id="correo"
              value={correoCliente}
              onChange={(e) => setCorreoCliente(e.target.value)}
            />
          </div>

          <div className="form-datos">
            <label className="label">Contraseña</label>
            <input
              type="password"
              className="inputs"
              placeholder="Contrasena"
              id="contrasena"
              value={passCliente}
              onChange={(e) => setPassCliente(e.target.value)}
            />
          </div>

          <div className="form-datos">
            <label className="label">Telefono</label>
            <input
              type="number"
              className="inputs"
              placeholder="Telefono"
              id="telefono"
              value={telCliente}
              onChange={(e) => setTelCliente(e.target.value)}
            />
          </div>
          <div className="datos-dir">
            <div className="form-datos">
              <label className="label">Calle</label>
              <input
                type="text"
                className="inputs"
                placeholder="Calle"
                id="calle"
                value={calleCliente}
                onChange={(e) => setCalleCliente(e.target.value)}
              />
            </div>
            <div className="form-datos">
              <label className="label">Numero</label>
              <input
                type="text"
                className="inputs"
                placeholder="Numero"
                id="num"
                value={numCliente}
                onChange={(e) => setNumCliente(e.target.value)}
              />
            </div>

            <div className="form-datos">
              <label className="label">Colonia</label>
              <input
                type="text"
                className="inputs"
                placeholder="Colonia"
                id="colonia"
                value={colCliente}
                onChange={(e) => setColCliente(e.target.value)}
              />
            </div>

            <div className="form-datos">
              <label className="label">Codigo Postal</label>
              <input
                type="text"
                className="inputs"
                placeholder="Codigo Postal"
                id="cp"
                value={cpCliente}
                onChange={(e) => setCPCliente(e.target.value)}
              />
            </div>

            <div className="form-datos">
              <label className="label">Ciudad</label>
              <input
                type="text"
                className="inputs"
                placeholder="Ciudad"
                id="ciudad"
                value={ciudadCliente}
                onChange={(e) => setCiudadCliente(e.target.value)}
              />
            </div>
            <div className="form-datos">
              <label className="label">Estado</label>
              <input
                type="text"
                className="inputs"
                placeholder="Estado"
                id="estado"
                value={estadoCliente}
                onChange={(e) => setEstadoCliente(e.target.value)}
              />
            </div>
          </div>
          <div className="crear-contenedor">
            <button className="btn crear-sign-btn" onClick={crearCuenta}>
              Crear Cuenta
            </button>
          </div>
        </form>
        <div className="close-btn-contenedor">
          <button className="btn close-sign-btn" onClick={alCerrar}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

import { useEffect, useState } from "react";
import SubirImagen from "../SubirImg";
import { FaRegUser } from "react-icons/fa";

function ConfigUser({
  quitarConfig,
  id,
  tipo,
  nombre,
  fecha,
  correo,
  telefono,
  ciudad,
  direccion,
  ruta,
}) {
  //const [url, setUrl] = useState(null);
  const [newNom, setNewNom] = useState("");
  const [newFecha, setNewFecha] = useState("");
  const [newCorreo, setNewCorreo] = useState("");
  const [newContra, setNewContra] = useState("");
  const [newTel, setNewTel] = useState("");
  const [newCalle, setNewCalle] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newCol, setNewCol] = useState("");
  const [newCiudad, setNewCiudad] = useState("");
  const [newEstado, setNewEstado] = useState("");

  const [showCuenta, setShowCuenta] = useState(false);
  const [showPers, setShowPers] = useState(true);
  const [showPagos, setShowPagos] = useState(false);
  const [areImg, setAreImg] = useState(false);
  const [showImgUp, setShowImgUp] = useState(false);
  const setImgUser = () => {
    setAreImg(true);
  };
  useEffect(() => {
    if (ruta !== null) {
      setImgUser();
    }
  }, [areImg]);
  return (
    <div className="modal">
      <div className="contenedor-datos-user">
        <div className="sidebar-datos">
          <div className="img-contenedor">
            {areImg && (
              <div className="img-sub">
                <img
                  src={ruta}
                  alt="user-img"
                  className="user-img"
                  onClick={() => {
                    setShowCuenta(false);
                    setShowPagos(false);
                    setShowPers(false);
                    setShowImgUp(true);
                  }}
                ></img>
              </div>
            )}
            {!areImg && (
              <div>
                <FaRegUser
                  size={80}
                  onClick={() => {
                    setShowCuenta(false);
                    setShowPagos(false);
                    setShowPers(false);
                    setShowImgUp(true);
                  }}
                />
              </div>
            )}
          </div>

          <div className="btns-side">
            <button
              className="btn btn-side"
              onClick={() => {
                setShowCuenta(false);
                setShowPagos(false);
                setShowPers(true);
              }}
            >
              Datos Personales
            </button>
            <button
              className="btn btn-side"
              onClick={() => {
                setShowCuenta(true);
                setShowPagos(false);
                setShowPers(false);
              }}
            >
              Cuenta
            </button>
            <button
              className="btn btn-side"
              onClick={() => {
                setShowCuenta(false);
                setShowPagos(true);
                setShowPers(false);
              }}
            >
              Pagos
            </button>
            <button className="btn btn-side" onClick={quitarConfig}>
              Cerrar
            </button>
          </div>
        </div>
        {showPers && (
          <form className="form-user">
            <div className="form-datos">
              <label className="label">Nombre Completo</label>
              <input
                type="text"
                className="inputs"
                placeholder="Nombre Completo"
                id="nombre"
                defaultValue={nombre}
              />
            </div>

            <div className="form-datos">
              <label className="label">Fecha de Nacimiento</label>
              <input
                type="date"
                className="inputs"
                placeholder="AAAA-MM-DD"
                id="fecha"
                defaultValue={fecha}
              />
            </div>

            <div className="form-datos">
              <label className="label">Ciudad</label>
              <input
                type="text"
                className="inputs"
                placeholder="Ciudad"
                id="ciudad"
                defaultValue={ciudad}
              />
            </div>

            <div className="form-datos">
              <label className="label">Dirección</label>
              <input
                type="text"
                className="inputs"
                placeholder="Dirección"
                id="direccion"
                defaultValue={direccion}
              />
            </div>
            <div className="btn-upd">
              <button>Actualizar Datos</button>
            </div>
          </form>
        )}
        {showCuenta && (
          <form className="form-user">
            <div className="form-datos">
              <label className="label">Correo</label>
              <input
                type="text"
                className="inputs"
                placeholder="Correo"
                id="correo"
                defaultValue={correo}
              />
            </div>

            <div className="form-datos">
              <label className="label">Contraseña</label>
              <input
                type="password"
                className="inputs"
                placeholder="Contrasena"
                id="contrasena"
                defaultValue={"passCliente"}
              />
            </div>

            <div className="form-datos">
              <label className="label">Telefono</label>
              <input
                type="number"
                className="inputs"
                placeholder="Telefono"
                id="telefono"
                defaultValue={telefono}
              />
            </div>

            <div className="btn-upd">
              <button>Actualizar Datos</button>
            </div>
          </form>
        )}
        {showPagos && (
          <form className="form-user">
            <div className="form-datos">
              <label className="label">Numero de Tarjeta</label>
              <input type="number" className="inputs" id="numTar" />
            </div>
            <div className="form-datos">
              <label className="label">Expiración</label>
              <input type="text" className="inputs" id="exp" />
            </div>
            <div className="form-datos">
              <label className="label">CVV</label>
              <input type="password" className="inputs" id="cvv" />
            </div>
            <div className="btn-upd">
              <button>Actualizar Datos</button>
            </div>
          </form>
        )}
        {showImgUp && <SubirImagen />}
      </div>
    </div>
  );
}

export default ConfigUser;

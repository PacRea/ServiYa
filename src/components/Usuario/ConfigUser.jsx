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
  tarjeta,
  exp,
  cvv,
}) {
  const [newNom, setNewNom] = useState(nombre);
  const [newFecha, setNewFecha] = useState(fecha);
  const [newCorreo, setNewCorreo] = useState(correo);
  const [newTel, setNewTel] = useState(telefono);
  const [newDir, setNewDir] = useState(direccion);
  const [newCiudad, setNewCiudad] = useState(ciudad);
  const [newTarjeta, setNewTarjeta] = useState(tarjeta);
  const [newEXP, setNewEXP] = useState(exp);
  const [newCVV, setNewCVV] = useState(cvv);
  const [showCuenta, setShowCuenta] = useState(false);
  const [showPers, setShowPers] = useState(true);
  const [showPagos, setShowPagos] = useState(false);
  const [areImg, setAreImg] = useState(false);
  const [showImgUp, setShowImgUp] = useState(false);
  useEffect(() => {
    if (ruta && ruta.trim() !== "") {
      setAreImg(true);
    } else {
      setAreImg(false);
    }
  }, [ruta]);

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
                setShowImgUp(false);
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
                setShowImgUp(false);
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
                setShowImgUp(false);
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
                id="nombre"
                value={newNom}
                onChange={(e) => setNewNom(e.target.value)}
              />
            </div>

            <div className="form-datos">
              <label className="label">Fecha de Nacimiento</label>
              <input
                type="date"
                className="inputs"
                id="fecha"
                value={newFecha}
                onChange={(e) => setNewFecha(e.target.value)}
              />
            </div>

            <div className="form-datos">
              <label className="label">Ciudad</label>
              <input
                type="text"
                className="inputs"
                id="ciudad"
                value={newCiudad}
                onChange={(e) => setNewCiudad(e.target.value)}
              />
            </div>

            <div className="form-datos">
              <label className="label">Dirección</label>
              <input
                type="text"
                className="inputs"
                id="direccion"
                value={newDir}
                onChange={(e) => setNewDir(e.target.value)}
              />
            </div>
            <div className="btn-upd">
              <button className="btn">Actualizar Datos</button>
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
                id="correo"
                value={newCorreo}
                onChange={(e) => setNewCorreo(e.target.value)}
              />
            </div>

            <div className="form-datos">
              <label className="label">Contraseña</label>
              <input
                type="password"
                className="inputs"
                id="contrasena"
                placeholder="Dejar en blanco para no cambiar"
                
              />
            </div>

            <div className="form-datos">
              <label className="label">Telefono</label>
              <input
                type="number"
                className="inputs"
                id="telefono"
                value={newTel}
                onChange={(e) => setNewTel(e.target.value)}
              />
            </div>

            <div className="btn-upd">
              <button className="btn">Actualizar Datos</button>
            </div>
          </form>
        )}
        {showPagos && (
          <form className="form-user">
            <div className="form-datos">
              <label className="label">Numero de Tarjeta</label>
              <input
                type="number"
                className="inputs"
                id="numTar"
                value={newTarjeta}
                onChange={(e) => setNewTarjeta(e.target.value)}
              />
            </div>
            <div className="form-datos">
              <label className="label">Expiración</label>
              <input
                type="text"
                className="inputs"
                id="exp"
                value={newEXP}
                onChange={(e) => setNewEXP(e.target.value)}
              />
            </div>
            <div className="form-datos">
              <label className="label">CVV</label>
              <input
                type="password"
                className="inputs"
                id="cvv"
                value={newCVV}
                onChange={(e) => setNewCVV(e.target.value)}
              />
            </div>
            <div className="btn-upd">
              <button className="btn">Actualizar Datos</button>
            </div>
          </form>
        )}
        {showImgUp && <SubirImagen id={id} tipoOp={tipo} />}
      </div>
    </div>
  );
}

export default ConfigUser;

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
  cvv
}) {
  const [newNom, setNewNom] = useState("");
  const [newFecha, setNewFecha] = useState("");
  const [newCorreo, setNewCorreo] = useState("");
  const [newContra, setNewContra] = useState("");
  const [newTel, setNewTel] = useState("");
  const [newDir, setNewDir] = useState("");
  const [newCiudad, setNewCiudad] = useState("");
  const [newTarjeta, setNewTarjeta] = useState("");
  const [newEXP, setNewEXP] = useState("");
  const [newCVV, setNewCVV] = useState("");
  const [showCuenta, setShowCuenta] = useState(false);
  const [showPers, setShowPers] = useState(true);
  const [showPagos, setShowPagos] = useState(false);
  const [areImg, setAreImg] = useState(false);
  const [showImgUp, setShowImgUp] = useState(false); 
  useEffect(() => {
    if (ruta && ruta.trim() !== "") {
      setAreImg(true);
    } 
    else{
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
                placeholder="Nombre Completo"
                id="nombre"
                defaultValue={nombre}
                value={newNom}
                onChange={(e) => setNewNom(e.target.value)}
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
                value={newFecha}
                onChange={(e) => setNewFecha(e.target.value)}
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
                value={newCiudad}
                onChange={(e) => setNewCiudad(e.target.value)}
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
                placeholder="Correo"
                id="correo"
                defaultValue={correo}
                value={newCorreo}
                onChange={(e) => setNewCorreo(e.target.value)}
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
                defaultValue={tarjeta}
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
                defaultValue={exp}
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
                defaultValue={cvv}
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

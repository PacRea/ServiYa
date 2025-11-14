import "../../App.css";
import { useState } from "react";
import SubirImagen from "../SubirImg";

function ModificarServicio({
  id_prov,
  nombre,
  ciudad,
  direccion,
  telefono,
  id_serv,
  nom_serv,
  desc,
  cat,
  precio,
  cerrarIndv,
  img,
  abrirList,
}) {
  const [showImgAdd, setShowImgAdd] = useState(false);
  const tipoOp = "servicio";
  const mostrarWindImg = () => setShowImgAdd(true);
  const ocultWindImg = () => setShowImgAdd(false);

  return (
    <div className="modal">
      <div className="contenido-modal contenido-mod">
        <div className="contenedor-serv-mod">
          <h2>Mi Servicio</h2>
          <form className="form-mod">
            {!showImgAdd && (
              <div className="form-mod-inputs">
                <div className="titulo_mod">
                  <input defaultValue={nom_serv}></input>
                </div>
                <div className="img-mod">
                  <img
                    src={img}
                    alt="Agrega una Imagen"
                    className="img-mod-selecc"
                    onClick={mostrarWindImg}
                  ></img>
                </div>
                <div className="nom-desc-mod">
                  <input defaultValue={nombre}></input>
                  <input defaultValue={desc}></input>
                </div>
                <div className="info-mod">
                  <input defaultValue={ciudad}></input>
                  <input defaultValue={direccion}></input>
                  <input defaultValue={telefono}></input>
                  <input defaultValue={cat}></input>
                  <input defaultValue={precio}></input>
                </div>
              </div>
            )}
            {showImgAdd && (
              <div className="img-add-mod">
                <SubirImagen id={id_serv} tipoOp={tipoOp} />
                <button onClick={ocultWindImg}>Cerrar</button>
              </div>
            )}
          </form>
          <div className="btns-mod">
            <button type="submit" className="btn">
              Actualizar datos
            </button>
            <button className="btn" onClick={cerrarIndv}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModificarServicio;

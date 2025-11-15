import "../../App.css";
import { useEffect } from "react";

function ServIndv({
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
  abrirList,
  ruta_imagen,
}) {
  return (
    <div className="modal">
      <div className="indiv-serv">
        <div className="img-serv-ind">
          <img alt="img-serv" src={ruta_imagen}></img>
        </div>

        <div className="info-ind">
          <p>{nom_serv}</p>
          <p>{desc}</p>
        </div>
        <div className="titulo-ind">
          <p>{nombre}</p>
        </div>
        <div className="dir-ind">
          <p>{ciudad}</p>
          <p>{direccion}</p>

          <p>{telefono}</p>
          <p>{cat}</p>
          <p>{precio}</p>
        </div>
        <div className="btn-ind-div">
          <button className="btn btn-idv">Contratar</button>
          <button
            className="btn btn-idv"
            onClick={() => {
              cerrarIndv();
              abrirList();
            }}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServIndv;

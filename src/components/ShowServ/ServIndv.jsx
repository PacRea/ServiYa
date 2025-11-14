import "../../App.css";
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
}) {
  return (
    <div className="modal">
      <div className="indiv-serv">
          <div className="">
            <img alt="img-serv"></img>
          </div>
        <div className="serv-datos">
          <div>
            <p>{id_prov}</p>
            <p>{nombre}</p>
          </div>
          <div>
            <p>{ciudad}</p>
            <p>{direccion}</p>
          </div>
          <div>
            <p>{telefono}</p>
            <p>{id_serv}</p>
          </div>
          <div>
            <p>{nom_serv}</p>
            <p>{desc}</p>
          </div>
          <div>
            <p>{cat}</p>
            <p>{precio}</p>
          </div>
        </div>
        <div>
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

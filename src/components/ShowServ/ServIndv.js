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
  abrirList
}) {
  return (
    <div>
      <div>
        <p>{id_prov}</p>
        <p>{nombre}</p>
        <p>{ciudad}</p>
        <p>{direccion}</p>
        <p>{telefono}</p>
        <p>{id_serv}</p>
        <p>{nom_serv}</p>
        <p>{desc}</p>
        <p>{cat}</p>
        <p>{precio}</p>
      </div>
      <button
        onClick={() => {
          cerrarIndv();
          abrirList();
        }}
      >
        Cerrar
      </button>
    </div>
  );
}

export default ServIndv;

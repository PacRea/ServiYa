import { useEffect, useState } from "react";
import ServIndv from "./ServIndv";
import "../../App.css";

function ShowServicios() {
  const [showServ, setShowServ] = useState([]);
  const [idProv, setIdProv] = useState("");
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [idServ, setIdServ] = useState("");
  const [nomServ, setNomServ] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [precio, setPrecio] = useState("");
  const [showBig, setShowBig] = useState(false);
  const [showThis, setShowThis] = useState(true);
  const url = "http://serviya.local/api";

  useEffect(() => {
    fetch(url + "/consultar_servicios.php")
      .then((res) => res.json())
      .then((data) => setShowServ(data))
      .catch((err) => console.error("Error al obtener servicios", err));
  }, []);
  const setValores = (
    idprov,
    nombre,
    ciudad,
    direccion,
    telefono,
    idserv,
    nomserv,
    desc,
    cat,
    precio
  ) => {
    setIdProv(idprov);
    setNombre(nombre);
    setCiudad(ciudad);
    setDireccion(direccion);
    setTelefono(telefono);
    setIdServ(idserv);
    setNomServ(nomserv);
    setDesc(desc);
    setCat(cat);
    setPrecio(precio);
  };
  const mostrarInd = () => setShowBig(true);
  const oculInd = () => setShowBig(false);
  const oculLista = () => setShowThis(false);
  const showLista = () => setShowThis(true);

  return (
    <div className="servicios-principal">
      <h2 className="titulo-servicios">Checa que necesitas</h2>
      {showThis && showServ.map((p) => (
        <div className="servicios-datos" key={p.id_servicio}>
          <div className="header-servicios">
            <h3 className="titulo-servicio">{p.nombre_servicio}</h3>
            <p>{p.descripcion}</p>
            <p>{p.categoria}</p>
            <p>{p.ciudad}</p>
            <p>{p.direccion}</p>
            <p>{p.telefono}</p>
            <p>{p.precio}</p>
            <button className="btn"
              onClick={() => {
                setValores(
                  p.id_proveedor,
                  p.nombre_servicio,
                  p.ciudad,
                  p.direccion,
                  p.telefono,
                  p.id_servicio,
                  p.nombre_servicio,
                  p.descripcion,
                  p.categoria,
                  p.precio
                );
                mostrarInd();
                oculLista();
              }}
            >
              Ver mas
            </button>
          </div>
        </div>
      ))}
      {showBig && (
        <ServIndv
          id_prov={idProv}
          nombre={nombre}
          ciudad={ciudad}
          direccion={direccion}
          telefono={telefono}
          id_serv={idServ}
          nom_serv={nomServ}
          desc={desc}
          cat={cat}
          precio={precio}
          cerrarIndv={oculInd}
          abrirList={showLista}
        />
      )}
    </div>
  );
}

export default ShowServicios;

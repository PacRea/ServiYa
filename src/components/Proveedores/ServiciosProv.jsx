import { useState, useEffect } from "react";
import "../../App.css";
import ModificarServicio from "./ModServ";

function ServiciosProveedor({ cerrar, id }) {
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
  const [imgServ, setImgServ] = useState("");
  const [showMod, setShowMod] = useState(false);
  const [showThis, setShowThis] = useState(true);
  const url = "http://DESKTOP-2H2VHH5/api";

  useEffect(() => {
    const idProveedor = id;
    fetch(`${url}/consultar_serv_prov.php?id_usuario=${idProveedor}`)
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
  const mostrarMod = () => {
    setShowMod(true);
  };
  const ocultMod = () => {
    setShowMod(false);
  };
  return (
    <div className="servicios-principal">
      <h2 className="titulo-servicios">Mis servicios</h2>
      <button className="btn" onClick={cerrar}>    Volver
      </button>
      <div className="contenedor-servicios-ind">
        {showThis &&
          showServ.map((p) => (
            <div className="servicios-datos" key={p.id_servicio}>
              <div className="titulo-servicio">
                <h3>{p.nombre_servicio}</h3>
              </div>
              <div className="nom-desc-prov">
                <p className="nombre-prov">{p.nombre}</p>
                <p>{p.descripcion}</p>
              </div>
              <div className="info-serv">
                <p>{p.categoria}</p>
                <p>{p.direccion}</p>
                <p>{p.ciudad}</p>
                <p>{p.telefono}</p>
                <p>{p.precio}</p>
              </div>

              <div className="btn-serv">
                <button
                  className="btn"
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
                    mostrarMod();
                  }}
                >
                  Modificar
                </button>
                <button className="btn  btn-delete">Eliminar</button>
              </div>
            </div>
          ))}
        {showMod && (
          <ModificarServicio
            cerrarIndv={ocultMod}
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
            img={imgServ}
          />
        )}
      </div>
    </div>
  );
}
export default ServiciosProveedor;

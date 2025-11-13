import "./App.css";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import MostrarServ from "./pages/MostrarServicios";
import ConfigUser from "./components/Usuario/ConfigUser";
import { PiGearFill } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import Confirmacion from "./components/ConfCS";
import ServiciosProveedor from "./components/Proveedores/ServiciosProv";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [configUser, setConfigUser] = useState(false);
  const [img, setImg] = useState(false);
  const [cerraModal, setCerrarModal] = useState(false);
  const [addServ, setAddServ] = useState(false);
  const [provUser, setProvUser] = useState(false);
  const [servProv, setServProv] = useState(false);
  const usuarioLogeado = () => {
    setUserLogged(true);
  };
  const usuarioDatos = (datos) => {
    setUsuario(datos);
    localStorage.setItem("usuario", JSON.stringify(datos));
  };

  useEffect(() => {
    if (usuario) {
      imgUser();
      setearTipo();
    }
  }, [usuario]);
  const setearTipo = () =>{
    if(usuario.tipo === "proveedor"){
      setProvUser(true);
      botonesServicio();
    }
  };
  const botonesServicio = () => {
    setAddServ(true);
  };
const cerrarSesion = () => {
  setUsuario(null);
  setConfigUser(false);
  setUserLogged(false);
  setImg(false);
  setProvUser(false);
  setServProv(false);
  setCerrarModal(false);
  localStorage.removeItem("usuario");
};
  const mostrarConfig = () => setConfigUser(true);
  const quitarConfig = () => setConfigUser(false);
  const imgUser = () => {
    if (usuario && usuario.ruta) {
      setImg(true);
    } else {
      setImg(false);
    }
  };
  const confModal = () => {
    setCerrarModal(true);
  };
  const cerrarConfModal = () => {
    setCerrarModal(false);
  };
  const showServiciosProv = () => setServProv(true);
  const quitarServiciosProv = () => setServProv(false);
  return (
    <div>
      <header className="header">
        <div className="titulo-header">
          <h1>Servi-Ya</h1>
        </div>
        {!userLogged && (
          <LoginPage
            userLog={usuarioLogeado}
            usuario={usuarioDatos}
          ></LoginPage>
        )}
        {userLogged && (
          <div className="bienvenida">
            <div className="nom-serv">
              <h3>Bienvenid@ {usuario.nombre}</h3>
              {provUser && (<button className="btn" onClick={showServiciosProv}>Mis Servicios</button>)}
            </div>

            <div className="img-contenedor">
              {img && (
                <div className="img-sub">
                  <img className="user-img" src={usuario.ruta}></img>
                </div>
              )}
              {!img && <FaRegUser />}
            </div>
            <div className="botones-contenedor-header">
              <button className="btn" onClick={mostrarConfig}>
                <PiGearFill size={20} />
              </button>
              <button className="btn" onClick={confModal}>
                Cerrar Sesión
              </button>
            </div>
            {cerraModal && (
              <Confirmacion confirmar={cerrarSesion} cerrar={cerrarConfModal} />
            )}
          </div>
        )}
      </header>
      <main className="main">
        <div className="servs-display">BLANK</div>
        {configUser && (
          <ConfigUser
            quitarConfig={quitarConfig}
            id={usuario.id}
            tipo={usuario.tipo}
            nombre={usuario.nombre}
            fecha={usuario.fecha}
            correo={usuario.correo}
            telefono={usuario.telefono}
            ciudad={usuario.ciudad}
            direccion={usuario.direccion}
            ruta={usuario.ruta}
            tarjeta={usuario.tarjeta}
            exp={usuario.exp}
            cvv={usuario.cvv}
          />
        )}
      </main>
      {!servProv && <MostrarServ />}
      {servProv && <ServiciosProveedor cerrar={quitarServiciosProv} id={usuario.id}/>}
    </div>
  );
}

export default App;

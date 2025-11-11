import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import MostrarServ from "./pages/MostrarServicios";
import ConfigUser from "./components/Usuario/ConfigUser";
import { PiGearFill } from "react-icons/pi";
function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [configUser, setConfigUser] = useState(false);
  const usuarioLogeado = () => {
    setUserLogged(true);
  };
  const usuarioDatos = (datos) => {
    setUsuario(datos);
    localStorage.setItem("usuario", JSON.stringify(datos));
  };
  const mostrarConfig = () => setConfigUser(true);
  const quitarConfig = () => setConfigUser(false);
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
            <h3>Bienvenido {usuario.nombre}</h3>
            <button className="btn" onClick={mostrarConfig}>
              <PiGearFill size={20} />
            </button>
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
            ruta={usuario.img}
          />
        )}
      </main>

      <MostrarServ></MostrarServ>
    </div>
  );
}

export default App;

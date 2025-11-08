import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import MostrarServ from "./pages/MostrarServicios";

function App() {
  const [userLogged, setUserLogged] = useState(false);
  const [usuario, setUsuario] = useState(null);

  const usuarioLogeado = () => {
    setUserLogged(true);
  };
  const usuarioDatos = (datos) => {
    setUsuario(datos);
    localStorage.setItem("usuario", JSON.stringify(datos));
  };
  return (
    <div>
      <header className="header">
        <div className="titulo-header">
          <h1>Servi-Ya</h1>
        </div>
        {!userLogged && <LoginPage userLog={usuarioLogeado} usuario={usuarioDatos}></LoginPage>}
        {userLogged && (
          <div>
            <h2>Hola</h2>
          </div>
        )}
      </header>
      <main className="main">
        <div>
          BLANK
        </div>
        <div></div>
      </main>

      <MostrarServ></MostrarServ>
    </div>
  );
}

export default App;

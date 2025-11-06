import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import MostrarServ from "./pages/MostrarServicios";

function App() {
  const [userLogged, setUserLogged] = useState(false);

  const usuarioLogeado = () => {
    setUserLogged(true);
  };
  return (
    <div>
      <header className="header">
        <div className="titulo-header">
          <h1>Servi-Ya</h1>
        </div>
        {!userLogged && <LoginPage userLog={usuarioLogeado}></LoginPage>}
        {userLogged && (
          <div>
            <h2>Hola</h2>
          </div>
        )}
      </header>

      <MostrarServ></MostrarServ>
    </div>
  );
}

export default App;

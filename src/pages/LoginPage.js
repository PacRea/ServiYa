import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../components/Login/login.js";
import SignUp from "../components/Login/signup.js";
import "../App.css";

function LoginPage({ userLog, usuario}) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const abrirLogin = () => {
    setShowLogin(true);
  };
  const cerrarLogin = () => {
    setShowLogin(false);
  };

  const abrirSignUp = () => setShowSignUp(true);

  const cerrarSignUp = () => setShowSignUp(false);

  return (
    <div className="contenido-login-page">
      <div className="contenedor-botones-header">
        <button className="btn btn-login" onClick={abrirLogin}>
          Iniciar Sesión
        </button>
        <button className="btn btn-signup" onClick={abrirSignUp}>
          Crear Cuenta
        </button>
      </div>

      <div></div>
      {showLogin && (
        <div>
          <Login alCerrarLogin={cerrarLogin} userLogin={userLog} usuarioDatos={usuario}/>
        </div>
      )}
      {showSignUp && <SignUp alCerrar={cerrarSignUp} />}
    </div>
  );
}

export default LoginPage;

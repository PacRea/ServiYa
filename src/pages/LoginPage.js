import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../components/Login/login.js";
import SignUp from "../components/Login/signup.js";

function LoginPage() {
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
    <div>
      <header className="header">
        <button onClick={abrirLogin}>Iniciar Sesión</button>
      </header>
    <div>
        
    </div>
      {showLogin && (
        <div>
          <Login alCerrarLogin={cerrarLogin} />
        </div>
      )}
          <div>
            <button onClick={abrirSignUp}>Crear Cuenta</button>
          </div>
      {showSignUp && <SignUp alCerrar={cerrarSignUp} />}
    </div>
  );
}

export default LoginPage;

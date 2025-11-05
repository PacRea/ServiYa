import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import MostrarServ from "./pages/MostrarServicios";

function App() {
 
  const userLogged = false;
  return (
    <div>

    <header>
      <LoginPage></LoginPage>
    </header>
    
      <MostrarServ></MostrarServ>
    
    </div>
  );
}

export default App;

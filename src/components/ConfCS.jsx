function Confirmacion({ confirmar, cerrar }) {
  return (
    <div className="modal">
      <div className="contenido-modal">
        <div className="cerra-titulo">
        <h4>Esta apunto de cerrar sesión, ¿Esta seguro?</h4>
        </div>
        <div className="btns-sesion">
          <button className="btn" onClick={confirmar}>
            Si
          </button>
          <button className="btn" onClick={cerrar}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmacion;

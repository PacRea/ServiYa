import "../../App.css";

function ModificarServicio({

    id_prov,
    nombre,
    ciudad,
    direccion,
    telefono,
    id_serv,
    nom_serv,
    desc,
    cat,
    precio,
    cerrarIndv,
    abrirList
}
) {
    return(
        <div className="modal">
            <div className="contenido-modal">
                <div className="inputs-modificar">
                <input defaultValue={id_prov}></input>
                <input defaultValue={nombre}></input>
                <input defaultValue={ciudad}></input>
                <input defaultValue={direccion}></input>
                <input defaultValue={telefono}></input>
                <input defaultValue={id_serv}></input>
                <input defaultValue={nom_serv}></input>
                <input defaultValue={desc}></input>
                <input defaultValue={cat}></input>
                <input defaultValue={precio}></input>
                </div>
            <button onClick={cerrarIndv}>Cerrar</button>
            </div>

        </div>
    );
}
export default ModificarServicio;

import {useState} from 'react';
import SubirImagen from '../SubirImg';

function ConfigUser({quitarConfig, id, tipo, nombre, fecha, correo, telefono, ciudad, direccion}){
    const [url, setUrl] = useState(null);
    return(
        <div>
            <div>
                <p>{id}</p>
                <p>{tipo}</p>
                <p>{nombre}</p>
                <p>{fecha}</p>
                <p>{correo}</p>
                <p>{telefono}</p>
                <p>{ciudad}</p>
                <p>{direccion}</p>
            </div>
            <button onClick={quitarConfig}>Cerrar</button>
        </div>
    );
}

export default ConfigUser;
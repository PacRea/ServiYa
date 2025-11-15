import { useState, useEffect, use } from "react";

function SubirImagen({ tipoOp, id }) {
  const [imagen, setImagen] = useState(null);
  const [loading, setLoading] = useState(false); // Estado de carga
  const [message, setMessage] = useState(""); // Estado para mensajes

  const urlUser = "http://192.168.100.109/backend_proveedores/api/img_user.php";
  const urlSrv = "http://192.168.100.109/backend_proveedores/api/img_serv.php";

  const getDbRequestData = (url) => {
    if (tipoOp === "servicio") {
      return {
        endpoint: urlSrv,
        body: { id_serv: id, url },
      };
    }
    return {
      endpoint: urlUser,
      body: { tipo: tipoOp, id, url },
    };
  };

  const subir = async (e) => {
    e.preventDefault();
    if (!imagen) return;

    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("imagen", imagen);

    try {
      // --- Subir archivo ---
      const res = await fetch(
        "http://192.168.100.109/backend_proveedores/api/subir_imagen.php",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok)
        throw new Error("Error al comunicar con el servidor (subida).");

      const data = await res.json().catch(() => {
        throw new Error("La respuesta del servidor no fue JSON válido.");
      });

      if (data.status !== "ok") {
        throw new Error(data.mensaje || "No se pudo subir la imagen.");
      }

      // --- Guardar URL en BD ---
      const { endpoint, body } = getDbRequestData(data.url);

      const resDB = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!resDB.ok)
        throw new Error("Error al comunicar con el servidor (DB).");

      const dbData = await resDB.json().catch(() => {
        throw new Error("La respuesta de la BD no es JSON válido.");
      });

      if (dbData.status !== "success") {
        throw new Error(dbData.message || "No se pudo actualizar la BD.");
      }

      setMessage("Imagen actualizada con éxito 🎉");

      // Limpiar todo
      setImagen(null);
    } catch (err) {
      console.error(err);
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contenedor-datos">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          setImagen(e.target.files[0]);
          setMessage(""); // Limpiar mensaje si el usuario cambia de imagen
        }}
        disabled={loading} // Deshabilitar mientras se sube
      />
      <button onClick={subir} disabled={!imagen || loading}>
        {loading ? "Subiendo..." : "Subir imagen"}
      </button>

      {/* Mostrar mensajes de estado o error aquí */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default SubirImagen;

import { useState } from "react";

function SubirImagen({ tipoUser, idUser }) {
  const [imagen, setImagen] = useState(null);
  const urlApi = "http://serviya.local/api/img_user.php";

  const subir = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("imagen", imagen);

    try {
      const res = await fetch("http://serviya.local/api/subir_imagen.php", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.status === "ok") {
        alert("Imagen subida con éxito");
        console.log("URL:", data.url);

        const datos = {
          tipo: tipoUser,
          url: data.url,
          id: idUser,
        };
        console.log(JSON.stringify(datos));

        const upImg = await fetch(urlApi, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos),
        });
        const resDB = await upImg.json();
        console.log("Respuesta de img_user.php:", resDB);

        if (resDB.status === "success") {
          alert("Imagen guardada en la base de datos 🎉");
        } else {
          alert("Error al guardar en DB: " + resDB.message);
        }
      } else {
        alert("Error: " + data.mensaje);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="contenedor-datos">
      <form className="" onSubmit={subir}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImagen(e.target.files[0])}
        />
        <button type="submit">Subir imagen</button>
      </form>
    </div>
  );
}

export default SubirImagen;
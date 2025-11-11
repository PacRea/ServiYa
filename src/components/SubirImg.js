import { useState } from "react";

function SubirImagen({ tipo, id }) {
  const [imagen, setImagen] = useState(null);
  const [secureUrl, setSecureUrl] = useState("");
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
        setSecureUrl(data.url);
        console.log("URL:", data.url);
        const datos = {
          tipo: tipo,
          url: data.url,
          id: id,
        };
        const upImg = await fetch(urlApi, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        });

        if(upImg.status === "ok"){
          console.log("Imagen en la db");
        }
      } else {
        alert("Error: " + data.mensaje);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const subirImgDB = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch();
    } catch (err) {
      console.log(err);
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

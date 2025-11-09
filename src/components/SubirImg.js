import { useState } from "react";

function SubirImagen() {
  const [imagen, setImagen] = useState(null);

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
      } else {
        alert("Error: " + data.mensaje);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={subir}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImagen(e.target.files[0])}
      />
      <button type="submit">Subir imagen</button>
    </form>
  );
}

export default SubirImagen;
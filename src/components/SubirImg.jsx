import { useState, useEffect } from "react";

function SubirImagen({ tipoOp, id}) {
  const [imagen, setImagen] = useState(null);
  const urlUser = "http://DESKTOP-2H2VHH5/api/img_user.php";
  const urlSrv = "http://DESKTOP-2H2VHH5/api/img_serv.php";
  useEffect(() => {
    alert(`Usted subira la imagena a ${tipoOp}`)
  }, [tipoOp]);
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
        
        if (tipoOp === "servicio") {
          const datoServ = {
            url: data.url,
            id_serv: id,
          }
          const upImg = await fetch(urlSrv, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datoServ),
          });
          const resDB = await upImg.json();
          console.log("Respuesta de img_user.php:", resDB);

          if (resDB.status === "success") {
            alert("Imagen guardada en la base de datos 🎉");
          } else {
            alert("Error al guardar en DB: " + resDB.message);
          }
        } else {
          const datos = {
            tipo: tipoOp,
            url: data.url,
            id: id,
          };

          const upImg = await fetch(urlUser, {
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

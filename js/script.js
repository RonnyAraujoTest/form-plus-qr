form.addEventListener("submit", (e) => {
  if (ValidarTelefono()) {
    e.preventDefault();
  } else {
    e.preventDefault();
  }
});

function ValidarTelefono() {
  var data = {
    Nombres: window.nombres.value,
    Apellidos: window.apellidos.value,
    Empresa: window.empresa.value,
    Telefono: window.telefono_m.value,
    Correo: window.email_personal.value,
  };
  var teleMovil = document.getElementById("telefono_m").value;
  var patronTele = /^\d{3}\-\d{3}\-\d{4}$/;

  if (teleMovil.match(patronTele)) {
    generarQR(data);
    return true;
  } else return false;
}

function generarQR(Data) {
  let img = document.querySelector("img");
  let servicio = "https://quickchart.io/qr";
  var datos = `BEGIN:VCARD\nVERSION:3.0\nN:${Data.Nombres};${Data.Apellidos}\nORG:${Data.Empresa}\nTEL:${Data.Telefono}\nEMAIL:${Data.Correo}\nEND:VCARD`;

  img.src = `${servicio}?text=` + encodeURIComponent(datos);
  console.log(img.src);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Generar();
});

function Generar() {
  var data = {
    version: "3.0",
    firstName: window.nombres.value,
    lastName: window.apellidos.value,
    organization: window.empresa.value,
    cellPhone: window.telefono_m.value,
    email: window.email_personal.value,
  };

  console.log(data);
  var teleMovil = document.getElementById("telefono_m").value;
  var patronTele = /^\d{3}\-\d{3}\-\d{4}$/;

  if (teleMovil.match(patronTele)) {
    window.div_qr.innerHTML = qrCode.createVCardQr(data, {
      typeNumber: 15,
      cellSize: 3,
    });
  }
}

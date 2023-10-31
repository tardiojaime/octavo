// script.js
var btn_submit = document.getElementById("btn_submit");
var form = document.getElementById("registration-form");
var espera = document.getElementById("espera");
var listo = document.getElementById("listo");
var carrera = document.getElementById("Carrera");
var carrera_c = document.getElementById("carrera_c");
var selec_carrera = document.getElementById("select_carrera");
var selec_curso = document.getElementById("selec_curso");
var hora = document.getElementById("hora");
const fecha = () => {
  const fechaActual = new Date();
  let horaFormateada = fechaActual + "";
  return horaFormateada.substring(4, 24);
};
hora.value = fecha();
console.log(fecha());
form.addEventListener("submit", function (event) {
  event.preventDefault();
  btn_submit.textContent = "enviando...";
  let carrera = selec_carrera.value !== "." || selec_curso.value !== ".";
  if (carrera) {
    btn_submit.disabled = true;
    espera.classList.remove("d-none");
    const formData = new FormData(this);
    const url =
      "https://script.google.com/macros/s/AKfycbyMWgl3GxE-D1aR1-bpCzRLUf_RrIuSdygZ8KkFcBm3RJPPXECGDnv41-sMpb6t54FJCA/exec";
    fetch(url, { method: "POST", body: formData })
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json();
      })
      .then((res) => {
        espera.classList.add("d-none");
        listo.classList.remove("d-none");
        btn_submit.textContent = "Enviado";
        btn_submit.disabled = false;
      })
      .catch((error) => console.log(" Error: " + error.message));
  } else {
    selec_carrera.focus();
    selec_carrera.click();
  }
});

// script.js
var btn_submit = document.getElementById("btn_submit");
var form = document.getElementById("registration-form");
var espera = document.getElementById("espera");
var listo = document.getElementById("listo");
var carrera = document.getElementById("Carrera");
var carrera_c = document.getElementById("carrera_c");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  btn_submit.disabled = true;
  btn_submit.textContent = "...";
  espera.classList.remove("d-none");
  const formData = new FormData(this);
  const url =
    "https://script.google.com/macros/s/AKfycbwzbV5EH25GK4FISI6LqvFr4a1A0f-DSEgAos6-R4fi-pInPzlxlm9n5jwfPuGHhVHMLw/exec";
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
    })
    .catch((error) => console.log(" Error: " + error.message));
});
function guardar() {
  espera.classList.add("d-none");
  listo.classList.remove("d-none");
  btn_submit.textContent = "Enviado";
}
function ruta(sms) {
  let numero = 59172871823;
  const ruta = `https://api.whatsapp.com/send?phone=+${numero}&text=${sms}`;
  return ruta;
}
document.getElementById("wa-me").addEventListener("click", function (e) {
  e.preventDefault();
  let sms = "Hola, deseo reservar un curso:";
  window.open(ruta(sms), "_blank");
});
var cursos = [
  "Axiliar Contable",
  "Diseño y programación de videojuegos",
  "Ofimática",
  "Electrónica y reparación de computadores y celulares",
  "Diseño gráfico publicitario",
];

var modal_img = document.getElementById("modal_img");
var modal = document.getElementById("exampleModal");
var btn_wha = document.getElementById("btn-wha");
function modals(e) {
  let img = e.getAttribute("content");
  modal_img.src = img;
  let curs = e.getAttribute("curso");
  btn_wha.setAttribute("sms", cursos[curs]);
}
function porcurso(e) {
  let sms = e.getAttribute("sms") + ".";
  window.open(ruta("Hola, deseo reservar el curso: " + sms), "_blank");
}

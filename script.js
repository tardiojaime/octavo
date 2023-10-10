// script.js
var form = document.getElementById("registration-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const curso = document.getElementById("curso").value;

  // Aquí puedes agregar código para procesar los datos del formulario, como enviarlos a un servidor o mostrar un mensaje de confirmación.

  const formData = new FormData(this);
  formData.forEach(function (valor, clave) {
    console.log(clave + ": " + valor);
  });
  const url =
    "https://script.google.com/macros/s/AKfycbwkRBlV6yfZQo7pOwe6KiYo22qmA17ICjbJj48tv3okzW9jtzHptndqk3jW6mGBV0Q/exec";
  fetch(url, { method: "POST", body: formData })
    .then((response) => console.log(response.json()))
    .catch((error) => console.log(" Error: " + error.message));
});
window.addEventListener("load", () => {
  const anniversaryHeading = document.getElementById("anniversary-heading");
  anniversaryHeading.classList.add("typing-animation");
});

// script.js
var form = document.getElementById("registration-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Aquí puedes agregar código para procesar los datos del formulario, como enviarlos a un servidor o mostrar un mensaje de confirmación.

  const formData = new FormData(this);
  formData.forEach(function (valor, clave) {
    console.log(clave + ": " + valor);
  });
  const url =
    "https://script.google.com/macros/s/AKfycbwzbV5EH25GK4FISI6LqvFr4a1A0f-DSEgAos6-R4fi-pInPzlxlm9n5jwfPuGHhVHMLw/exec";
  fetch(url, { method: "POST", body: formData })
    .then((response) => console.log(response.json()))
    .catch((error) => console.log(" Error: " + error.message));
});
window.addEventListener("load", () => {
  const anniversaryHeading = document.getElementById("anniversary-heading");
  anniversaryHeading.classList.add("typing-animation");
});

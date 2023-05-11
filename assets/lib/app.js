"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log("🟢 Connected!");

var formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  var data = new FormData(formulario);
  var dataObjeto = Object.fromEntries([].concat(_toConsumableArray(data.entries())));

  var nombre = dataObjeto.nombre,
      apellido = dataObjeto.apellido,
      email = dataObjeto.email,
      motivo = dataObjeto.motivo,
      mensaje = dataObjeto.mensaje;


  if (!nombre.trim()) {
    alert("El campo nombre es obligatorio");
    document.querySelector("#nombre").focus();
    return;
  }

  if (!apellido.trim()) {
    alert("El campo apellido es obligatorio");
    document.querySelector("#apellido").focus();
    return;
  }

  if (!email.trim()) {
    alert("El campo email es obligatorio");
    document.querySelector("#email").focus();
    return;
  }

  if (!motivo.trim()) {
    alert("El campo motivo es obligatorio");
    document.querySelector("#motivo").focus();
    return;
  }

  if (!mensaje.trim()) {
    alert("El campo mensaje es obligatorio");
    document.querySelector("#mensaje").focus();
    return;
  }

  alert("DE: " + nombre + " " + apellido + " (" + email + ")\n\xBB ASUNTO: " + motivo + "\n\xBB MENSAJE:\n\xBB " + mensaje);
});
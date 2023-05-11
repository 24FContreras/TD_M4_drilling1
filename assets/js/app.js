console.log("🟢 Connected!");

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Enviando formulario");

  const data = new FormData(formulario);
  const dataObjeto = Object.fromEntries([...data.entries()]);

  const { nombre, apellido, email, motivo, mensaje } = dataObjeto;

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

  alert(`DE: ${nombre} ${apellido} (${email})
» ASUNTO: ${motivo}
» MENSAJE:
» ${mensaje}`);
});

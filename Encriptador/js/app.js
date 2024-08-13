const encriptado_texto = document.querySelector("#encriptado");
const copyButton = document.querySelector("#copyButton");
const $text_required = document.querySelector(".text-required");
const $text_alert = document.querySelector(".text-alert");
const $text_desencriptado = document.querySelector(".text-desencriptado");
const btn_encriptar = document.querySelector(".btn-encriptar");
const btn_desencriptar = document.querySelector(".btn-desencriptar");
const btn_copy_visibility = document.querySelector(".btn-copy");
const $btn_eraser = document.querySelector(".btn-eraser");
const img_encriptado = document.querySelector(".img-encriptado");
let memory_text = [];
let memory_upload = [];
let asignar = "";
let reasignar = "";

/*--------- Encriptar ------------- */

function encriptar() {
  limpiar();
  const encriptar_texto = document.querySelector("#ingresar").value;

  if (encriptar_texto == "") {
    $text_required.classList.add("required");
    $text_required.classList.remove("alert");
    $text_alert.classList.add("alert");
    setTimeout(() => {
      $text_required.classList.remove("required");
      $text_required.classList.add("alert");
      $text_alert.classList.remove("alert");
    }, 3000);
  }

  if (encriptar_texto !== "") {
    encriptado_texto.classList.remove("is-active")
    btn_copy_visibility.classList.remove("is-active");
    img_encriptado.classList.add("is-active");
    $text_desencriptado.classList.remove("alert");
  }

  for (let i = 0; i < encriptar_texto.length; i++) {
    console.log(encriptar_texto);
    if (encriptar_texto[i].toLowerCase() == "e") {
      memory_text.push("enter");
    } else if (encriptar_texto[i].toLowerCase() == "i") {
      memory_text.push("imes");
    } else if (encriptar_texto[i].toLowerCase() == "a") {
      memory_text.push("ai");
    } else if (encriptar_texto[i].toLowerCase() == "o") {
      memory_text.push("ober");
    } else if (encriptar_texto[i].toLowerCase() == "u") {
      memory_text.push("ufat");
    } else {
      memory_text.push(encriptar_texto[i].toLowerCase());
    }
  }

  function encriptado() {
    for (let i = 0; i < memory_text.length; i++) {
      asignar += memory_text[i];
      encriptado_texto.innerHTML = asignar;
    }
  }
  console.log(memory_text);
  encriptado();
}

/*--------- Desencriptar ------------- */

function desencriptar() {
  limpiar_encriptado();
  for (let i = 0; i < memory_text.length; i++) {
    if (memory_text[i] == "enter") {
      memory_upload.push("e");
    } else if (memory_text[i] == "imes") {
      memory_upload.push("i");
    } else if (memory_text[i] == "ai") {
      memory_upload.push("a");
    } else if (memory_text[i] == "ober") {
      memory_upload.push("o");
    } else if (memory_text[i] == "ufat") {
      memory_upload.push("u");
    } else {
      memory_upload.push(memory_text[i]);
    }
  }

  function desencriptado() {
    for (let i = 0; i < memory_upload.length; i++) {
      reasignar += memory_upload[i];
      encriptado_texto.innerHTML = reasignar;
    }
  }
  desencriptado();
}

/*--------- Copiar Portapapeles ------------- */

function copiarTexto() {
  const texto = encriptado_texto.innerText; // Obtiene el texto contenido en el elemento encriptado_texto
  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}

/*--------- Pre-limpiar ------------- */

function limpiar() {
  encriptado_texto.innerText = "";
  memory_text = [];
  asignar = "";
}

function limpiar_encriptado() {
  encriptado_texto.innerText = "";
  memory_upload = [];
  reasignar = "";
}


// const encriptar_texto = document.querySelector("#ingresar").value;
// function btnEraser() {

//   encriptar_texto.innerText="";
//   encriptado_texto.innerText = "";
//   memory_upload = [];
//   memory_text = [];
//   reasignar = "";
//   btn_copy_visibility.classList.remove("is-active-btn");
//   img_encriptado.classList.remove("is-active-img");
// }

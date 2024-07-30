let desencriptar_des = [];
let guardar = [];
let encriptado_texto = document.querySelector("#encriptado");

const encriptar = function () {
  let encriptar_texto = document.querySelector("#ingresar").value;
  let asignar = "";
  limpiar();
  for (let i = 0; i < encriptar_texto.length; i++) {
    console.log(encriptar_texto);
    if (encriptar_texto[i] == "e") {
      guardar.push("enter");
    } else if (encriptar_texto[i] == "i") {
      guardar.push("imes");
    } else if (encriptar_texto[i] == "a") {
      guardar.push("ai");
    } else if (encriptar_texto[i] == "o") {
      guardar.push("ober");
    } else if (encriptar_texto[i] == "u") {
      asignar = "ufat";
      guardar.push("ufat");
    } else {
      guardar.push(encriptar_texto[i]);
    }
  }
  console.log(guardar);

  function encriptado() {
    for (let i = 0; i < guardar.length; i++) {
      asignar += guardar[i];
      encriptado_texto.innerHTML = asignar;
    }
  }

  encriptado();
};

const desencriptar = function () {
  let asignar = "";
  for (let i = 0; i < guardar.length; i++) {
    if (guardar[i] == "enter") {
      desencriptar_des.push("e");
    } else if (guardar[i] == "imes") {
      desencriptar_des.push("i");
    } else if (guardar[i] == "ai") {
      desencriptar_des.push("a");
    } else if (guardar[i] == "ober") {
      desencriptar_des.push("o");
    } else if (guardar[i] == "ufat") {
      desencriptar_des.push("u");
    } else {
      desencriptar_des.push(guardar[i]);
    }
  }

  const desencriptado = function () {
    for (let i = 0; i < desencriptar_des.length; i++) {
      asignar += desencriptar_des[i];
      encriptado_texto.innerHTML = asignar;
    }
  };

  desencriptado();
};

const limpiar = function () {
  guardar = [];
  desencriptar_des=[];
};

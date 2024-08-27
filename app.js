let inputTexto = document.getElementById("inputTextoIngresado");
let imagen = document.getElementById("contenidoImagen");
let textoInformativo = document.getElementById("contenidoTexto");
let inputPresentacionTexto = document.getElementById("inputPresentacionTexto");



// Función para mostrar un elemento
function mostrarElemento(elemento) {
    elemento.classList.remove("oculto");
  }
  
  // Función para ocultar un elemento
  function ocultarElemento(elemento) {
    elemento.classList.add("oculto");
  }
  
  // Función para mostrar el texto inicial
  function mostrarTextoInicial() {
    mostrarElemento(imagen);
    mostrarElemento(mensajeInformativo); 
    ocultarElemento(inputPresentacionTexto);
    // asignarTextoElemento('',  <b>Ningún mensaje fue encontrado</b>)
    asignarTextoElemento('span', '<b>Ningún mensaje fue encontrado</b> \nIngresa el texto que desees encriptar o desencriptar.'); 
  }
  
  // Función para mostrar el texto encriptado/desencriptado
  function mostrarTextoEncriptado() {
    ocultarElemento(imagen);
    ocultarElemento(mensajeInformativo); 
    mostrarElemento(inputPresentacionTexto);
    inputPresentacionTexto.value = inputTexto.value;
  }
  
  // Función para manejar el evento 'input'
function validarInput() {
    let textoIngresado = inputTexto.value;

    if (textoIngresado === "") {
        mostrarTextoInicial();
    } else {
        // Muestra el texto encriptado/desencriptado
        mostrarTextoEncriptado(); 
    }
}

  // Función para manejar el evento 'keydown'
function validarTecla(event) {
    let teclaPresionada = event.key;
    let codigoTecla = event.keyCode;

    // Verifica si la tecla presionada es una letra minúscula sin acentos
    if (!((codigoTecla >= 65 && codigoTecla <= 90) || (codigoTecla >= 97 && codigoTecla <= 122))) {
        // Evita que la tecla se ingrese en el campo de texto
        event.preventDefault(); 
        // Muestra el mensaje de error
        asignarTextoElemento('#mensajeInformativo', 'solo se permiten letras minúsculas sin acentos ni caracteres especiales.');
    }
}
  
  // Función para asignar texto a un elemento
  function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
  }
  
// Inicializa las condiciones iniciales
mostrarTextoInicial();

// Agrega el evento 'keydown' al inputTexto
inputTexto.addEventListener("keydown", validarTecla);

// Agrega el evento 'input' al inputTexto
inputTexto.addEventListener("input", validarInput);
  
  // Asignar texto a los elementos HTML
  asignarTextoElemento('h1', 'Encriptador de Texto');
 

// Función para encriptar el texto 
function encriptarTexto() {
    let textoIngresado = inputTexto.value;
    let textoEncriptado = "";

    for (let i = 0; i < textoIngresado.length; i++) {
        let letra = textoIngresado[i];
        if (letra === "a") {
            textoEncriptado = textoEncriptado + "ai";
        } else {
            if (letra === "e") {
                textoEncriptado = textoEncriptado + "enter";
            } else {
                if (letra === "i") {
                    textoEncriptado = textoEncriptado + "imes";
                } else {
                    if (letra === "o") {
                        textoEncriptado = textoEncriptado + "ober";
                    } else {
                        if (letra === "u") {
                            textoEncriptado = textoEncriptado + "ufat";
                        } else {
                            textoEncriptado = textoEncriptado + letra;
                        }
                    }
                }
            }
        }
    }
    inputTexto.value = textoEncriptado;
    inputPresentacionTexto.value = textoEncriptado;
    console.log("el mensaje encriptado es:" + textoEncriptado);
}

//Función para desncriptar el texto
function desencriptarTexto() {
    let textoIngresado = inputTexto.value;
    let textoDesencriptado ="";
    
    for (let i = 0; i < textoIngresado.length; i++) {
        let letra = textoIngresado[i];
        if (letra === "a" && textoIngresado.substring(i, i + 2) === "ai") {
            textoDesencriptado += "a";
            i += 1;
        } else {
            if (letra === "e" && textoIngresado.substring(i, i + 5) === "enter") {
                textoDesencriptado += "e";
                i += 4;
            } else {
                if (letra === "i" && textoIngresado.substring(i, i + 4) === "imes") {
                    textoDesencriptado += "i";
                    i += 3;
                } else {
                    if (letra === "o" && textoIngresado.substring(i, i + 4) === "ober") {
                        textoDesencriptado += "o";
                        i += 3;
                    } else {
                        if (letra === "u" && textoIngresado.substring(i, i + 4) === "ufat") {
                            textoDesencriptado += "u";
                            i += 3;
                        } else {
                            textoDesencriptado += letra;
                        }
                    }
                }
            }
        }
    }
    inputTexto.value = textoDesencriptado;
    inputPresentacionTexto.value = textoDesencriptado;
    console.log("el mensaje desencriptado es:" + textoDesencriptado);
}


function copiarTexto() {
    navigator.clipboard.writeText(inputPresentacionTexto.value)
    .then(()=>{
        // Copia el contenido de la caja de texto
        alert("Texto copiado con exito");

        // Si el mensaje fue copiado, limpia la caja de texto
        inputPresentacionTexto.value = ''; 
        inputTexto.value = ''; 
    })
    .catch(err =>{
        // Si el contenido no fue copiado, muestra un mensaje de error
        console.error("Error al copiar: ", err);
        alert("No se pudo copiar el texto al. Intenta de nuevo más tarde.");
    })
}
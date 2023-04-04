let inputTexto;
let outputTexto;


function encriptar(texto) {
  return texto.replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

function desencriptar(texto) {
  return texto.replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

function obtenerInput() {
  inputTexto = document.getElementById("input__entrada").value;
}
function ocultarParrafos() {
    document.querySelector("#parrafos").style.display = "none";
}
function mostrarParrafos() {
    document.querySelector("#parrafos").style.display = "block";
}

function mostrarEncriptado() {
    document.getElementById("mi_textareados").style.backgroundImage = "none";
    outputTexto = encriptar(inputTexto);
    document.getElementById("mi_textareados").innerHTML = outputTexto;
    ocultarParrafos();
}

function mostrarDesencriptado() {
  outputTexto = desencriptar(inputTexto);
  document.getElementById("mi_textareados").innerHTML = outputTexto;
  document.getElementById("mi_textareados").style.backgroundImage = "none"
  ocultarParrafos();
}

function copiarEncriptado(){
    let copyTexto = document.querySelector("#mi_textareados").textContent;      
    navigator.clipboard.writeText(copyTexto)
    document.querySelector('#mi_textareados').textContent = ""
    document.getElementById("mi_textareados").style.backgroundImage = "";
    mostrarParrafos();
}                

document.querySelector("#botonCopiar").addEventListener("click", copiarEncriptado)
document.getElementById("input__entrada").oninput = obtenerInput;
document.getElementById("encriptar-button").onclick = mostrarEncriptado;
document.getElementById("desencriptar-button").onclick = mostrarDesencriptado;

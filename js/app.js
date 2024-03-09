function validarTexto(texto) {
    
    if (texto.trim() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Por favor, ingresa un texto antes de continuar.',
        });
        return false;
    }

    
    if (texto !== texto.toLowerCase()) { 
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Por favor, ingresa solo letras minúsculas sin acentos.',
        });
        return false;
    }

    
    if (/[ÁÉÍÓÚÜáéíóúü]/.test(texto)) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Por favor, ingresa solo letras sin acentos.',
        });
        return false;
    }

    return true;
}

function encriptarTexto() {
    var texto = document.getElementById("caja-texto").value.toLowerCase();
    if (!validarTexto(texto)) {
        return;
    }
    
    var resultado = texto;
    resultado = resultado.replace(/e/g, "enter");
    resultado = resultado.replace(/i/g, "imes");
    resultado = resultado.replace(/a/g, "ai");
    resultado = resultado.replace(/o/g, "ober");
    resultado = resultado.replace(/u/g, "ufat");
    mostrarResultado(resultado);
    mostrarMensajeExito("Texto encriptado con éxito");
}

function desencriptarTexto() {
    var texto = document.getElementById("caja-texto").value.toLowerCase();
    if (!validarTexto(texto)) {
        return;
    }
    var resultado = texto;
    resultado = resultado.replace(/enter/g, "e");
    resultado = resultado.replace(/imes/g, "i");
    resultado = resultado.replace(/ai/g, "a");
    resultado = resultado.replace(/ober/g, "o");
    resultado = resultado.replace(/ufat/g, "u");
    mostrarResultado(resultado);
    mostrarMensajeExito("Texto desencriptado con éxito");
}

function mostrarResultado(resultado) {
    var mostrarResultado = document.querySelector(".mostrar-resultado");
    mostrarResultado.innerHTML = "";

    var mensaje = document.createElement("p");
    mensaje.textContent = resultado;
    mostrarResultado.appendChild(mensaje);

    var botonCopiar = document.createElement("button");
    botonCopiar.textContent = "Copiar";
    botonCopiar.className = "copiar";
    botonCopiar.onclick = function() {
        copiarResultado(resultado);
    };
    mostrarResultado.appendChild(botonCopiar);
}

function copiarResultado(resultado) {
    navigator.clipboard.writeText(resultado).then(function() {
        mostrarMensajeExito("¡Texto copiado!");
    }).catch(function() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error al copiar el texto',
        });
    });
}

function mostrarMensajeExito(mensaje) {
    Swal.fire({
        icon: 'success',
        title: mensaje,
        timer: 1500, 
        showConfirmButton: false 
    });
}

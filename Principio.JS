function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    if (nombre.trim() === '' || correo.trim() === '' || contrasena.trim() === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return false;
    }
    // Agrega más validaciones según tus necesidades.
    return true;
}

// Habilitar el botón de envío cuando todos los campos estén llenos
document.addEventListener('input', function() {
    const botonEnvio = document.getElementById('boton-envio');
    const camposLlenos = nombre.value.trim() !== '' && correo.value.trim() !== '' && contrasena.value.trim() !== '';
    botonEnvio.disabled = !camposLlenos;
});

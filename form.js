function validarFormulario() {
    const carreraValida = validarCarrera();
    const numeroControlValido = validarNumeroControl();

    if (carreraValida && numeroControlValido) {
        document.getElementById('success-message').innerText = "Formulario enviado con éxito.";
        return false; // Previene el envío del formulario para mostrar el mensaje de éxito
    } else {
        document.getElementById('success-message').innerText = "";
        return false; // Previene el envío del formulario en caso de error
    }
}
function validarCarrera() {
    const carrera = document.getElementById('carrera').value;
    const carreraErrorMessage = document.getElementById('carrera-error'); // Mensaje específico para la carrera

    if (carrera === "") {
        carreraErrorMessage.innerText = "Por favor, selecciona una carrera válida.";
        return false;
    }
    
    carreraErrorMessage.innerText = ""; // Limpiar mensaje de error si es válido
    return true;
}

function validarNumeroControl() {
    const numeroControl = document.getElementById('nocontrol').value;
    const numeroControlErrorMessage = document.getElementById('nocontrol-error'); // Mensaje específico para el número de control

    const regex = /^2[0-9]84[0-9]{4}$/;
    
    if (!regex.test(numeroControl)) {
        numeroControlErrorMessage.innerText = "Numero de control no valido";
        return false;
    }
    
    numeroControlErrorMessage.innerText = ""; // Limpiar mensaje de error si es válido
    return true;
}

document.getElementById('numero').addEventListener('input', function (e) {
    const input = e.target;
    const value = input.value;

    // Validar si el valor contiene solo números y si tiene 10 dígitos
    if (!/^\d{10}$/.test(value)) {
        input.setCustomValidity('El número debe contener exactamente 10 dígitos numéricos');
    } else {
        input.setCustomValidity('');  // Limpiar el mensaje de error si la validación es correcta
    }
});

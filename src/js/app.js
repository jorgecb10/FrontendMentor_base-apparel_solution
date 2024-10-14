document.addEventListener('DOMContentLoaded', function() {
    console.log('el documento está listo');
    const mensaje = document.querySelector('#mensaje');
    const emailInput = document.querySelector('#email');
    const formulario = document.querySelector('#formulario');

    formulario.addEventListener('submit', validar);

    function validar(e) {
        e.preventDefault();
        
        if (emailInput.value.trim() !== '') {
            mensaje.textContent = '';
            mostrarAlerta();
        } else {
            mostrarMensajeError('El correo no puede estar vacío');
        }
    }

    function mostrarAlerta() {
        if (validarEmail(emailInput.value)) {
            mensaje.classList.add('formulario__mensaje-correcto');
            mensaje.textContent = 'Correo enviado correctamente';
            setTimeout(() => {
                mensaje.classList.remove('formulario__mensaje-correcto');
                mensaje.textContent = '';
                formulario.reset();
            }, 3000);
        } else {
            mostrarMensajeError('Ingresa un correo válido');
        }
    }

    function mostrarMensajeError(texto) {
        emailInput.classList.add('formulario__input-error');
        mensaje.classList.add('formulario__mensaje-error');
        mensaje.textContent = texto;

        setTimeout(() => {
            emailInput.classList.remove('formulario__input-error');
            mensaje.classList.remove('formulario__mensaje-error');
            mensaje.textContent = '';
        }, 3000);
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    }
});

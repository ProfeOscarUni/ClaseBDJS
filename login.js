document.getElementById('loginForm').addEventListener('submit',function name(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMensaje = document.getElementById('errorMensaje');

    if (username === ''|| password === '') {
        errorMensaje.textContent = "Los campos deben estar diligenciados";
        return;
    }
    if (username !== 'Oscar'|| password !== '1234') {
        errorMensaje.textContent = "Usuario o contraseña invalidos";
        return;
    }

    errorMensaje.textContent = "Validación exitosa";
    window.location.href='administrador.html';
    errorMensaje.style.color = "red";
});
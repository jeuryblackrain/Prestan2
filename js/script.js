document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    if (username === "admin" && password === "1234") {
        alert("Bienvenido a Prestan2");
        window.location.href = "portal.html";
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
});



function abrirFormulario() {
    document.getElementById("userForm").style.display = "block";
}

function cerrarFormulario() {
    document.getElementById("userForm").style.display = "none";
}

function guardarUsuario() {
    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const registerDate = document.getElementById("registerDate").value;
    
    const newUserRef = db.ref("usuarios").push();
    newUserRef.set({
        nombre: fullName,
        usuario: username,
        contraseña: password,
        telefono: phone,
        email: email,
        fechaRegistro: registerDate
    }, (error) => {
        if (error) {
            alert("Error al guardar usuario");
        } else {
            alert("Usuario guardado exitosamente");
            cerrarFormulario();
        }
    });
}

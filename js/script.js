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

//Botn Usuario
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

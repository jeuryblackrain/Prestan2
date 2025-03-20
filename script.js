document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username === "admin" && password === "1234") {
        alert("Bienvenido a Prestan2");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").textContent = "Usuario o contraseña incorrectos";
    }
});

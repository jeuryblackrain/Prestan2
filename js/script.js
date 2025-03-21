// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Configuración de Firebase (importada desde firebase-config.js)
import { firebaseConfig } from "../Database/firebase-config.js";

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Función para guardar usuario en un directorio específico (Ejemplo: "usuarios")
function guardarUsuario() {
    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const registerDate = document.getElementById("registerDate").value;

    if (fullName && username && password && phone && email && registerDate) {
        const usersRef = ref(db, "usuarios/"); // Directorio específico dentro de la base de datos
        const newUserRef = push(usersRef);

        set(newUserRef, {
            fullName,
            username,
            password,
            phone,
            email,
            registerDate
        })
        .then(() => {
            alert("Usuario guardado correctamente");
            cerrarFormulario();
        })
        .catch((error) => {
            console.error("Error al guardar el usuario:", error);
        });
    } else {
        alert("Todos los campos son obligatorios");
    }
}

// Función para cerrar el formulario
function cerrarFormulario() {
    document.getElementById("userForm").style.display = "none";
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";


<script>
    const firebaseConfig = {
          apiKey: "AIzaSyAoR5nIZScneP9wNnzbveqXFxcSMhdF4_U",
          authDomain: "prestan2-6059e.firebaseapp.com",
          databaseURL: "https://prestan2-6059e-default-rtdb.firebaseio.com",
          projectId: "prestan2-6059e",
          storageBucket: "prestan2-6059e.firebasestorage.app",
          messagingSenderId: "758979429000",
          appId: "1:758979429000:web:46133ec0e3a8bf628b553d"
    };
  

  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

   console.log("Firebase conectado correctamente");

</script>




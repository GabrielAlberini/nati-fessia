// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyAcI2Ga1F6c3p1jzxwHQfeRE3-RD7AnS7Q",
  authDomain: "natifessia.firebaseapp.com",
  projectId: "natifessia",
  storageBucket: "natifessia.appspot.com",
  messagingSenderId: "36839327892",
  appId: "1:36839327892:web:0e88688435edd548e34c81",
  measurementId: "G-LE70702VJ5"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;

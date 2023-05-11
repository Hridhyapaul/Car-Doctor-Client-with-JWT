// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrF0bg77d8Py29PYAN_MTgU7jzUTZCzvc",
  authDomain: "car-doctor-aef2d.firebaseapp.com",
  projectId: "car-doctor-aef2d",
  storageBucket: "car-doctor-aef2d.appspot.com",
  messagingSenderId: "562876982043",
  appId: "1:562876982043:web:42cf6d4ab586dc0978a9be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
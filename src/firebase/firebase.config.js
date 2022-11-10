// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuYfbTZ1cJd-1h2gffYI7JNiLFf9-XA_c",
    authDomain: "bicycles-service.firebaseapp.com",
    projectId: "bicycles-service",
    storageBucket: "bicycles-service.appspot.com",
    messagingSenderId: "345626098676",
    appId: "1:345626098676:web:2f9bd5c714d4808c4c57a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
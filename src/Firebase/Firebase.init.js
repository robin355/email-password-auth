// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnsedGG-y_VZhX8vMJghY5RtHe6phZbfk",
    authDomain: "email-password-auth-c83c2.firebaseapp.com",
    projectId: "email-password-auth-c83c2",
    storageBucket: "email-password-auth-c83c2.appspot.com",
    messagingSenderId: "583319635703",
    appId: "1:583319635703:web:058a18bb08d245274ef5f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
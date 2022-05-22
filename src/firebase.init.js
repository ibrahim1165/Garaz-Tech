// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Yi31GNhLi61m9FMYAkx6e0JYlCfhvCM",
  authDomain: "garage-tech-2.firebaseapp.com",
  projectId: "garage-tech-2",
  storageBucket: "garage-tech-2.appspot.com",
  messagingSenderId: "419532993903",
  appId: "1:419532993903:web:d25cce189f1f38973e249a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
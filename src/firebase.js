// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP4s-Elbn9Ux-XQiul2rm28x444-BI8OU",
  authDomain: "airbnb-clone-reactjs-51aa1.firebaseapp.com",
  projectId: "airbnb-clone-reactjs-51aa1",
  storageBucket: "airbnb-clone-reactjs-51aa1.appspot.com",
  messagingSenderId: "1004248042394",
  appId: "1:1004248042394:web:a43c9178cce14e36f10823",
  measurementId: "G-TPW1SRP0QD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
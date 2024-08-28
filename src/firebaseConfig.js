// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn0VjGFK6aHPJCHQlJlo0RlOLYtmlt6mI",
  authDomain: "student-management-syste-f4e5c.firebaseapp.com",
  projectId: "student-management-syste-f4e5c",
  storageBucket: "student-management-syste-f4e5c.appspot.com",
  messagingSenderId: "252876718949",
  appId: "1:252876718949:web:ccf46286dd294f7814178c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
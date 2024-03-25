// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp2nTvST1KQKy-rAGx2Y0Rbw_B4flZ_Qs",
  authDomain: "chatweb-362b9.firebaseapp.com",
  projectId: "chatweb-362b9",
  storageBucket: "chatweb-362b9.appspot.com",
  messagingSenderId: "162002595153",
  appId: "1:162002595153:web:5fce82522be3806df3b770",
  measurementId: "G-KMYHP4F0BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{auth, app}
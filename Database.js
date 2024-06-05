// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClQLZ3a-hd5D3DSY9B-ICvj4MoMn6T_l8",
  authDomain: "delivery-app-5148a.firebaseapp.com",
  projectId: "delivery-app-5148a",
  storageBucket: "delivery-app-5148a.appspot.com",
  messagingSenderId: "677114953662",
  appId: "1:677114953662:web:70608e0096a0b9becd03ef",
  measurementId: "G-LG2R9QSQ57"
};

// Initialize Firebase

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};
export const auth = firebase.auth();
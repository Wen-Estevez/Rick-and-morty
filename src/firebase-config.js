import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvVEQe4uVQYkwSbcz-cWH_XQBwBdOUpp0",
  authDomain: "apprickmorty.firebaseapp.com",
  projectId: "apprickmorty",
  storageBucket: "apprickmorty.appspot.com",
  messagingSenderId: "882445082310",
  appId: "1:882445082310:web:925a77eaf25283726981c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
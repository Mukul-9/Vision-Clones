import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXKqcmM8k-UCbKaP4EgGzgKqvDMK0JsdA",
  authDomain: "twitter-vision-clone.firebaseapp.com",
  databaseURL: "https://twitter-vision-clone.firebaseio.com",
  projectId: "twitter-vision-clone",
  storageBucket: "twitter-vision-clone.appspot.com",
  messagingSenderId: "649267402609",
  appId: "1:649267402609:web:275c0a122c6df407d148d0",
  measurementId: "G-2Y11NP0LDC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2lsXn_xdAZvzzXfLt7kaGhmrEuSovVOE",
  authDomain: "vision-clone.firebaseapp.com",
  databaseURL: "https://vision-clone.firebaseio.com",
  projectId: "vision-clone",
  storageBucket: "vision-clone.appspot.com",
  messagingSenderId: "878627389493",
  appId: "1:878627389493:web:01fc3b0eda71c5ae33f17c",
  measurementId: "G-R0KJZWL4C4",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

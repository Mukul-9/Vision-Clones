import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCC2h25TkjDWvQBysGKIHMO2zYtHM_yag",
  authDomain: "slack-vision-clone.firebaseapp.com",
  databaseURL: "https://slack-vision-clone.firebaseio.com",
  projectId: "slack-vision-clone",
  storageBucket: "slack-vision-clone.appspot.com",
  messagingSenderId: "781570151912",
  appId: "1:781570151912:web:a5f34b802a6732c002005d",
  measurementId: "G-NLBKP3KM84",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

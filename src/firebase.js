import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCuZdPJG-NAfJ24hY-SfHU6tDoUcKD2XMo",
  authDomain: "clone-3806b.firebaseapp.com",
  databaseURL: "https://clone-3806b.firebaseio.com",
  projectId: "clone-3806b",
  storageBucket: "clone-3806b.appspot.com",
  messagingSenderId: "25866806375",
  appId: "1:25866806375:web:16c352a65945a1380260c2",
  measurementId: "G-SGNY9GFRZ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

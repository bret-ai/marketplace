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

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAWzN8yqneKXOCfIiPGw-ECR9_i6apm-VA",
//   authDomain: "madini-marketplace.firebaseapp.com",
//   databaseURL: "https://madini-marketplace.firebaseio.com",
//   projectId: "madini-marketplace",
//   storageBucket: "madini-marketplace.appspot.com",
//   messagingSenderId: "543954576701",
//   appId: "1:543954576701:web:740514a7927feed8c61154",
//   measurementId: "G-PFE3XSCQ4Q"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

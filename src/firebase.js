import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA5CDAu7hIHZc7cjYLqloC2TZtCJWJbwOE",
  authDomain: "my-netflix-252c3.firebaseapp.com",
  projectId: "my-netflix-252c3",
  storageBucket: "my-netflix-252c3.appspot.com",
  messagingSenderId: "647595128651",
  appId: "1:647595128651:web:423dc5e846ab00ed34dace",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

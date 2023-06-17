import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDr_uxzfOqsTACJ2Bf_Pet2Zf6razrdByM",
  authDomain: "netflix-clone-df0e5.firebaseapp.com",
  projectId: "netflix-clone-df0e5",
  storageBucket: "netflix-clone-df0e5.appspot.com",
  messagingSenderId: "586464736394",
  appId: "1:586464736394:web:28eecf451aa77e449b6973",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;

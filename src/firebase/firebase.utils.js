import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_cEjpoVWCLrSwiPLPm58B-CaQhlFqT_s",
  authDomain: "academicshelf.firebaseapp.com",
  databaseURL: "https://academicshelf.firebaseio.com",
  projectId: "academicshelf",
  storageBucket: "academicshelf.appspot.com",
  messagingSenderId: "1095653529722",
  appId: "1:1095653529722:web:bb56635b7a76ad918383c3",
  measurementId: "G-94GCNDZ66N",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

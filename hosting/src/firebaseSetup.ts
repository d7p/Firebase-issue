// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore, connectFirestoreEmulator} from "firebase/firestore";
import { getFunctions } from "firebase/functions";


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);

// eslint-disable-next-line no-restricted-globals
if (location.hostname === "localhost") {
  console.debug("connecting to emulators");
  connectFirestoreEmulator(db, "localhost", 8082);
}

export {db, app, functions};

import firebase from "firebase/app";
import "@firebase/storage";
import "@firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBs_Lrzfc8Pp-gKQAy0u9OG0p_q35aW-Pk",
  authDomain: "k-i-m-503b6.firebaseapp.com",
  projectId: "k-i-m-503b6",
  storageBucket: "k-i-m-503b6.appspot.com",
  messagingSenderId: "766098408740",
  appId: "1:766098408740:web:f4fd26633c205085905fb1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

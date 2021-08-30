import  firebase from "firebase"
import 'firebase/storage';
 
var firebaseConfig = {
  apiKey: "AIzaSyDQazp5KZdqTKHMfdwhApZaJ8JEQHcOfQA",
  authDomain: "bicshape-441b9.firebaseapp.com",
  databaseURL: "https://bicshape-441b9-default-rtdb.firebaseio.com",
  projectId: "bicshape-441b9",
  storageBucket: "bicshape-441b9.appspot.com",
  messagingSenderId: "56506438158",
  appId: "1:56506438158:web:e52f1cb510f537aff1a25f",
  measurementId: "G-5BDFHYMTBL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database
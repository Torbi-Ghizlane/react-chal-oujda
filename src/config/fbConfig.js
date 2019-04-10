import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyAheZwDIiLMpZJIoanX7sK9OAUD2TUDltI",
  authDomain: "redux-firstproject.firebaseapp.com",
  databaseURL: "https://redux-firstproject.firebaseio.com",
  projectId: "redux-firstproject",
  storageBucket: "redux-firstproject.appspot.com",
  messagingSenderId: "167220942455"
};
firebase.initializeApp(config);
//firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

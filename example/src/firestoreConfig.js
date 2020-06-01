import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"; // <- needed if using firestore
import { createStore, combineReducers, compose } from "redux";
import { createFirestoreInstance, firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import { firebaseReducer } from "react-redux-firebase";

const firebaseConfig = {
  // YOUR FIREBASE APP CONFIG
  //
  // Copy contents of firebaseConfig from:
  //   Log into Firebase Console (https://console.firebase.google.com/)
  //      >> YOUR_PROJECT
  //      >> Project Settings
  //      >> Add App (or use existing one)
  //      >> Firebase SDK snippet
  //      >> Config
};

const rrfConfig = {
  // These settings are optional, though quite useful(!)
  //     See https://react-redux-firebase.com/docs/recipes/profile.html#profile-in-firestore

  /*
    userProfile: "users",  // name of collection where profile information will be stored/retrieved
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  */
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default { store, rrfProps };
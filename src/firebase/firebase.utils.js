import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyA7ZgxymaLrzwyORfsowi2L4A6eYUfDiVI",
  authDomain: "crwn-db-e5bdb.firebaseapp.com",
  databaseURL: "https://crwn-db-e5bdb.firebaseio.com",
  projectId: "crwn-db-e5bdb",
  storageBucket: "crwn-db-e5bdb.appspot.com",
  messagingSenderId: "616102918857",
  appId: "1:616102918857:web:aa9d1bc206331c128d6b18",
  measurementId: "G-19CBTHVKGK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
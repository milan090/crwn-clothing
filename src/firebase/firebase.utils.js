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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.error("Error creating User", error);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
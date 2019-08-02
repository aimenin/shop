import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAg-Q25wr69ZNVOP3K-0l4sDnxx5uLRZSo",
    authDomain: "crwn-db-7cf5d.firebaseapp.com",
    databaseURL: "https://crwn-db-7cf5d.firebaseio.com",
    projectId: "crwn-db-7cf5d",
    storageBucket: "",
    messagingSenderId: "68320093983",
    appId: "1:68320093983:web:1ee265b89970d870"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
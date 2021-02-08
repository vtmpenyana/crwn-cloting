import firebase from 'firebase/app';

import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyC9pVTp_1Fuf00QbMGStZS7zJR-FGJ5hm0",
    authDomain: "crwn-db-1e4bc.firebaseapp.com",
    projectId: "crwn-db-1e4bc",
    storageBucket: "crwn-db-1e4bc.appspot.com",
    messagingSenderId: "1039063953990",
    appId: "1:1039063953990:web:6bd6293f71b9929a1cd047",
    measurementId: "G-R1EB4VRDPN"
  }


const customParams = {
    prompt: 'select_account'
}

if (firebase.apps.length === 0) {
    firebase.initializeApp(config);
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters(customParams);
export const signInWithGoogle = () => auth.signInWithPopup(provider).then(result => {
    console.log(`token: `, result.credential.accessToken);
    console.log(`user: `, result.user);
})


export default firebase;
import firebase from 'firebase/app';
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDkzgTEaD-0dRqgl6sRWfgTUlTOHpEz_7w",
    authDomain: "henkorealestate-13b72.firebaseapp.com",
    projectId: "henkorealestate-13b72",
    storageBucket: "henkorealestate-13b72.appspot.com",
    messagingSenderId: "42724153797",
    appId: "1:42724153797:web:cee53fa481790d830fd3ac",
    measurementId: "G-23P8C1NXTS"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

export { db, firebase };
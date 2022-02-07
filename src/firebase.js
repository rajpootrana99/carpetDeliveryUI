import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyASEsDOndU1NmWg6T3ZfqF1zbRS31ow2kQ",
  authDomain: "carpetdelivery-2b983.firebaseapp.com",
  projectId: "carpetdelivery-2b983",
  storageBucket: "carpetdelivery-2b983.appspot.com",
  messagingSenderId: "976307311136",
  appId: "1:976307311136:web:ef3eefe4f5e2d2c0dfe245"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
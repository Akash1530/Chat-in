import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAXJxuKfve9Cc9sSdPJDNM8hniz1a9vWTY',
  authDomain: 'whatsapp-clone-bf2f9.firebaseapp.com',
  projectId: 'whatsapp-clone-bf2f9',
  storageBucket: 'whatsapp-clone-bf2f9.appspot.com',
  messagingSenderId: '708282304400',
  appId: '1:708282304400:web:8aa3ac818022476c47d515',
  measurementId: 'G-LCNVT7XC6W',
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;

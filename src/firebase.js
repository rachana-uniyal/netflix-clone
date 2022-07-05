import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxiUKmQKVqeN1HEehqDaZmpjGJQT3oi_Y",
  authDomain: "netflix-clone-ad967.firebaseapp.com",
  projectId: "netflix-clone-ad967",
  storageBucket: "netflix-clone-ad967.appspot.com",
  messagingSenderId: "841864416035",
  appId: "1:841864416035:web:09f94b74488306ebc6da96"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth };
export default db;
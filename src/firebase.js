import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBoEZQ8-_9-fBjzs8ehdWMwTuf-TRF-xjc",
    authDomain: "netflix-clone-96777.firebaseapp.com",
    projectId: "netflix-clone-96777",
    storageBucket: "netflix-clone-96777.appspot.com",
    messagingSenderId: "723627899320",
    appId: "1:723627899320:web:25a523e25cc2e3bc6e374d"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export { auth };
  export default db;

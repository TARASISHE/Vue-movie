import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyBPnzJl51KS8A9-UYUHbhPk9ypdKMMIAdg',
  authDomain: 'vue-movie-9c01a.firebaseapp.com',
  projectId: 'vue-movie-9c01a',
  storageBucket: 'vue-movie-9c01a.appspot.com',
  messagingSenderId: '105392285343',
  appId: '1:105392285343:web:aaaaf93b78045ab074a4aa'
};

const fireapp = initializeApp(firebaseConfig);
const db = getFirestore(fireapp);

export {
  db, fireapp
};

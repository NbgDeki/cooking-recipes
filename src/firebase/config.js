import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBwNNP5TSAcfR_uHZMr4MaWFmTP_2uo6yE',
  authDomain: 'udemy-vue-firebase-sites-3c78c.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-3c78c',
  storageBucket: 'udemy-vue-firebase-sites-3c78c.appspot.com',
  messagingSenderId: '413252297157',
  appId: '1:413252297157:web:4e443aa3342fbd3be2ebac'
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };

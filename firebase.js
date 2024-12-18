// firebaseConfig.js
import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCSJQ0ReodVLD8VszKdpUZaBgtoPpVTcrw",
  authDomain: "schuleimgriff-d0d30.firebaseapp.com",
  projectId: "schuleimgriff-d0d30",
  storageBucket: "schuleimgriff-d0d30.firebasestorage.app",
  messagingSenderId: "835763271381",
  appId: "1:835763271381:web:5b3067c0362be3d6c5d45c",
  measurementId: "G-3LF1QPDVGD"
};

if (!firebase.apps.length) {
    console.log('if runing............')
    firebase.initializeApp(firebaseConfig);
  } else {
    console.log('else runing............')
    firebase.app(); // If already initialized, use that one
  }

export default firebase;


import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB3zGSMPl9KwiLwRK9wxCIWQvMlluXAUF4",
    authDomain: "react-app-30b09.firebaseapp.com",
    projectId: "react-app-30b09",
    storageBucket: "react-app-30b09.appspot.com",
    messagingSenderId: "58555395065",
    appId: "1:58555395065:web:8f62d3c050f5ff8c3e2b28"
  };
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
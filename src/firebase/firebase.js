import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAZT2kB1Bu9Mvdmu5R99xXsjpSrH8gdaOA",
    authDomain: "expensify-a242d.firebaseapp.com",
    databaseURL: "https://expensify-a242d.firebaseio.com",
    projectId: "expensify-a242d",
    storageBucket: "expensify-a242d.appspot.com",
    messagingSenderId: "1082248607596"
  };
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

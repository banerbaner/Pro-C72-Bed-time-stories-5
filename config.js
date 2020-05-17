import * as firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBKeSOHReh3iBdRzR1NlwTJXbctezHM2T4",
    authDomain: "bedtime-stories-application.firebaseapp.com",
    databaseURL: "https://bedtime-stories-application.firebaseio.com",
    projectId: "bedtime-stories-application",
    storageBucket: "bedtime-stories-application.appspot.com",
    messagingSenderId: "648867939547",
    appId: "1:648867939547:web:a4631287e48c1134abb8fe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
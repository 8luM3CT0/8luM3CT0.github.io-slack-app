import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDwN0CTeIn-j8xQhxyZuWvbvYKYRvaSQUY",
    authDomain: "slack-app-2020.firebaseapp.com",
    databaseURL: "https://slack-app-2020.firebaseio.com",
    projectId: "slack-app-2020",
    storageBucket: "slack-app-2020.appspot.com",
    messagingSenderId: "1072076385618",
    appId: "1:1072076385618:web:fde0767125e59307b05e8b",
    measurementId: "G-M1H210G431"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
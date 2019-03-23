import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAbNg-DYA0ZtX81ijbtzTMOiddWVh_9Ev4",
    authDomain: "udemy-ninja-chat-f6972.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-f6972.firebaseio.com",
    projectId: "udemy-ninja-chat-f6972",
    storageBucket: "udemy-ninja-chat-f6972.appspot.com",
    messagingSenderId: "786208506864"
  };
const firebaseApp = firebase.initializeApp(config);

export default firebaseApp.firestore()
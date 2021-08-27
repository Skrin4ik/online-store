import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCQ6o8dWtmjVbIU3XX8WIACsi3NbNGrBnY",
    authDomain: "delivery-food-75823.firebaseapp.com",
    databaseURL: "https://delivery-food-75823-default-rtdb.firebaseio.com",
    projectId: "delivery-food-75823",
    storageBucket: "delivery-food-75823.appspot.com",
    messagingSenderId: "8415318802",
    appId: "1:8415318802:web:58b58d631f59967c8899cb",
    measurementId: "G-WBB865PGFD"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
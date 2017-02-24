'use strict'

import * as firebase from 'firebase';
import {
    FIREBASE_APIKEY,
    FIREBASE_AUTHDOMAIN,
    FIREBASE_DATABASEURL,
    FIREBASE_STORAGEBUCKET,
    FIREBASE_MESSAGINGSENDERID
} from 'react-native-dotenv';

const firebaseApp = firebase.initializeApp(
    {
        apiKey: FIREBASE_APIKEY,
        authDomain: FIREBASE_AUTHDOMAIN,
        databaseURL: FIREBASE_DATABASEURL,
        storageBucket: FIREBASE_STORAGEBUCKET,
        messagingSenderId: FIREBASE_MESSAGINGSENDERID
    }
);

class Database {
    getFirebaseApp() {
        return firebaseApp;
    }

}

module.exports = new Database();
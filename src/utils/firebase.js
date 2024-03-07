import { firebaseConfig } from "config";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

export class FirebaseApp {
    static firebasApp = undefined;
    static auth = undefined;
    static db = undefined;

    static init() {
        this.firebasApp = initializeApp(firebaseConfig)
        this.auth = getAuth()
        this.db = getFirestore(this.firebasApp)
    }
}
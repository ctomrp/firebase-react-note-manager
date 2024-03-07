import { firebaseConfig } from "config";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export class FirebaseApp {
    static firebasApp = undefined;
    static auth = undefined;

    static init() {
        this.firebasApp = initializeApp(firebaseConfig)
        this.auth = getAuth()
        signInWithEmailAndPassword(this.auth, 'test@test.cl', 'passwd123')
    }
}
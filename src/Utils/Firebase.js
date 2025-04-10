import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const { VITE_FIREBASE_APIKEY, VITE_FIREBASE_APPID, VITE_FIREBASE_SENDERID } = import.meta.env;
const firebaseConfig = {
    apiKey: VITE_FIREBASE_APIKEY,
    authDomain: "frequency-files-ky1f4x.firebaseapp.com",
    projectId: "frequency-files-ky1f4x",
    storageBucket: "frequency-files-ky1f4x.appspot.com",
    messagingSenderId: VITE_FIREBASE_SENDERID,
    appId: VITE_FIREBASE_APPID
};
export const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account "
});

export const db = getFirestore(firebaseApp);
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

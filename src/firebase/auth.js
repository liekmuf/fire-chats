import firebase from "firebase/compat/app";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';

const defaultPhotoUrl = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
const firebaseConfig = {
    apiKey: "AIzaSyDmBs0cz6WmjRPDki01xlR3EpgypxHmjkU",
    authDomain: "danylo-chat.firebaseapp.com",
    projectId: "danylo-chat",
    storageBucket: "danylo-chat.appspot.com",
    messagingSenderId: "608034901555",
    appId: "1:608034901555:web:467a24e789b220b37edd46"
}
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
export const login = async(email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
}

export const register = async(email, password, username) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: username,
                photoURL: defaultPhotoUrl,
            })
        })
}

export const signWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
}

export const signOut = () => {
    auth.signOut()
}

export const getCurrentUser = () => {
    return auth.currentUser
}

export const getCurrentUserInfo = () => {
    const user = auth.currentUser
    return {
        uid: user.uid,
        photoURL: user.photoURL,
        email: user.email,
        displayName: user.displayName
    }
}
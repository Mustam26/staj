import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { sendEmailVerification,updateProfile,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import toast from 'react-hot-toast';
import store from "../redduxx";
import {login as loginHandle,logout as logoutHandle} from '../redduxx/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVZ_16nDgNQ50pne3-uOeEr0jsGJR-iaI",
  authDomain: "staj-2022.firebaseapp.com",
  projectId: "staj-2022",
  storageBucket: "staj-2022.appspot.com",
  messagingSenderId: "936990571777",
  appId: "1:936990571777:web:16a67a015786b5a4c72f00",
  measurementId: "G-KCC811ZZ9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
const analytics = getAnalytics(app);

export const register =async(email,password)=>{
  try {
    const {user}= await createUserWithEmailAndPassword(auth,email,password)
    console.log("registere girdi");
    return user
  } catch (error) {
    toast.error(error.message)
  }  
  
}

export const login=async (email,password)=>{
  try {
    const {user} =await signInWithEmailAndPassword(auth,email,password)
    toast.success("giris Basarili")
    return user
  } catch (error) {
    toast.error(error.message)
  }
}

export const logout=async ()=>{
  try {
    await signOut(auth)
    return true
  } catch (error) {
    toast.error(error.message)
  }
}

export const update=async(data)=>{
  try {
    await updateProfile(auth.currentUser,data)
    toast.success('Profil update edildi')
  } catch (error) {
    toast.error(error.message)
  }
}

export const verified=async()=>{
  try {
    await sendEmailVerification(auth.currentUser)
    toast.success(`${auth.currentUser.email} e doğrulama maili gönderildi `)
  } catch (error) {
    toast.error(error.message)
  }
}
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //console.log('User',user)
    store.dispatch(loginHandle({
      displayName:user.displayName,
      email:user.email,
      photoURL:user.photoURL,
      emailVerified:user.emailVerified,
      uid:user.uid
    }))
    // ...
  } else {
    store.dispatch(logoutHandle(user))
    // User is signed out
    // ...
  }
});

export default app
import firebase from 'firebase/app';
import "firebase/firestore"
import "firebase/auth";

const config ={
    apiKey: "AIzaSyBu2G4SWwSD69O0I1h-SbDwxrTnFWD6ZX0",
    authDomain: "ecommerce-5fa4a.firebaseapp.com",
    databaseURL: "https://ecommerce-5fa4a.firebaseio.com",
    projectId: "ecommerce-5fa4a",
    storageBucket: "ecommerce-5fa4a.appspot.com",
    messagingSenderId: "205978261404",
    appId: "1:205978261404:web:e53472671ac33a3666da59",
    measurementId: "G-KCTHLB0HQE"
  }

  export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot= await userRef.get()
   if(!snapShot.exists){
     const{displayName,email}=userAuth;
     const createdAt=new Date()
     try{await userRef.set({displayName,
    email,createdAt,
  ...additionalData})}
     catch(error){
    console.log('error creating users',error.message)
     }
   }
   return userRef;
  }
  firebase.initializeApp(config)    

  export const auth =firebase.auth()
  export const firestore =firebase.firestore()
  
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({promt:"select account"})
  export const signInWithGoogle=()=>auth.signInWithPopup(provider)

  export default firebase;
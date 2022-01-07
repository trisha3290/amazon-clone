import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseApp=firebase.initializeApp({
    
    apiKey: "AIzaSyAvWq4UXXRFcNhy18K52r9is_icVmNt9G0",
    authDomain: "clone-9409c.firebaseapp.com",
    projectId: "clone-9409c",
    storageBucket: "clone-9409c.appspot.com",
    messagingSenderId: "359959328781",
    appId: "1:359959328781:web:bce822a8e462e0c0517d44",
    measurementId: "G-Q609J43NMY"
  
});
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
export {db,auth};
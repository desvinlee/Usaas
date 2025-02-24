// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAifkBmMPwQLTqRu8nYFU1dqej2dlX33Bk",
  authDomain: "usaas-4230f.firebaseapp.com",
  databaseURL: "https://usaas-4230f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "usaas-4230f",
  storageBucket: "usaas-4230f.firebasestorage.app",
  messagingSenderId: "1057123876526",
  appId: "1:1057123876526:web:fb4c3c0e6b2407295f773f",
  measurementId: "G-NSW66N1VGP"
};

  const app = initializeApp(firebaseConfig);

const signUp=document.getElementById('signup');
 signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('Email').value;
    const password=document.getElementById('Password').value;
    const userName=document.getElementById('Username').value;

    const auth=getAuth();
    const db=getFirestore();

       createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email,
            userName: userName,

        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef=doc(db, "users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='sign_up.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);

        });
    })
    .catch((error)=>{
        const errorCode=error.code;
        if(errorCode=='auth/email-already-in-use'){
            showMessage('Email Address Already Exists !!!', 'signUpMessage');
        }
        else{
            showMessage('unable to create User', 'signUpMessage');
        }
    })
 });
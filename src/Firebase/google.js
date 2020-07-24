import firebase from "firebase"
import { auth } from './auth'
import { db } from './firestore';

export const googleLogin = (event) => {
  event.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(function (result) {

      db.collection('users').doc(result.user.uid).get().then(res =>{
        if(!res.exists){
          console.log(result.user);
          db.collection('users').doc(result.user.uid).set({email: result.user.email, owner: null, enable: false})
          .then(res => {
            console.log("User Added",res)
            window.location.replace('/verification');
          })
          .catch(err => console.log(err));
        }
        else{
          if(res.data().owner === null ){
            window.location.replace('/verification');
          }
          else{
            window.location.replace('/dashboard');
          }
        }
      })

          // window.location.replace('home.html');
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode, errorMessage);
        // ...
    });
}
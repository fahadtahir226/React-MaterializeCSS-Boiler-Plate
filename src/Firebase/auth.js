import firebase from "./firebase"
export const auth = firebase.auth();


// User login 
export const SignInCall = (e, addError) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const pass = document.getElementById("login-pass").value;

    auth.signInWithEmailAndPassword(email, pass)
    .then( res => {
      if (res) {
        window.location.replace("/dashboard");
        console.log(auth.currentUser);
      }
    }) .catch((err) => {
      let error = {message: err.message}
      error.status = 'danger';
      addError(error);
      setTimeout(() => {
        addError(null);
      }, 3050);
      console.log('Every Field is Mandatory!')
    });

}

// User Sign Out
export const SignOut = () => {
    auth.signOut()
    .then(res => {
      window.location.replace("/");
    }).catch(err => {
        console.log(err);
    })
}

// redirects user to new page
function redirectStudent() {
	alert("button clicked");
	window.location = "studentSignup.html";
}

function redirectTutor() {
	alert("button clicked");
	window.location = "http://www.google.com";
}


function tutorClicked(){
	 console.log("clicked"); 
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;

     firebase.auth().signInWithEmailAndPassword(username, password).then(function(firebaseUser){
          console.log("successfully logged in");
     }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if(errorCode === 'auth/wrong-password'){
          alert('Wrong password.');
     } else{
          alert(errorMessage);
     }
          console.log(error);
          // ...
     });
/*
     mAuthListener = new FirebaseAuth.AuthStateListener() {
          @Override
          public void onAuthStateChanged(@NonNull FirebaseAuth firebaseAuth) {
               FirebaseUser user = firebaseAuth.getCurrentUser();
               if (user != null) {
                    // User is signed in
                    Log.d(TAG, "onAuthStateChanged:signed_in:" + user.getUid());
               } else {
                    // User is signed out
                    Log.d(TAG, "onAuthStateChanged:signed_out");
               }
               // ...

          };
     } */
}
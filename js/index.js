// redirects user to new page
function redirectStudent() {
     alert("button clicked");
     window.location = "studentSignup.html";
}

function redirectTutor() {
     alert("button clicked");
     window.location = "http://www.google.com";
}

//This method runs what happens when the sign-in box for "student sign-in" is clicked 
function studentClicked(){
     console.log("clicked"); 
     var username = document.getElementById('student-login-username').value;
     var password = document.getElementById('student-login-password').value;

     firebase.auth().signInWithEmailAndPassword(username, password).then(function(firebaseUser){
          alert("You just logged in successfully"); 
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
}

     //This method runs what happens when the sign-in box for "tutor" sign-in" is clicked 
     function tutorClicked(){
          console.log("clicked"); 
          var username = document.getElementById('tutor-login-username').value;
          var password = document.getElementById('tutor-login-password').value;

     firebase.auth().signInWithEmailAndPassword(username, password).then(function(firebaseUser){
          alert("You just logged in successfully"); 
          console.log("successfully logged in");
     }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          //if(errorCode === 'auth/wrong-password'){
          //alert('Wrong password.');
     }); //else{
          //alert(errorMessage);
     //}
          //console.log(error);
          // ...
     //});
     

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
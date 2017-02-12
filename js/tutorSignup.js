function read(){
//<script type="text/javascript">
//document.getElementById("userInput").addEventListener('click', function () {
//     console.log("clicked");
  //  var text = document.getElementById('text');
    //text.val() = (text.val()+ ' after clicking');

//</script>

var initialInput = document.getElementById('subject-confirm').value;
document.getElementById("text").value
document.getElementById("text").value = document.getElementById("text").value + " " + initialInput;
 //document.getElementById('subject-confirm').value;
document.getElementById('subject-confirm').value='';
}

function clicked(){
  var user = firebase.auth().currentUser;

  var firstName = document.getElementById('student-firstname').value;
  var lastName = document.getElementById('student-lastname').value; 
  var username = document.getElementById('student-email').value;
  var password = document.getElementById('student-password').value;
  var tmp = document.getElementById('student-number').value;
  var phoneNumber = tmp.replace(/-|\s/g,"");  
  var confirmPassword = document.getElementById('student-confirm').value;
  var rightEmailFormat = username.includes("@");
  var creditCardInfo = document.getElementById('credit-card').value; 
  var outputBox = document.getElementById('text').value; 

  var subjectText = "";

  if($('#subject-Math').is(':checked')){
    subjectText += "Math "; 
  }

  //var tokenizedSubjects = subjectText.split(" ");
   
  /*
  if($('#subject-Language').is(':checked')){
    subjectText += "Language "; 
  }

  if($('#subject-Science').is(':checked')){
    subjectText += "Science "; 
  }

  if($('#subject-Geography').is(':checked')){
    subjectText += "Geography "; 
  }

  if($('#subject-History').is(':checked')){
    subjectText += "History "; 
  }

  if($('#subject-English').is(':checked')){
    subjectText += "English "; 
  }
  */




  if(password != confirmPassword){
    alert("your passwords didn't match, please correct them before continuing");
    return; 
  } else if(password.length < 6) {
    alert("Length of your password must be greater than 6."); 
    return;
  }else if(!(rightEmailFormat)){
    alert("Wrong email format"); 
    return;
  } else {
      // read existing data from ListofCourses
      var courseList = "";
      //reading data here 
      firebase.database().ref('ListofCourses').child(subjectText).child('Specific').on('value', function(snapshot){
          var readData = snapshot.val();  
          courseList += readData;
          console.log("data: " + courseList);
      }, function(errorObject) {
          console.log("The read failed: " + errorObject.code);
      });

      firebase.auth().createUserWithEmailAndPassword(username, password).catch(function(error) {
        alert("account made it into database");
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error: " + error);
        alert("error: " + error);
      });

      var usernameFinal = "";
      for(var i = 0; i < username.length; i++) {
        if(username.charAt(i) == '@') {
          i = username.length;
        } else {
          usernameFinal += username.charAt(i);
        }
      }

      firebase.database().ref('Users/' + usernameFinal).update({
          Password: password,
          Phone_Number: phoneNumber,
          Student: false,
          Tutor: true,
          First_Name : firstName,
          Last_Name : lastName,
          Credit_Card_Number : creditCardInfo,
          
      });

      firebase.database().ref('Users/' + usernameFinal + '/SubjectArea/' + subjectText).update({
          SpecificArea : subjectText
      });              

      if(courseList.indexOf(outputBox) >= 0) { // doesn't exist in existing firebase
        courseList += ', ' + outputBox;
      }

      console.log("final: " + courseList);

      firebase.database().ref('ListofCourses/' + subjectText).update({
        // Specific:  courseList
        Specific:  courseList


        //alert("account made it into database");
        //var errorCode = error.code;
        //var errorMessage = error.message;
        //console.log("error: " + error);
        //alert("error: " + error);
      });
            // var courseList = "";

      //reading data here 
  }



  //if()

  //var isStudent = false;
  //var isTutor = true;
  //var areaExpertise = "Math, Science, Social Sciences";
  //var creditCardInfo = "XXX-XXX-XXXXX";
  var first_name = "first name goes here";
  var last_name = "last name goes here";
}


/*
function clicked(){
  var user = firebase.auth().currentUser;

  var firstName = document.getElementById('student-firstname').value;
  var lastName = document.getElementById('student-lastname').value; 
  var username = document.getElementById('student-email').value;
  var password = document.getElementById('student-password').value;
  var tmp = document.getElementById('student-number').value
  var phoneNumber = tmp.replace(/-|\s/g,"");  
  var confirmPassword = document.getElementById('student-confirm').value;
  var rightEmailFormat = username.includes("@");

  if(password != confirmPassword){
    alert("your passwords didn't match, please correct them before continuing");
    return; 
  } else if(password.length < 6) {
    alert("Length of your password must be greater than 6."); 
    return;
  }else if(!(rightEmailFormat)){
    alert("Wrong email format"); 
    return;
  } else {
      firebase.auth().createUserWithEmailAndPassword(username, password).catch(function(error) {
        alert("account made it into database")
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error: " + error);
        alert("error: " + error);
      });

      var usernameFinal = "";
      for(var i = 0; i < username.length; i++) {
        if(username.charAt(i) == '@') {
          i = username.length;
        } else {
          usernameFinal += username.charAt(i);
        }
      }

      firebase.database().ref('Users/' + usernameFinal).update({
          Password: password,
          Phone_Number: phoneNumber,
          Student: true,
          Tutor: false,
          Skills: areaExpertise,
          Credit_Card_Number : creditCardInfo,
          First_Name : firstName,
          Last_Name : lastName,                     
      });
  }

  //if()

  //var isStudent = false;
  //var isTutor = true;
  //var areaExpertise = "Math, Science, Social Sciences";
  //var creditCardInfo = "XXX-XXX-XXXXX";
  var first_name = "first name goes here";
  var last_name = "last name goes here";
}
*/
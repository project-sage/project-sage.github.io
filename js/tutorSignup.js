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
          Student: false,
          Tutor: true,
          //Skills: areaExpertise,
          First_Name : firstName,
          Last_Name : lastName,
          Credit_Card_Number : creditCardInfo,
          specifics : outputBox 
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
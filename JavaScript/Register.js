
function validateForm() {
    
        
    // Retrieve form inputs
    var kidName = document.getElementById("kidName");
    var kidDOB = document.getElementById("kidDOB");
    var kidGender = document.getElementById("kidGender");
    var kidPhone = document.getElementById("kidPhone");
        
    // Validate inputs
    if (kidName ==""||kidDOB ==""||kidGender ==""|| kidPhone =="") {
      alert("Please fill in all fields.");
      return false;
    }
  
    if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(kidName)) {
      alert("Invalid name. Name should not start with a number.");
      return false ;
    }
  
    if (kidPhone.length !== 10 || isNaN(kidPhone)) {
      alert("Invalid phone number. Phone number should be 10 digits.");
      return false;
    }
  
    var currentYear = new Date().getFullYear();
    var kidYear = new Date(kidDOB).getFullYear();
    if (kidYear > currentYear - 6) {
      alert("Invalid date of birth. Children younger than 6 years old are not accepted.");
      return false ;
    }} 

    function myfunction(){
      var childName = registerForm.kidName.value;
      localStorage.setItem("childName", kidName);
    }
    var kidImage = document.getElementById("kid-image").src;
    var childInfo = "Child Name:" + kidName + '\n' +
                    "Date of Birth:" + kidDOB + '\n' +
                    "Gender:" + kidGender + '\n' +
                    "Phone Number: "+ kidPhone + '\n' +
                    "Email: " + kidEmail;

    alert(childInfo);

    return true;

   


  
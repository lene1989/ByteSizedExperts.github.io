



function validateForm() {
    
        
    // Retrieve form inputs
    var kidName = document.getElementById('kidName').value;
    var kidDOB = document.getElementById('kidDOB').value;
    var kidGender = document.getElementById('kidGender').value;
    var kidPhone = document.getElementById('kidPhone').value;
    var kidEmail= document.getElementById('kidEmail').value;
    var kidimgupload= document.getElementById('kid-image-upload').value;
        
    // Validate inputs
    if(kidimgupload==""){
      alert("please upload photo of the kid");
      return false;
    }
    if(kidGender ==""){
      alert("Please select a gender ");
      return false;
    }
    if(kidEmail==""){
      alert("Please enter an email ");
      return false;
    }
    
    if (!/^[a-zA-Z][a-zA-Z\s]*$/.test(kidName)) {
      alert("Invalid name. Name should not start with a number.");
      else 
        if (kidName =="") 
        alert("Please enter the kid Name ");
        return false;
    }
  
    if (kidPhone.length !== 10 || isNaN(kidPhone)) {
      alert("Invalid phone number. Phone number should be 10 digits.");
    else if( kidPhone =="")
        alert("Please enter a phone number");
  
      return false;
    }
  
    var currentYear = new Date().getFullYear();
    var kidYear = new Date(kidDOB).getFullYear();
    if (kidYear > currentYear - 6) {
      alert("Invalid date of birth. Children younger than 6 years old are not accepted.");
      else  if(kidDOB =="")
        alert("Please enter the date of birth ");
      return false ;
    }
  return true;
  } 


    function storeChildren(){
      var childName = document.getElementById('kidName').value;
      if(localStorage.getItem('children') == null){
        localStorage.setItem('children', '[]');
      }
    else{
      localStorage.removeItem('children');
      localStorage.setItem('children', '[]');
    }
    
      var childrenNames=JSON.parse(localStorage.getItem("children"));
      childrenNames.push(childName);
      localStorage.setItem("children", JSON.stringify(childrenNames));
    }

    function printChild() {
      var kidImage = document.getElementById('kid-image-upload').files[0];
      var kidName = document.getElementById('kidName').value;
      var kidDOB = document.getElementById('kidDOB').value;
      var kidGender = document.getElementById('kidGender').value;
      var kidPhone = document.getElementById('kidPhone').value;
      var kidEmail = document.getElementById('kidEmail').value;
      var imageURL= URL.createObjectURL(kidImage);

      var childInfo='';
      
      childInfo = '<img src="'+imageURL+'" alt="" id="childPic" style="width:80px; height:80px; margin:10px"><br>' +
          'Child Name : ' + kidName + '<br>' +
          'Date of Birth : ' + kidDOB + '<br>' +
          'Gender : ' + kidGender + '<br>' +
          'Phone Number : ' + kidPhone + '<br>' +
          'Email : ' + kidEmail;

  
      var printWindow = window.open('', '_blank'); // Open a new window
      printWindow.document.write('<html><head><title>Print Information</title></head><body>'); // Open HTML tags in the new window
      printWindow.document.write(childInfo); // Write content to print in the new window
      printWindow.document.write('</body></html>'); // Close HTML tags in the new window

      printWindow.document.close(); // Close writing to document
      printWindow.print(); // Trigger the print dialog

  }
  
  
    
   


  

// a function to retrieve children names from localStorage using the key: children
function retrieveChildren(){
    var childNames = JSON.parse(localStorage.getItem("children"));
    var temp=`<option>select</option>`;
    var options=document.querySelectorAll('#kidOptions option');

    for(let i=0 ; i<childNames.length ; i++){
        for(var j=0 ; j<options.length ; j++)
        if(childNames[i]==options[i].value)
        break;

        temp +=`<option>${childNames[i]}</option>`;
    }
    document.getElementById("kidOptions").innerHTML=temp;
}

// Multidimensional array for Course and tutors
// to create an output code for the courses filter using JavaScript I divided the code for each course:
var scratchCode = `
    <img src="images/Scratch.png" alt="scratch logo" style="height:4.5vw; width:4.5vw;">
    Introduction to Scratch Programming
    <input type="checkbox" name="Course" value="Introduction to Scratch Programming">
`;

var pythonCode = `
    <img src="images/free-python.jpeg" alt="Python interface" style="height:4.5vw; width:4.5vw;">
    Python for Kids
    <input type="checkbox" name="Course" value="Python for Kids">
`;

var webCode = `
    <img src="images/web.png" alt="Web apps logos" style="height:4.5vw; width:4.5vw;">
    Web Development for Young Innovators
    <input type="checkbox" name="Course" value="Web Development for Young Innovators">
`;

var gameCode = `
    <img src="images/unity1.jpg" alt="Unity logo" style="height:4.5vw; width:4.5vw;">
    Game Development with Unity
    <input type="checkbox" name="Course" value="Game Development with Unity">
`;

var mobileCode = `
    <img src="images/mit-app.png" alt="App inventor logo" style="height:4.5vw; width:4.5vw;">
    Mobile App Development with App Inventor
    <input type="checkbox" name="Course" value="Mobile App Development with App Inventor">
`;

var javaScriptCode = `
    <img src="images/JavaScript-logo.png" alt="Javascript logo" style="height:4.5vw; width:4.5vw;">
    JavaScript Adventures
    <input type="checkbox" name="Course" value="JavaScript Adventures">
`;

var dataScienceCode = `
    <img src="images/AI-cover-image.png" alt="AI with kids" style="height:4.5vw; width:4.5vw;">
    Data Science for Kids
    <input type="checkbox" name="Course" value="Data Science for Kids">
`;

var javaCode = `
    <img src="images/Programming_java.jpg" alt="Java interface" style="height:4.5vw; width:4.5vw;">
    Java Programming for beginners
    <input type="checkbox" name="Course" value="Java Programming for beginners">
`;

var threeDCode = `
    <img src="images/blender.jpg" alt="Blender logo" style="height:4.5vw; width:4.5vw;">
    3D Game Developer with blender
    <input type="checkbox" name="Course" value="3D Game Developer with blender">
`;

var courses = [
    // Course: [Course Name, Tutor, Prerequisite, Code]
    ["Introduction to Scratch Programming", "Nouf Alamri", "", scratchCode],
    ["Python for Kids", "Ahmed Khalid", "", pythonCode],
    ["Web Development for Young Innovators", "Tom David", "", webCode],
    ["Game Development with Unity", "Wasan Abdullah", "Mobile App Development with App Inventor", gameCode],
    ["Mobile App Development with App Inventor", "Arwa Almousa", "Python for Kids", mobileCode],
    ["JavaScript Adventures", "Fahad Alharbi", "Web Development for Young Innovators", javaScriptCode],
    ["Data Science for Kids", "Lene Van", "Python for Kids", dataScienceCode],
    ["Java Programming for Beginners", "Muhannad Ahmed", "Introduction to Scratch Programming", javaCode],
    ["3D Game Developer with Blender", "Mark Ko", "Introduction to Scratch Programming", threeDCode]
  ];
  
  // the filter options:
function PrerequisiteSelect() {
    var temp=`<option>All Prerequisites</option>`;

    for(var i=0; i<courses.length ; i++){
        var course=courses[i]; // to make it clearer in the next step when accessing each course's array

        /*the condition states that if there is a prerequisite for this course
         and the existing temp string doesnt have the prerequisite name already
          then add the prerequisite to the string*/
        if(course[2] !== "" && !temp.includes(course[2])) //course[2] is the third element in each course which is the prerequisite
        temp += `<option>${course[2]}</option>`;

    }

    document.getElementById("PrerequisitesOptions").innerHTML=temp; //displaying it in HTML in the select prerequisites
}

function TutorSelect() {
    var temp=`<option>All Tutors</option>`;

    for(var i=0; i<courses.length ; i++){
        var course=courses[i];
        /*the condition states that if there is a tutor for this course
         and the existing temp string doesnt have the tutor name already then add the tutor to the string*/
            if(course[1] !== "" && !temp.includes(course[1])) //course[1] is the second element in each course which is the tutor
            temp += `<option>${course[1]}</option>`;

    }
    document.getElementById("TutorsOptions").innerHTML=temp; //displaying it in HTML in the select tutors
}

//creating the courses list for when the page loads
function CoursesList() {
    var temp= `<ul id="courseOptions">`; //creating the list

    for(var i=0; i<courses.length ; i++){
        var course=courses[i];
            if(!temp.includes(course[3])) //if the course code isnt already written in temp (the courseBox isnt there).
            temp+= `<li class="courseBox"> ${course[3]}</li>`; //writing the code of all courses

    }

    temp += `</ul>`;
    document.getElementsByClassName("output")[0].innerHTML = temp; //displaying it in the div i made with class output in HTML
}

//the filtering:
function filter(){
    //check the input the user chose
    var selectedPrerequisite = document.getElementById("PrerequisitesOptions").value;
    var selectedTutor = document.getElementById("TutorsOptions").value;

    var temp= ``;
    var result=[];

    if(selectedPrerequisite == "All Prerequisites" && selectedTutor == "All Tutors"){
        for(var i=0; i<courses.length ; i++){
            var course=courses[i];
                result.push(course); //creating a result array of the courses that will be displayed in the form
        }
    }

    if(selectedPrerequisite != "All Prerequisites"){ //if the user chose a prerequisite
        result=[];
        for(var i=0; i<courses.length ; i++){
            var course=courses[i];
                if(course[2] == selectedPrerequisite)  //if the prerequisite of the course matches the selected one
                result.push(course); // add it to the result
        }
    }

    if(selectedTutor != "All Tutors"){ // if a tutor is selected
        result=[]; //to prevent conflict from the two filter options
        for(var i=0; i<courses.length ; i++){
            var course=courses[i];
                if(course[1] == selectedTutor)  //if the tutor of the course matches the selected one
                result.push(course); // add it to the result
    
        }
    }

    if(result.length>0){ // if there is a result 
        var temp= `<ul id="courseOptions">`;

         //create the list of the courses based on the result array 
        for(var i=0; i<result.length ; i++){
            var course=result[i];
            temp += `<li class="courseBox"> ${course[3]}</li>`; 
    
        }
    }
    else{
        temp=`<div class="noCourses"> No Courses Found </div> `;
    }

    temp += `</ul>`;

    document.getElementsByClassName("output")[0].innerHTML=temp; //display it in the output div in HTML

}

//validating the inputs:
function validate(){
    var kidSelect= document.getElementById("kidOptions").value; //to get the value of the dropdown menu for kids
    var courseCheckbox=document.querySelectorAll('input[name="Course"]:checked'); //the selected courses

    //if there was no kid selected
    if(kidSelect=="select"){ 
        alert("Please select a kid to enroll!");
        return false;
    }

    //if there was no course selected
    if(courseCheckbox.length<=0){
        alert("Please select a course!");
        return false;
    }

    //otherwise
    return true;


}

//to print the form information in the page
function print(event) {
    
    //creating the message and getting the user's input
    var message = 'Enrollment Information:<br><br>'; 
    var checkBoxes = document.querySelectorAll('input[name="Course"]:checked');
    var childName = document.getElementById('kidOptions').value;

        message += 'Child Name: ' + childName + "<br><br>"; 

    //to go through every checked course
    for (var i = 0; i < checkBoxes.length; i++) { 
         //to match the courses with the ones in the array and find the tutor of each one
        for (var j = 0; j < courses.length; j++) {
            var course=courses[j];
            if (course[0] === checkBoxes[i].value) { //if the name matches
                message += 'Course Name: ' + course[0]+ '<br>';
                message += 'Course Tutor: ' + course[1] + "<br><br>";
                break; // Exit the inner loop once a match is found
            }
        }
    }

    document.getElementById('printedContainer').innerHTML= `<div id="printedInfo"></div>`; //for styling purposes

    // Clear previous information
    document.getElementById('printedInfo').innerHTML = '';

    // Display new information
    document.getElementById('printedInfo').innerHTML = message;

    // Clear the form fields
    document.getElementById('enrollForm').reset();

    event.preventDefault();
}

//for changing the themes
function onloadE(){
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') ==='true' );
}

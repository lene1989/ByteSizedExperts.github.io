// Multidimensional array for Course and tutors
// to create an output code using JavaScript I divided the code for each course:

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
  



function PrerequisiteSelect() {
    var temp=`<option>All Prerequisites</option>`;

    for(var i=0; i<courses.length ; i++){
        var course=courses[i];
        if(course[2] !== "" && !temp.includes(course[2]))
        temp += `<option>${course[2]}</option>`;

    }

    document.getElementById("PrerequisitesOptions").innerHTML=temp;
}

function TutorSelect() {
    var temp=`<option>All Tutors</option>`;

    for(var i=0; i<courses.length ; i++){
        var course=courses[i];
            if(course[1] !== "" && !temp.includes(course[1]))
            temp += `<option>${course[1]}</option>`;

    }
    document.getElementById("TutorsOptions").innerHTML=temp;
}



function CoursesList() {
    var temp= `<div id="courseOptions">`;

    for(var i=0; i<courses.length ; i++){
        var course=courses[i];
            if(!temp.includes(course[3]))
            temp+= `<div class="courseBox"> ${course[3]}</div>`;

    }

    temp += `</div>`;
    document.getElementsByClassName("output")[0].innerHTML = temp;
}

function filter(){
    var selectedPrerequisite = document.getElementById("PrerequisitesOptions").value;
    var selectedTutor = document.getElementById("TutorsOptions").value;

    var temp= ``;
    var result=[];

    if(selectedPrerequisite == "All Prerequisites" && selectedTutor == "All Tutors"){
        for(var i=0; i<courses.length ; i++){
            var course=courses[i];
                result.push(course);
        }
    }

    if(selectedPrerequisite != "All Prerequisites"){
        result=[];
        for(var i=0; i<courses.length ; i++){
            var course=courses[i];
                if(course[2] == selectedPrerequisite)
                result.push(course);
    
        }
    }

    if(selectedTutor != "All Tutors"){
        result=[];
        for(var i=0; i<courses.length ; i++){
            var course=courses[i];
                if(course[1] == selectedTutor)
                result.push(course);
    
        }
    }

    if(result.length>0){
        var temp= `<div id="courseOptions">`;

        for(var i=0; i<result.length ; i++){
            var course=result[i];
            temp += `<div class="courseBox"> ${course[3]}</div>`
    
        }
    }
    else{
        temp=`<div class="noCourses"> No Courses Found </div> `;
    }

    temp += `</div>`;

    document.getElementsByClassName("output")[0].innerHTML=temp;

}

function validate(){
    var kidSelect= document.getElementById("kidOptions").value;
    var courseCheckbox=document.querySelectorAll('input[name="Course"]:checked');

    if(kidSelect=="select"){
        alert("Please select a kid to enroll!");
        return false;
    }

    if(courseCheckbox.length<=0){
        alert("Please select a course!");
        return false;
    }
    return true;


}

function print(event) {

    var message = 'Enrollment Information:<br><br>';
    var checkBoxes = document.querySelectorAll('input[name="Course"]:checked');
    var childName = document.getElementById('kidOptions').value;

        message += 'Child Name: ' + childName + "<br><br>";

    for (var i = 0; i < checkBoxes.length; i++) {
        for (var j = 0; j < courses.length; j++) {
            var course=courses[j];
            if (course[0] === checkBoxes[i].value) {
                message += 'Course Name: ' + course[0]+ '<br>';
                message += 'Course Tutor: ' + course[1] + "<br><br>";
                break; // Exit the inner loop once a match is found
            }
        }
    }

    document.getElementById('printedContainer').innerHTML= `<div id="printedInfo"></div>`;

    // Clear previous information
    document.getElementById('printedInfo').innerHTML = '';

    // Display new information
    document.getElementById('printedInfo').innerHTML = message;

    // Clear the form fields
    document.getElementById('enrollForm').reset();

    event.preventDefault();
}

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

function onloadE(){
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') ==='true' );
}

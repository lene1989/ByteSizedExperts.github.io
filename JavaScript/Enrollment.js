// Multidimensional array for courses and tutors
// to create an output code using JavaScript I divided the code for each course:

var scratchCode= `<img src="images/Scratch.png" alt="scratch logo" style="height:4.5vw; width:4.5vw;">
Introduction to Scratch Programming`;
var pythonCode= `<img src="images/free-python.jpeg" alt="Python interface" style="height:4.5vw; width:4.5vw;">
Python for Kids`;
var webCode= `<img src="images/web.png" alt="Web apps logos" style="height:4.5vw; width:4.5vw;">
Web Development for Young Innovators`;
var gameCode = ` <img src="images/unity1.jpg" alt="Unity logo" style="height:4.5vw; width:4.5vw;">
Game Development with Unity`;
var mobileCode= ` <img src="images/mit-app.png" alt="App inventor logo" style="height:4.5vw; width:4.5vw;">
Mobile App Development with App Inventor`;
var javaScriptCode= `<img src="images/JavaScript-logo.png" alt="Javascript logo" style="height:4.5vw; width:4.5vw;">
JavaScript Adventures`;
var dataScienceCode = `<img src="images/AI-cover-image.png" alt="AI with kids" style="height:4.5vw; width:4.5vw;">
Data Science for Kids`;
var javaCode = `<img src="images/Programming_java.jpg" alt="Java interface" style="height:4.5vw; width:4.5vw;">
Java Programming for beginners`;
var threeDCode = `<img src="images/blender.jpg" alt="Blender logo" style="height:4.5vw; width:4.5vw;">
3D Game Developer with blender`;

var courses = [
    { CourseName: "Introduction to Scratch Programming", tutor: "Nouf Alamri", prerequisite: "", code: scratchCode},
    { CourseName: "Python for Kids", tutor: "Ahmed Khalid", prerequisite: "", code: pythonCode },
    { CourseName: "Web Development for Young Innovators", tutor: "Tom David", prerequisite: "", code: webCode},
    { CourseName: "Game Development with Unity", tutor: "Wasan Abdullah", prerequisite: "Mobile App Development with App Inventor", code: gameCode  },
    { CourseName: "Mobile App Development with App Inventor", tutor: "Arwa Almousa", prerequisite:"Python for Kids", code: mobileCode },
    { CourseName: "JavaScript Adventures", tutor: "Fahad Alharbi", prerequisite: "Web Development for Young Innovators", code: javaScriptCode },
    { CourseName: "Data Science for Kids", tutor: "Lene Van", prerequisite: "Python for Kids", code: dataScienceCode },
    { CourseName: "Java Programming for Beginners", tutor: "Muhannad Ahmed", prerequisite: "", code: javaCode },
    { CourseName: "3D Game Developer with Blender", tutor: "Mark Ko", prerequisite: "Introduction to Scratch Programming", code: threeDCode},
];

function PrerequisiteSelect() {
    var temp=`<option>All Prerequisites</option>`;
    courses.forEach(course => {
        if (course.prerequisite && !temp.includes(course.prerequisite)) {
            temp += `<option>${course.prerequisite}</option>`;}});

    document.getElementById("PrerequisitesOptions").innerHTML=temp;
}

function TutorSelect() {
    var temp=`<option>All Tutors</option>`;
    courses.forEach(course => {
        if (course.tutor && !temp.includes(course.tutor)) {
            temp += `<option>${course.tutor}</option>`;}});
            
    document.getElementById("TutorsOptions").innerHTML=temp;
}



function CoursesList() {
    var temp= `<div id="courseOptions">`;
    courses.forEach((course) => {
        temp+= `<div class="courseBox"> 
        ${course.code}
        <input type="checkbox" name="course">
    </div>`
    });
    temp += `</div>`;
    document.getElementsByClassName("output")[0].innerHTML = temp;
}

function filter(){
    var selectedPrerequisite = document.getElementById("PrerequisitesOptions").value;
    var selectedTutor = document.getElementById("TutorsOptions").value;

    var temp= ``;
    var result=[];

    if(selectedPrerequisite == "All Prerequisites" && selectedTutor == "All Tutors"){
        result = courses;
    }

    if(selectedPrerequisite != "All Prerequisites"){
        result = courses.filter(course => course.prerequisite==selectedPrerequisite);
    }

    if(selectedTutor != "All Tutors"){
        result = courses.filter(course => course.tutor==selectedTutor);
    }

    if(result.length>0){
        var temp= `<div id="courseOptions">`;
        result.forEach((course) => {
             temp += `<div class="courseBox"> ${course.code} <input type="checkbox" name="course"> </div>`
            });
        temp += `</div>`;
    }
    else{
        temp=`<div class="noCourses"> No Courses Found </div> `;
    }

    document.getElementsByClassName("output")[0].innerHTML=temp;

}
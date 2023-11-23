

    // Function to sort tutors based on the selected order
    function sortTutors() {
      var sortOrder = document.getElementById("sortOrder").value;

// Sample list of tutors
    var tutors = [
      { name: "Ahmed Khalid", description: " Ahmad is a dedicated and experienced tutor with a passion for introducing kids to the world of programming through Python. With a background in computer science and a knack for making learning fun, Fahad specializes in making Python accessible and engaging for young learner" },
      { name: "Arwa Almousa", description: "Arwa is a passionate and experienced instructor with a knack for teaching mobile app development using MIT App Inventor. With a strong background in app development and a commitment to making the learning process accessible and fun, Arwa is dedicated to empowering students and aspiring app developers." },
      { name: "Fahad Alharbi", description: "Fahad is an experienced and passionate educator who is on a mission to make JavaScript learning an exciting adventure. With a background in web development and a deep love for programming, Fahad is dedicated to guiding students through the wonders of JavaScript, empowering them to create web applications and interactive experiences." },
      { name: "Lene Van", description: "Lene Van is a passionate and experienced educator with a mission to make the exciting world of data science accessible to young learners. With a background in data analysis and a love for teaching, Lene is dedicated to nurturing the budding data scientists of the future." },
      { name: "Mrak Ko", description: "Mark Ko is an experienced and enthusiastic tutor who specializes in teaching the art of 3D game development using Blender. With a background in game design and a passion for creating immersive worlds, Mark is dedicated to guiding students through the exciting journey of game development." },
      { name: "Muhannad Ahmed", description: "Muhannad is a dedicated and experienced tutor with a passion for introducing beginners to the world of Java programming. With a strong educational background and a patient, step-by-step teaching style, Muhannad is committed to making the learning process engaging and accessible for newcomers to programming" },
      { name: "Nouf Alamri", description: "Nouf is a passionate and experienced tutor who specializes in teaching Introduction to Scratch Programming. With a strong educational background and a love for computer science, Nouf is dedicated to helping students, both young and old, unlock their creative potential through coding" },
      { name: "Tom David", description: "Tom David is an experienced and passionate educator who specializes in teaching web development to young learners. With a background in web design and development, Tom is dedicated to inspiring and guiding the next generation of innovators." },
      { name: "Wasan Abdullah", description: "Wasans is a seasoned and enthusiastic instructor with a deep passion for teaching game development using Unity. With extensive experience in the field of game design and a commitment to nurturing aspiring game developers, Maha is dedicated to helping students unleash their creativity through game development." },
    
    ]
    // convert
    var tutorsArray = Array.from(tutors)


      tutors.sort(function(a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();

        if (sortOrder === "az") {
          return nameA.localeCompare(nameB);
        } else if (sortOrder === "za") {
          return nameB.localeCompare(nameA);
        }
      });

      tutorsArray.forEach(function(tutor) {
        tutorsContainer.appendChild(tutor);
      });

    }

    

/*function userOption() {
    // Check the selected option and call the appropriate function
    if (sortOption === "az") {
      sortDivContent();
    } else if (sortOption === "za") {
      reverseDivContent();
    }
  }

// Function to sort the div's content in alphabetical order
function sortDivContent() {
    // Get the div element by its ID
    var div = document.getElementsByClassName("tutor");
  
    // Get the content of the div
    var content = div.innerHTML;
  
    // Split the content into an array of words/elements
    var array = content.split(" ");
  
    // Sort the array in alphabetical order
    array.sort();
  
    // Join the sorted array elements back into a string
    var sortedContent = array.join(" ");
  
    // Update the div's content with the sorted string
    div.innerHTML = sortedContent;
  }
  
  // Function to reverse the div's content
  function reverseDivContent() {
    // Get the div element by its ID
    var div = document.getElementsByClassName("tutor");
  
    // Get the content of the div
    var content = div.innerHTML;
  
    // Split the content into an array of characters
    var array = content.split("");
  
    // Reverse the array
    array.reverse();
  
    // Join the reversed array elements back into a string
    var reversedContent = array.join("");
  
    // Update the div's content with the reversed string
    div.innerHTML = reversedContent;
  }

// Add event listener to the dropdown menu
document.getElementById("sort").addEventListener("change", userOption);

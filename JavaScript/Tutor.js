
function sortTutors() {

    // Get the selected value from the dropdown
    var sortValue = document.getElementById("sortOrder").value;

    // Get the container of the tutors
    var container = document.querySelector(".tutors-box-container");

    // Get all the tutors inside the container
    var tutors = document.querySelectorAll(".tutor");

    // Convert the NodeList to an array for easier sorting
    var tutorsArray = Array.from(tutors);

    // Define a function for sorting the tutors names
    function compareNames(a, b) {

      var nameA = a.querySelector("strong").innerText.toUpperCase();
      var nameB = b.querySelector("strong").innerText.toUpperCase();

      if (sortValue === "az") {
        return nameA.localeCompare(nameB);

      } else 
      if (sortValue === "za") {
        return nameB.localeCompare(nameA);
      }
    }

    // Sort the tutors Array based on the compareNames function
    tutorsArray.sort(compareNames);

    // Clear the container
    container.innerHTML = "";

    // Append the sorted tutorss back to the container
    tutorsArray.forEach(function (tutors) {

      container.appendChild(tutors);
    });

  }
  // Add event listener to the dropdown
  document.getElementById("sortOrder").addEventListener("change", sortTutors);
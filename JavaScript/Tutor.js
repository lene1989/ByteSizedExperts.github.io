
// Function to handle the dropdown menu selection
function userOption() {
    // Get the selected option from the dropdown menu
    var sortOption = document.getElementById("sort").value;
  
    // Check the selected option and call the appropriate function
    if (sortOption === "az") {
      sortDivContent();
    } else if (sortOption === "za") {
      reverseDivContent();
    }
  }

  // Add event listener to the dropdown menu
document.getElementById("sort").addEventListener("change", userOption);


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




    function validateForm() {
        var courseSelect = document.getElementById("coursesSelect");
        var rating = document.querySelectorAll('input[name="rating"]:checked');

        // Check if a course is selected
        if (courseSelect.value == "Select") {
            alert("Please select a course!");
            return false;
        }

        // Check if a rating is selected
        if (rating.length == 0) {
            alert("Please select a rating!");
            return false;
        }

        // Form is valid, construct the message
        var selectedCourse = courseSelect.value;
        var userRating = rating.length;

        alert("Thank you for your feedback!\nYour rating for course ' " + selectedCourse + " ' is " + userRating);
        return true;
    }

    function message() {
        var courseSelect = document.getElementById("coursesSelect");
        var rating = document.querySelectorAll('input[name="rating"]:checked');

        // Form is valid, construct the message
        var selectedCourse = courseSelect.value;
        var userRating = rating.length;

        alert("Thank you for your feedback!\nYour rating for course ' " + selectedCourse + " ' is " + userRating);
    }
    
    function handleRating(selectedRating) {
        const stars = document.getElementsByName('rating');

        for (let i = 0; i < stars.length; i++) {
            stars[i].disabled = true; // Disable all stars after the first
        }
            for (let i = 1; i < stars.length; i++) {
           stars[i].disabled = i > selectedRating;} // Enable stars up to selected rating

    }
    
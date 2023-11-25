
//the feedback message
    function message() { 
        //collecting the user's input
        var courseSelect = document.getElementById("coursesSelect"); 
        var rating = document.querySelectorAll('input[name="rating"]:checked');

        var selectedCourse = courseSelect.value;
        var userRating = rating.length;

        //constructing the message
        alert("Thank you for your feedback!\nYour rating for course ' " + selectedCourse + " ' is " + userRating);
    }
    
    /*to make the user cant check the star unless the previous one is checked
     this helps in validation because i wanna make the first star required  and the rest disabled
     unless the first star is checked */
    function handleRating(selectedRating) {
        const stars = document.getElementsByName('rating');

        for (let i = 0; i < stars.length; i++) {
            stars[i].disabled = true; // Disable all stars after the first
        }
            for (let i = 1; i < stars.length; i++) {
           stars[i].disabled = i > selectedRating;} // Enable stars up to selected rating

    }
    
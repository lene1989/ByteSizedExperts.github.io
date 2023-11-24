
// Use separate variables and functions for each list of kids name 
var moreKNames1 = document.querySelector('.more-knames1');
var dots1 = document.getElementById('dots1');
var button1 = document.getElementById('Button1');
var isReadMore1 = true;

var moreKNames2 = document.querySelector('.more-knames2');
var dots2 = document.getElementById('dots2');
var button2 = document.getElementById('Button2');
var isReadMore2 = true;

var moreKNames3 = document.querySelector('.more-knames3');
var dots3 = document.getElementById('dots3');
var button3 = document.getElementById('Button3');
var isReadMore3 = true;

function ReadMore(List) {
  var moreKNames, dots, button, isReadMore;

  // Set variables based on the section
  if (List === 1) {
    moreKNames = moreKNames1;
    dots = dots1;
    button = button1;
    isReadMore = isReadMore1;
  } else if (List === 2) {
    moreKNames = moreKNames2;
    dots = dots2;
    button = button2;
    isReadMore = isReadMore2;
  } else if (List === 3) {
    moreKNames = moreKNames3;
    dots = dots3;
    button = button3;
    isReadMore = isReadMore3;
  }

  if (isReadMore) {
    moreKNames.style.display = 'inline';
    dots.style.display = 'none';
    button.textContent = 'View Less';
  } else {
    moreKNames.style.display = 'none';
    dots.style.display = 'inline';
    button.textContent = 'View More';
  }
  // the state of the read more
  if (List === 1) {
    isReadMore1 = !isReadMore1;
  } else if (List === 2) {
    isReadMore2 = !isReadMore2;
  } else if (List=== 3) {
    isReadMore3 = !isReadMore3;
  }
}
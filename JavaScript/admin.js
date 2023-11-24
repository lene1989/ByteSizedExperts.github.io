// The Read more JavaScript
                var moreKNames = document.querySelector('.more-knames');
            var dots = document.getElementById('dots');
            var button = document.getElementById('readMoreButton');
            var isReadMore = true;
        
            function toggleReadMore() {
              if (isReadMore) {
                moreKNames.style.display = 'inline';
                dots.style.display = 'none';
                button.textContent = 'Read Less';
              } else {
                moreKNames.style.display = 'none';
                dots.style.display = 'inline';
                button.textContent = 'Read More';
              }
              isReadMore = !isReadMore;
            }
            
         }
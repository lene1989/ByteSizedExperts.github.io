
function childCard(){
  if(!localStorage.getItem("children")){
      var children=['Farah','Ahmed'];
      localStorage.setItem('children', JSON.stringify(children));
  }
  
  var childrenNames= JSON.parse(localStorage.getItem('children'));
  
  var container='';
  
  
  
  for(var i=0; i<childrenNames.length ; i++){
      container+=`<div class="child-card" style="border-color: white;">
      <h2>${childrenNames[i]}</h2>`;
  
      if(childrenNames[i]=="Demah")
      {container+=`<img src="images/kid3.png" alt="picture of the kid"  style="width:100px;height:100px";id="child3-image">
      <div class="child-info">
        Age: 11 years<br>
        Courses Enrolled : Python for kids
      </div>
      </div>`;}
      else if(childrenNames[i]=="Farah"){
          container+=`<img src="images/kid1.png" alt="picture of the kid " style="width:7.8vw;height:7.8vw;"id="child1-image">
          <div class="child-info">
         Age: 8 years<br>
         Courses Enrolled : Python for kids
      
      </div>
        </div>`;}
        else if(childrenNames[i]=="Ahmed"){
          container+=`<img src="images/kid2.png" alt="picture of the kid" style="width:100px;height:100px"; id="child2-image">
          <div class="child-info">
            Age: 9 years<br>
            Courses Enrolled : Introduction to Scratch programming
        </div>
       </div>`;
        }
        else {
          container+=`<img src="images/kid4.png" alt="picture of the kid" style="width:100px;height:100px"; id="child2-image">
          <div class="child-info">
            Age: 10 years<br>
            Courses Enrolled : Web development for young innovators
        </div>
       </div>`;
        }
  
      } 
      
      document.getElementById('cardContainer').innerHTML=container;
      document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') ==='true' );
}

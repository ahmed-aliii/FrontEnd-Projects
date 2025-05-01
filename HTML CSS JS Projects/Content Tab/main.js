// Select Tabs li Elements And Content Div Elements
let tabsLiElements = document.querySelectorAll(".tabs li")
let contentDivElements = document.querySelectorAll('.content > div');

// Loop on Every Li Element
tabsLiElements.forEach(function(liElement){

  // Add Event To Every Li Tab
  liElement.addEventListener('click' , function(event){
    // Delete Active From All Li Elements
    tabsLiElements.forEach(function(li){
      li.classList.remove('active');
    });
    // Add Active To Clicked Li Tab 
    event.target.classList.add('active');
    
    // Remove Active To All Content Elements
    contentDivElements.forEach(function(div){
    div.classList.remove('active');
  });

  contentDivElements.forEach(function(div){
    if(event.target.getAttribute('order') === div.getAttribute('order')){
      div.classList.add('active');
    }
  });
  });
});
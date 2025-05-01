// Select Element

let span = document.querySelector(".up");

window.onscroll = function(){
  
  if(this.scrollY >= 1000){
    // Show The Button
    span.classList.add('show');
  }
  else{
    // DON'T Show The Button
    span.classList.remove('show');
  }
  
}

// Add Event To Scroll To Top
span.onclick = function(){
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  })
};


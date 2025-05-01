// Select body Element
let bodyElement = document.querySelector('body');

let arrayOfImages = ['01.jpg' , '02.jpg' , '03.jpg' , '04.jpg' , '05.jpg' ];
let randomNumber = Math.floor(Math.random() * arrayOfImages.length);
bodyElement.onload = function(){

  bodyElement.style.backgroundImage = 'url('+arrayOfImages[randomNumber]+')';
}
// Select Elements
let serialBox = document.querySelector('.serial');
let serialButton = document.querySelector('.generator');

let serialChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let serialLenth = 10;
let serial = "";

serialButton.onclick = function(){
  let serialChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let serialLenth = 10;
  let serial = "";
  for(let i=0; i<serialLenth; i++){
    serial += serialChars[Math.floor(Math.random() * (serialChars.length-1))];
  }
  serialBox.innerHTML = serial;
  serial = "";
};

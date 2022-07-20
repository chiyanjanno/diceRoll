var random1 = Math.floor(Math.random()*6)+1;
// making number correspond to path
var randoMnumber1 = "dice"+random1 + ".png";
var path  = "images/"+randoMnumber1;

document.querySelector(".img1").setAttribute("src",path);

// code for second dice
var random2 = Math.floor(Math.random()*6)+1;

var randoMnumber2 = "dice"+random2+".png";

var path2 = "images/"+randoMnumber2;

document.querySelector(".img2").setAttribute("src",path2);

if (random1>random2){
  document.querySelector("h1").innerHTML = "&#x1F6A9 player 1 wins";
}
else if (random1<random2) {
  document.querySelector("h1").innerHTML = "player 2 wins &#x1F6A9";
}
else{
  document.querySelector("h1").innerHTML = "Draw ";
}


var randomnumber1 = Math.ceil(Math.random()*6);
var randomnumber2 = Math.ceil(Math.random()*6);

var img1 = document.querySelector("img.img1");
var img2 = document.querySelector("img.img2");

img1.setAttribute("src", "images/dice" + randomnumber1 + ".png");
img2.setAttribute("src", "images/dice" + randomnumber2 + ".png");

var title = document.querySelector("h1");

if(randomnumber1 > randomnumber2){
    title.innerHTML = "🚩 Player 1 Wins!";
}
else if(randomnumber1 === randomnumber2){
    title.innerHTML = "Draw!";
}
else{
    title.innerHTML = "Player 2 Wins! 🚩";
}

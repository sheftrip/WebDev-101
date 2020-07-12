var drums = document.querySelectorAll(".drum");
var n = drums.length;

console.log(n);

for(var i = 0; i<n; i++){

    drums[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    var audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3");
            break;
    
        default:
            break;
    }
    audio.play();
}

function buttonAnimation(key){

    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function(){document.querySelector("." + key).classList.remove("pressed")}, 100);
}

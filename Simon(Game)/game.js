var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(".btn").click(function () {
    var userChosenColor = this.id;

    playSound(userChosenColor);

    animatedPress(userChosenColor);

    userClickedPattern.push(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        newSequence();
        started = true;
    }
});

function newSequence() {

    level++;
    $("#level-title").text("Level " + level);
    userClickedPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    // console.log(randomChosenColour);

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    animatedPress(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatedPress(currentColour) {

    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length) {


            setTimeout(function () {
                newSequence();
            }, 1000);

        }

    } else {

        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
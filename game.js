//taking elements from html 
const scoreuser=document.getElementById("scoreuser")
const scorecomp=document.getElementById("scorecomp")
const userimg=document.getElementById("ranimg1")
const compimg=document.getElementById("ranimg2")
const rock=document.getElementById("rock")
const paper=document.getElementById("paper")
const scissor=document.getElementById("scissor")
const final=document.getElementById("final")
const winner=document.getElementById("win")
const playAgainbtn=document.getElementById("playagain")

//random function
options=["Rock","Paper","Scissors"]
function random(){
    return options[Math.floor(Math.random()*3)]
}

//making choices functional
let compChoice
let userChoice
let userScore=0
let compScore=0

//for rock
rock.onclick = function() {
    compChoice=random();
    userChoice="Rock";
    // console.log("hi")
    userimg.src = "assets/rock-hand.png";
    compimgchoice(compChoice);

    if (compChoice === "Paper") {
        compScore++;
    } else if (compChoice === "Scissors") {
        userScore++;
    }
    updateScore(compScore, userScore);
    checkWinner();
};

paper.onclick = function() {
    compChoice=random();
    userChoice="Paper";
    console.log("hello")
    userimg.src = "assets/paper-hand.png";
    compimgchoice(compChoice);

    if (compChoice === "Scissors") {
        compScore++;
    } else if (compChoice === "Rock") {
        userScore++;
    }
    updateScore(compScore, userScore);
    checkWinner();
};

scissor.onclick = function() {
    compChoice = random();
    userChoice = "Scissors";
    userimg.src = "assets/scissors-hand.png"; 
    compimgchoice(compChoice);

    if (compChoice === "Rock") {
        compScore++;
    } else if (compChoice === "Paper") {
        userScore++;
    }
    updateScore(compScore, userScore);
    checkWinner();
};




//generating comp random img
function compimgchoice(compChoice) {
    if (compChoice === "Rock") {
        compimg.src = "assets/rock-hand.png";
    } else if (compChoice === "Paper") {
        compimg.src = "assets/paper-hand.png";
    } else if (compChoice === "Scissors") {
        compimg.src = "assets/scissors-hand.png";
    }
}
//updating score
function updateScore(compScore , userScore){
    scoreuser.innerHTML = userScore
    scorecomp.innerHTML = compScore
}
// winner check
function checkWinner() {
    if (userScore === 5 || compScore === 5) {
        final.style.display = "block";
        if (userScore === 5) {
            winner.innerHTML = "You";
        } else {
            winner.innerHTML = "Computer";
        }
    }
}

//play again btn
playAgainbtn.onclick = () =>{
    location.href = "./index.html"
}
 
var choices = ["paper" , "rock", "scissors"];
var i = Math.floor( Math.random()*3);
var ComChoice = choices[i];
var UserPoints =0;
var ComputerPoints=0;

function score(){
    var score_div = document.getElementById("score").innerHTML = UserPoints + " - " + ComputerPoints;
}
setInterval(score, 50);

function convert(word){
    if(word === "paper")  return '<i class="far fa-hand-paper"></i>';
    if(word === "rock")  return '<i class="far fa-hand-rock"></i>';
    return '<i class="far fa-hand-scissors"></i>';
}

function win(bn){
    UserPoints++;
    document.getElementById("who").innerHTML = "You win!";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("green");
    setTimeout( ()=>{
        bn.classList.remove("bn");
        bn.classList.add("green");
    }, 1200);
}
function draw(bn){
    document.getElementById("who").innerHTML = "It's a Tie!";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("gray");
    setTimeout( ()=>{
        bn.classList.remove("bn");
        bn.classList.add("gray");
    }, 1200);
}
function lose(bn){
    ComputerPoints++;
    document.getElementById("who").innerHTML = "You lose..";
    var bn = document.getElementById(bn);
    bn.classList.remove("bn");
    bn.classList.add("red");
    setTimeout( ()=>{
        bn.classList.remove("bn");
        bn.classList.add("red");
    }, 1200);
}

function game(UserChoice){
    var box = document.getElementById("challenge");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("YourObject");
    userDiv.innerHTML = convert(UserChoice);
    var comDiv = document.getElementById("ComObject");
    comDiv.innerHTML = convert(ComChoice);
    if(UserChoice === "paper" && ComChoice === "rock" || UserChoice === "rock" && ComChoice === "scissors" || UserChoice === "scissors" && ComChoice === "paper" ){
        win(UserChoice);
    }
    else if( UserChoice === ComChoice){
        draw(UserChoice);
    }
    else{
        lose(UserChoice);
    }

    function continueGame(){
        i= Math.floor( Math.random()*3);
        ComChoice = choices[i];
        box.style.display = "none";
    }
    setTimeout(continueGame, 1200);
}
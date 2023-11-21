//const prompt = require("prompt-sync")();

function getComputerChoice(){
    let randomNum=Math.floor(Math.random()*3)

    if (randomNum==0){
        return "rock";
    }
    if (randomNum==1){
        return "paper";
    }
    if(randomNum==2){
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    // your code here!
    let resultMessage='';
    const eachResultMessage=document.getElementById('each-result-message');

    let player=playerSelection.toLowerCase();
    if(player=='rock'){
        if(computerSelection=='rock'){
            resultMessage="Tie!";
            eachResultMessage.textContent=resultMessage;
            return 0;
        }
        if(computerSelection=='paper'){
            resultMessage="You Lose! Paper beats Rock";
            eachResultMessage.textContent=resultMessage;
            return 1;
        }
        else{
            resultMessage="You Win! Rock beats Scissors";
            eachResultMessage.textContent=resultMessage;
            return 2;
        }
    }

    if(player=='paper'){
        if(computerSelection=='paper'){
            resultMessage="Tie!";
            eachResultMessage.textContent=resultMessage;
            return 0;
        }
        if(computerSelection=='scissors'){
            resultMessage="You Lose! Scissors beats Paper";
            eachResultMessage.textContent=resultMessage;
            return 1;
        }
        else{
            resultMessage="You Win! Paper beats Rock";
            eachResultMessage.textContent=resultMessage;
            return 2;
        }
    }

    if(player=='scissors'){
        if(computerSelection=='scissors'){
            resultMessage="Tie!";
            eachResultMessage.textContent=resultMessage;
            return 0;
        }
        if(computerSelection=='rock'){
            resultMessage="You Lose! Rock beats Scissors";
            eachResultMessage.textContent=resultMessage;
            return 1;
        }
        else{
            resultMessage="You Win! Scissors beats Paper";
            eachResultMessage.textContent=resultMessage;
            return 2;
        }
    }


  }


function game(){
    let playerScore=0;
    let computerScore=0;

    for (let i=0;i<5;i++){
        let playerSelection=prompt("Rock, Paper or Scissors?: ");

        while(playerSelection.toLowerCase()!="rock"&&playerSelection.toLowerCase()!="paper"&&playerSelection.toLowerCase()!="scissors"){
            playerSelection=prompt("Invalid input! Rock, paper, or scissors?: ");
        }


        let computerSelection=getComputerChoice();
        let played=playRound(playerSelection,computerSelection);
        if (played==0){
            playerScore+=1;
            computerScore+=1;
        }
        if(played==1){
            computerScore+=1;
        }
        if(played==2){
            playerScore+=1;
        }

        console.log("Player Score: "+playerScore);
        console.log("Computer Score: "+computerScore);
    }

    if(playerScore>computerScore){
        console.log("You win!");
    }
    if(computerScore>playerScore){
        console.log("You lose!");
    }
    else{
        console.log("Tie game!");
    }
}


//gameV2() is for playing the game with the buttons
function gameV2(){
    let playerScore=0;
    let computerScore=0;
    let currentRound=0;

    const pickRock=document.querySelector('#rock-button');
    const pickPaper=document.querySelector('#paper-button');
    const pickScissors=document.querySelector('#scissors-button');

    pickRock.addEventListener('click',()=>{
        playRoundV2('rock');
    });
    pickPaper.addEventListener('click',()=>{
        playRoundV2('paper');
    });
    pickScissors.addEventListener('click',()=>{
        playRoundV2('scissors');
    });

    function playRoundV2(playerSelection){
        if (playerScore!=5&&computerScore!=5){
        let computerSelection=getComputerChoice();
        let played=playRound(playerSelection,computerSelection);
        if (played==0){

        }
        else if(played==1){
            computerScore+=1;
        }
        else{
            playerScore+=1;
        }

        const currentPScore=document.getElementById('playerScore');
        const currentCScore=document.getElementById('computerScore');
        currentPScore.textContent=`Player Score: ${playerScore}`;
        currentCScore.textContent=`Computer Score: ${computerScore}`;

        currentRound+=1;

        if(playerScore==5||computerScore==5){
            endGame();
        }
    }
    }

    function endGame(){

        const resultContainer=document.getElementById('final-results');

        if(playerScore>computerScore){
            resultContainer.textContent="You win!";
        }
         else if(computerScore>playerScore){
            resultContainer.textContent="You lose!";
        }
        else{
            resultContainer.textContent="Tie game!";
        }
    }

}

gameV2();

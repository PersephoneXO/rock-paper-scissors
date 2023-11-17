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


    let player=playerSelection.toLowerCase();
    if(player=='rock'){
        if(computerSelection=='rock'){
            console.log("Tie!");
            return 0;
        }
        if(computerSelection=='paper'){
            console.log("You Lose! Paper beats Rock");
            return 1;
        }
        else{
            console.log("You Win! Rock beats Scissors");
            return 2;
        }
    }

    if(player=='paper'){
        if(computerSelection=='paper'){
            console.log("Tie!");
            return 0;
        }
        if(computerSelection=='scissors'){
            console.log("You Lose! Scissors beats Paper");
            return 1;
        }
        else{
            console.log("You Win! Paper beats Rock");
            return 2;
        }
    }

    if(player=='scissors'){
        if(computerSelection=='scissors'){
            console.log("Tie!");
            return 0;
        }
        if(computerSelection=='rock'){
            console.log("You Lose! Rock beats Scissors");
            return 1;
        }
        else{
            console.log("You Win! Scissors beats Paper");
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

game();

let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const genCompChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play again !!!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        console.log("you win!");
        msg.innerText = 'You win! ${userChoice} beats ${compChoice}';
        msg.style.backgroundColor = "green";
    } else {
        console.log("you lose");
        msg.innerText ='You win ! ${compChoice} beats ${userChoice}';
        msg.style.backgroundColor = "red";
    }
}
playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
//    generate computer choice 

const compChoice = genCompChoice();
console.log("comp choice =", compChoice);

 if (userChoice ===compChoice)
 {
    // draw game 
    drawGame();
 }
 else
 {
    let userWin = true;

    if(userChoice === "rock")
    {
        // Scissors,paper 

        userWin = compChoice ==="paper"? false: true;
    }
    else if(userChoice ==="paper") 
    {
        // rock , scissors

        userWin = compChoice === "scissors"?false:true;
    }
    else
    {
        // rock , paper 

        userWin = compChoice === "rock"?false: true;
    }
    showWinner(userWin);
 }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    
    playGame(userChoice);
    })
})
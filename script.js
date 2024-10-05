let userScore = 0;
let compScore = 0;

//ACCESSING ALL THE CHOICES PART
const choices = document.querySelectorAll(".choice");
//ACCESSING THE MESSAGE PART
const msg = document.querySelector("#msg");
//ACCESSING THE USER SCORE
const userScorePara = document.querySelector("#user-score");
//ACCESSING THE COMPUTER SCORE 
const compScorePara = document.querySelector("#comp-score"); 
//ACCESSING THE COMPUTER SCORE

        //GENERATE-COMPUTER-CHOICE
const genCompChoice = () =>
{
    const options = ["rock", "paper", "scissors"];
        //GENERATING-RANDOM-NUMBER-FROM-COMPUTER-SIDE
    const randIdx = Math.floor(Math.random() * 3);
        //FINIAL COMPUTER-CHOICE
    return options[randIdx];
};

        //DRAW-GAME
    const drawGame = () =>
    {
        //console.log("Game Was Draw.......");
        msg.innerText = "HeHe Game Was Draw.. Play Again...";
        msg.style.backgroundColor = "orange";
    };

            //CREATING-WINNER-FUNCTION
        const showWinner = (userWin, userChoice, compChoice) =>
        {
            if(userWin)
            {
                userScore++;
                    //UPDATING THE USER-SCORE->WHEN USER WAS WON THE GAME
                userScorePara.innerText = userScore;

                //console.log("Congrats.. You Won...");
                msg.innerText = `You Win! Your ${userChoice} beats Your ${compChoice}`;
                msg.style.backgroundColor = "green";
            }
            else
            {
                compScore++;
                    //UPDATING THE COMPUTER-SCORE->WHEN USER WAS LOSE THE GAME
                compScorePara.innerText = compScore;

                //console.log("Oops..You Lose...");
                msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`;
                msg.style.backgroundColor = "red";
            }
        };
        //USER-CHOICE
const playGame = (userChoice) =>
{
    console.log("User Choice => ", userChoice);
        //GENERATE-COMPUTER-CHOICE
    const compChoice = genCompChoice();
    console.log("Computer Choice => ", compChoice);

        //FIGHTING-IN-BETWEEN-COMPUTER & USER
    if(userChoice === compChoice)
    {
        //DRAW-GAME CONDITION
        drawGame();
    }
    else
    {
            //WHEN USER WAS WIN
        let userWin = true;
                //FIRST-CASE
        if(userChoice === "rock")
        {
            /* MANDATORY CONDITION'S
            computer choice -> scissors, paper
            */
           userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
           /*   MANDATORY CONDITION'S
                computer choice -> rock, scissors
            */
            userWin = compChoice === "scissors" ? false : true;
        }
        else
        {
            /*   MANDATORY CONDITION'S
                computer choice ->rock, paper
            */
           userWin = compChoice === "rock" ? false : true;
        }

                //SHOWING THE WINNER OF THE GAME
        showWinner(userWin, userChoice, compChoice);
    }
};

        //CHOICE
choices.forEach((choice) =>
{
    choice.addEventListener("click", () =>
    {
            //GENERATE-USER-CHOICE
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
let humanscore = 0
let computerscore = 0
let gameover = false
function getcomputerchoice(){
    let x = Math.random()
    if (x<1/3)
    return "rock"
    else if (x<2/3)
    return "scissors"
    else 
    return "paper"
}
function playround(humanchoice,computerchoice){
    if (!gameover){
        //selecting html elements
        const player_choice = document.querySelector("#player")
        const computer_choice = document.querySelector("#computer")
        const round = document.querySelector("#round_result")
        const score = document.querySelector("#score")
        const game = document.querySelector("#game_result")
        
        //positioning the display under the corresponding choice
        player_choice.innerHTML = "You chose: " + humanchoice;
        computer_choice.innerHTML = "Computer chose: " + computerchoice;
        if (humanchoice === "rock")
            player_choice.style.textAlign = "left";
        else if (humanchoice === "paper")
            player_choice.style.textAlign = "center";
        else 
            player_choice.style.textAlign = "right";

        if (computerchoice === "rock")
            computer_choice.style.textAlign = "left";
        else if (computerchoice === "paper")
            computer_choice.style.textAlign = "center";
        else 
            computer_choice.style.textAlign = "right";



        if (computerchoice === humanchoice) {
            round.innerHTML = "It's a tie!"
        } else if (
            (computerchoice === "rock" && humanchoice === "scissors") ||
            (computerchoice === "scissors" && humanchoice === "paper") ||
            (computerchoice === "paper" && humanchoice === "rock")
        ) {
            round.innerHTML = "Computer wins Round!"
            computerscore++
        } else {
            round.innerHTML = "You win Round!"
            humanscore++
        }
        score.innerHTML = "your score: "+humanscore+"<br>computer score: "+computerscore
        if (humanscore == 5){
            game.innerHTML = "Player wins the game!!!<br>Press restart to play again"
            gameover = true

        }
        if (computerscore == 5){
            game.innerHTML = "Computer wins the game!!!<br>Press restart to play again"
            gameover = true
        }
    }
    else 
    return;
}
function replay(){
    gameover = false
    console.log(gameover)
    humanscore = 0
    computerscore = 0   
    document.querySelectorAll("#player, #computer, #round_result, #game_result, #score").forEach(field => {
        field.innerHTML = "";
    });
    document.querySelector("#score").innerHTML = "Your Score: 0<br>Computer score: 0"    
}
document.querySelector("#restart").addEventListener("click",() => replay())
document.querySelector("#rock").addEventListener("click",() => playround("rock",getcomputerchoice()))
document.querySelector("#paper").addEventListener("click",() => playround("paper",getcomputerchoice()))
document.querySelector("#scissors").addEventListener("click",() => playround("scissors",getcomputerchoice()))
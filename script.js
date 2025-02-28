let humanscore = 0
let computerscore = 0
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
    const result = document.querySelector("#result")
    result.textContent=""
    result.innerHTML += "<br>Computer chose: " + computerchoice + "<br>You chose: " + humanchoice;


    if (computerchoice === humanchoice) {
        result.innerHTML += "<br>It's a tie!"
    } else if (
        (computerchoice === "rock" && humanchoice === "scissors") ||
        (computerchoice === "scissors" && humanchoice === "paper") ||
        (computerchoice === "paper" && humanchoice === "rock")
    ) {
        result.innerHTML += "<br>Computer wins Round!"
        computerscore++
    } else {
        result.innerHTML += "<br>You win Round!"
        humanscore++
    }
    result.innerHTML += "<br>your score: "+humanscore+"<br>computer score: "+computerscore
    if (humanscore == 5){
        result.innerHTML += "<br>Player wins the game!!!"
        humanscore = 0
        computerscore = 0
    }
    if (computerscore == 5){
        result.innerHTML += "<br>Computer wins the game!!!"
        humanscore = 0
        computerscore = 0
    }
}
document.querySelector("#rock").addEventListener("click",() => playround("rock",getcomputerchoice()))
document.querySelector("#paper").addEventListener("click",() => playround("paper",getcomputerchoice()))
document.querySelector("#scissors").addEventListener("click",() => playround("scissors",getcomputerchoice()))
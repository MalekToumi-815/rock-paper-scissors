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
function gethumanchoice(){
    while (true){
        let x = prompt("choose between rock,paper and scissors: ").toLowerCase()
        if (x == null) return null
        if (x=="rock" || x=="paper" || x=="scissors")
        return x
        else
        console.log("wrong choice!!")
    }
}
function playround(humanchoice,computerchoice){
    if (humanchoice === null) {
    console.log("Game cancelled.");
    } else {
        console.log("Computer chose:", computerchoice);
        console.log("You chose:", humanchoice);

        if (computerchoice === humanchoice) {
            console.log("It's a tie!");
        } else if (
            (computerchoice === "rock" && humanchoice === "scissors") ||
            (computerchoice === "scissors" && humanchoice === "paper") ||
            (computerchoice === "paper" && humanchoice === "rock")
        ) {
            console.log("Computer wins Round!");
            computerscore++
        } else {
            console.log("You win Round!");
            humanscore++
        }
        console.log("your score: "+humanscore+"\ncomputer score: "+computerscore)
    }
}

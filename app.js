let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");
console.log(choices);
let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");
const CompChoice = () => {
  const options = ["rock","paper","scissor"]
  let id = Math.floor(Math.random() * 3);
  return options[id];
}
let msgs = document.querySelector("#msg");
const Winner = (userWin)=>{
 if(userWin === true){
    user += 1;
    console.log("You won!");
    userscore.innerText = user;
    msgs.innerText = "You won!";

 }
 else{
    comp += 1;
    compscore.innerText = comp;
    console.log("You lose");
    msgs.innerText = "You lose";
    
 }
};
const playGame = (UserChoice)=>{
//   console.log("user choice",UserChoice); 
   const Compchoice = CompChoice();
//    console.log("Comp choice",Compchoice); 
   if(UserChoice === Compchoice){
    console.log("game was draw");
    msgs.innerText = "Game was draw. Play again";
    
   }
   else{
    let userWin = true;
    if(UserChoice === "rock"){
        if(Compchoice === "paper"){
            userWin = false;
        }
        else{
            userWin = true;
        }
    }
    else if(UserChoice === "paper"){
        if(Compchoice === "scissor"){
            userWin = false;
        }
        else{
            userWin = true;
        }
    }
    else{
        if(Compchoice === "rock"){
            userWin = false;
        }
        else{
            userWin = true;
        }
    }
    Winner(userWin);
   }
};
choices.forEach((choice) => {
    choice.addEventListener('click',() =>{
        const UserChoice = choice.getAttribute("id");
        console.log(UserChoice);
        playGame(UserChoice);
    })
})




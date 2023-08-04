var wins = 0;
var losses = 0;
var ties = 0;

var options = ["R", "P" , "S"];

var playGame = function(){
    var userChoice = window.prompt("Enter R, P, or S:")
   
    if (!userChoice) {
        return;
    }
    
    userChoice = userChoice.toUpperCase();

    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];
    window.alert("the computer chose " + computerChoice);

    if (computerChoice === userChoice) {
        ties++;
        window.alert("its a tie");

    } else if (
        (userChoice == "R" && computerChoice == "S" ) ||
        (userChoice == "P" && computerChoice == "R" ) ||
        (userChoice == "S" && computerChoice == "P" )

     ) {
        wins++;
        window.alert("you win");
     } else {
        losses++;
        window.alert("you lost");
     }
     window.alert (
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
        );
        var playAgain = window.confirm("play again");

        if (playAgain){
            playAgain();
        }
};
playGame()
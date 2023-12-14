function playCraps() {
    console.log("playCraps() started");

    // Roll the dice and display the result
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;

    // Calculate and display the sum of the dice
    var sum = die1 + die2;
    document.getElementById("sumRes").innerHTML = sum;

    // Determine the outcome of the game
    if (sum == 7 || sum == 11) {
        document.getElementById("finRes").innerHTML = "You lose! Shoot again.";
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finRes").innerHTML = "You win! The Force is with you today.";
    } else {
        document.getElementById("finRes").innerHTML = "You have a draw. Try again.";
    }
}
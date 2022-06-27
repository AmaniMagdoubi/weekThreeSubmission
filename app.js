// variable of runningScore set to 0 outside function 
let runningScore = 0;

// An arrow function 
let diceFunction = () => {
    let gamingRunning = true;

    // Fetching audio from HTML document using the DOM then playing the audio 
    let diceAudio = document.getElementById("diceAudio"); 
    diceAudio.play(); 

    // Logic to get a random number between 1 - 6 
    diceValue = Math.floor(Math.random() * 6 + 1);

    // Adding the dice value to the current total score 
    runningScore = runningScore + diceValue;
    
    // Changing the image src using the DOM 
    document.getElementById("diceImg").src = "./images/dice"+diceValue+".png";
    
    // Changing the HTML paragraph to display the current total score 
    document.getElementById("yourScore").innerHTML = "Your Score is: " + runningScore;
    
    // Getting the Button element 
    document.getElementById("diceClick").innerHTML = "Throw Dice!"

    // If Else Statement 
    if (diceValue == 1 && runningScore <20) {
        //Loosing scenario
        runningScore = 0;
        document.getElementById("winOrLose").innerHTML = "YOU LOST"
    } else if (runningScore >= 20) {
        //Win scenario
        runningScore = 0;
        document.getElementById("winOrLose").innerHTML = "YOU WIN"
        document.getElementById("diceClick").innerHTML = "Click for a new game!"      
    } else {
        document.getElementById("winOrLose").innerHTML = "";
    }
}
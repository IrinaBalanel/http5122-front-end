//VARIABLES
//alert("Hi");
var topMovies = [];
topMovies[0] = "Dune";
topMovies[1] = "Little Women";
topMovies[2] = "Avatar";
topMovies[3] = "Kill Bill";
topMovies[4] = "Harry Potter";
topMovies[5] = "Barbie";
topMovies[6] = "Green Mile";
console.log (topMovies);

//LOGIC
//MAIN QUESTION + OUTPUT
var userInput = prompt ("Which top 7 movie would you like?", "Pick a number: 1-7");
console.log (userInput);

//VALIDATION: IF USER INPUT IS INVALID DATA + OUTPUT
if(userInput === "" || userInput === null || isNaN(userInput) || userInput > 7 || userInput < 1) {
    alert("Please enter a number between 1 and 7!");
    console.log("Invalid data"); 

    // LOOP WHEN USER INPUT IS INVALID DATA + OUTPUT
    while (true) {
        userInput = prompt ("Which top 7 movie would you like?", "Pick a number: 1-7");
        console.log("Invalid data");
        if (userInput <= 7 && userInput >= 1) {
           break;
        }
    }
    }
        
//IF USER INPUT IS VALID, ANSWER WITH TOP MOVIE NAME
else {
     alert ("Number " + userInput+ " on the list is " + topMovies[userInput-1]); 
}
//OUTPUT WITH LOOP
    for (var i = 0; i < topMovies.length; i++) {
        console.log("Movie " + (i+1) + ": " + topMovies[i]);
    }
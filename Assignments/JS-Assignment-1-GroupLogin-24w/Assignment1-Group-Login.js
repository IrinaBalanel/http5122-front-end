// Assignment 1 Group Login
// GOAL: Create a JavaScript file to allow the members of your team to “log in”
//alert("hey there") // ALERT HELPS TO VERIFY IF THIS FILE IS LINKED TO HTML PAGE

//VARIABLES
var teamNumber=4;
var userInput;
var userFirstName;

//LOGIC
//1. POPUP WITH QUESTION ABOUT TEAM NUMBER + OUTPUT CHECK
userInput = prompt("Please enter your team number:");
console.log(userInput);

//2. IF USER DOESN'T ENTER THE CORRECT TEAM NUMBER (TEXT, OTHER NUMBERS OR CANCEL), ACCESS DENIED (POPUP & CONSOLE)
if (isNaN(userInput) || userInput === "" || userInput === null || userInput != teamNumber) {
    alert("Access denied");
    console.log("Access denied");
}
//3. IF CORRECT, POPUP WITH QUESTION ABOUT FIRST NAME (OUTPUT CHECK)
else {
    userFirstName = prompt("Please provide your first name:");
    console.log(userFirstName);
//4. & 5. IF CORRECT, POPUP WITH WELCOME MESSAGE WITH USER'S FULL NAME. IF NOT, ACCESS DENIED (POPUP & CONSOLE)
        switch(userFirstName) {
            case "Rutisha":
                alert ("Hello Rutisha Patel!");
                console.log("Login Successful");
                break;
            case "Thurston":
                alert("Hello Thurston Tran!");
                console.log("Login Successful");
                break;
            case "Ritika":
                alert("Hello Ritika Mehta!");
                console.log("Login Successful");
                break;
            case "Navjot":
                alert("Hello Navjot Gill!");
                console.log("Login Successful");
                break;
            default:
                alert("Access denied!");
                console.log("Access denied");
                break;
            }
}
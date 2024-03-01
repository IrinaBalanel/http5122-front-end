//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userChoice;
var userInput;


//==== LOGIC =============
var userChoice = confirm ("Would you like to join XYZ mailing list?");
if(userChoice == true) {
    var userInput = prompt ("Enter your email here", "me@example.com");
    if(userInput === "" || userInput === null || userInput === "me@example.com") {
        alert("Thank you, but your email was not valid.");
        console.log("Failed");
    }
    else {
        alert("Thank you, our next newsletter will be sent to " + userInput);
        console.log("Successful");
    }
}
else {
    alert("Thank you, we will not bother you again.");
    console.log("Failed");
}
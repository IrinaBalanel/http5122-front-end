//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will...
//It expects to receive the number of current temperature
//It will return 

function checkTemp (currentTemp) {
    if (currentTemp >= 30 || currentTemp < -10) {
        return false;
    } else {
        return true;
    }
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var currentTemp = prompt ("What is the current temperature?");
if (checkTemp(currentTemp) === false) {
    alert("Yikes! This is no weather for dog walking!");
} else {
    alert("You’re good, have a nice walk!");
}
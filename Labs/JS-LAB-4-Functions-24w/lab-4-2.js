//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function average(a, b, x, y, z){
    return (a+b+x+y+z)/5;
}

average(5, 10, 15, 20, 25);

//HOW TO APPLY THIS FUNCTION???
//average = average.toFixed(2);

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var frontEndDev = 7;
var backEndDev = 1;
var workshops = 80;
var interDesign = 100;
var databases = 100;

    var result = average (frontEndDev, backEndDev, workshops, interDesign, databases)
    if(result >= 70) {
        alert("Success");
    } else {
        alert("Review required");
    }

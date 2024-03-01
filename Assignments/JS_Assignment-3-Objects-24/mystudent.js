// I teach French as a second language part-time an I decided to create an object for my student

//LOGIC
// Create my object with 4 properties and the method (function+alert)

var myStudent = {
    firstName: "Juliette",
    daysPerWeek: 1,
    hoursSpent: 50,
    frLevel:"Beginner",
    updateLevel: function () {
        if (myStudent.hoursSpent < 100) {
            myStudent.frLevel = "Beginner"
        } else if (myStudent.hoursSpent >= 100 && myStudent.hoursSpent <= 300) {
            myStudent.frLevel = "Intermediate";
        } else {
            myStudent.frLevel = "Advanced"; 
        }
        alert(this.firstName + "'s French level is " + myStudent.frLevel);
    }
}

// Output my object to console
console.log(myStudent);

// Popup to the user asking for input for 1st property
// Update this property with the new value from the user

var daysInput = prompt ("How many days per week do you study French?", "Current schedule: " + myStudent.daysPerWeek);
myStudent.daysPerWeek = daysInput;

// Popup to the user asking for another input for 2nd property
// Update this 2nd property with the new value from the user

var hoursInput = prompt ("How many hours have you already spent?", "Current total: " + myStudent.hoursSpent + "h");
myStudent.hoursSpent = hoursInput;

//Call the function/method to update 3rd property
myStudent.updateLevel();


//Output my updsated object to console
console.log(myStudent)

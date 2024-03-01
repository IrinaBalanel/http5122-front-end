//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject = {
    name: "Irina",
    age: 27,
    profession: "manager",
    country: "Canada",
    message: function () {
        alert ("My name is " + meObject.name + " and I live in " + meObject.country)
    }
}

//console.log(meObject.country)
meObject.message();
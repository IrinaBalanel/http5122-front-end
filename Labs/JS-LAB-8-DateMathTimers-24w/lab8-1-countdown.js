/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = pageLoaded;
//create page load function
function pageLoaded () {
	//create variables for now date and due date

	var now = new Date();
	var due = new Date("April 19, 2024 18:00:00");

	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	var today = document.getElementById("todayData");
	today.innerHTML = now.toDateString();

	var dueDate = document.getElementById("finalData");
	dueDate.innerHTML = due.toDateString();
	
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var dueDateInt = due.getTime();
	var diff = dueDateInt - now;

    //CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
	var daysUntilDue = diff/86400000;
	var fullDays = Math.floor(daysUntilDue);

	//OUTPUT DAYS UNTIL THE DEADLINE
	var daysUntil = document.getElementById("dueData");
	daysUntil.innerHTML = fullDays;
		
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
	if (fullDays < 1) {
		var deadlinePassed = document.getElementById ("countMsg")
		deadlinePassed.innerHTML = "The Deadline for the Final Assignment has passed!";
	}

}
	
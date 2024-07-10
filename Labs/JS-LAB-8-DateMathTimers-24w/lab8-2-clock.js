/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = goNow;
//create page load function
 function goNow() {

	//create time variable so all functions have access to it
	var waitTimer = null;
	
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displayTime(){
		var date = new Date;
		//create variables for required HTML elements
		var hours = document.getElementById("hoursOut");
		hours.innerHTML = addZeros(date.getHours()) + ":";;

		var minutes = document.getElementById("minsOut");
		minutes.innerHTML = addZeros(date.getMinutes()) + ":";

		var seconds = document.getElementById("secsOut");
		seconds.innerHTML = addZeros(date.getSeconds());

	}

	//STRETCH GOAL
	function addZeros(z){
		if (z < 10) {z = "0" + z};
		return z;
	}
	
	//GET START AND STOP BUTTONS FOR TIMER TO WORK
	var startBtn = document.getElementById("btnStart");
	var stopBtn = document.getElementById("btnStop");

	//CREATE FUNCTION TO START THE CLOCK
	function startClock(){
		waitTimer = setInterval(displayTime, 1000);
	};
	
	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock(){
		clearInterval(waitTimer);
	};

	// SET EVENT LISTENERS
	startBtn.onclick = startClock;
	stopBtn.onclick = stopClock;
 }

	


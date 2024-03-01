//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady(){
	// alert("Page loaded");
	//GET DOM ELEMENTS WE'LL NEED
	var box = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");
	
	//SETUP LISTENERS
	box.onmouseover = popupMessage;
	buttonBox.onclick = changeButtonBox;
	
	//====CREATE THE FUNCTIONS WE'LL NEED====
	//FUNCTION TO ASK USER
	function popupMessage() {
		var userInput = confirm("Do you want to see something?");
		if(userInput===true) {
			box.style.display = "none";
			buttonBox.style.display = "block";
		}
	}
	//FUNCTION TO CHANGE buttonBox
	function changeButtonBox () {
		buttonBox.style.width = "600px";
		buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";
		buttonBox.style.background = "orange";
	}
}

	

//END onload FUNCTION
/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};


window.onload = pageReady;
function pageReady (){
	var formHandle = document.forms.shippingForm;
	var formHide = document.getElementById("shippingForm");
	var popupMessage = document.getElementById("thanks_msg");

	function processForm(){
		//MESSAGE CUSTOMIZATION
		//1. Customize User Name
		var userName = formHandle.f_Name;
		var customName = document.getElementById("thanksCustomer")
		customName.innerHTML=userName.value;

		//2. Customize Postal Code
		var postalCode = formHandle.f_pc;
		var customCode = document.getElementById("thanksPC")
		customCode.innerHTML = postalCode.value;

		//3. Customize Level of Delivery
		var deliverySpeed = formHandle.f_speed;
		var levelOfDelivery = document.getElementById("thanksSpeed")
		levelOfDelivery.innerHTML = deliverySpeed.options[deliverySpeed.selectedIndex].text;
		
		//4. Customize Cost of Shipping
		var cost = formHandle.f_speed;
		var costOfShipping = document.getElementById("thanksCost")
		costOfShipping.innerHTML = cost.value;
		
		//VALIDATION
		//1. Validate Speed Delivery Selection

		if (deliverySpeed.value == 0) {
			deliverySpeed.style.background = "red";
			deliverySpeed.focus();
			return false;
		}

		// 2. Validate Name Input
		if (userName.value === "") {
			userName.style.background = "red";
			userName.focus();
			return false;
		}

		//3. Validate Postal Code Input
		if (postalCode.value === "") {
			postalCode.style.background = "red";
			postalCode.focus();
			return false;
		}  
		
		//FORM BEHAVIOR AFTER SUBMISSION
		formHide.style.display = "none";
		popupMessage.style.display = "block";
		
		return false;
	}

    //LISTENERS
	formHandle.onsubmit = processForm;
}

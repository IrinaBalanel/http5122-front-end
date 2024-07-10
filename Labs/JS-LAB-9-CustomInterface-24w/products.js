//LAB 9-DATA STORAGE: PRODUCTS PAGE

window.onload = function(){

    //check for stored values
        //retrieve stored values
    var userName = localStorage.getItem("name");
    var favColor = localStorage.getItem("color");

    var welcomeName = document.getElementById("newMsgBox");

    //change welcome text to stored name
    if (userName !== null) {
        welcomeName.innerHTML = "Welcome " + userName + "!";
    }

    //change BG colour to stored colour
    if (favColor !== null) {
        document.body.style.background = favColor;
    }

}

	

	
        
        



    
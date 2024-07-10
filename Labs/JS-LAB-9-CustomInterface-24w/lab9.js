//LAB 9-DATA STORAGE: INDEX PAGE
//window.onload
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
    
	
 //#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener

    var formHandle = document.forms.infoForm;
    formHandle.onsubmit = processForm;

    //onsubmit Function
    function processForm () {

        //get values from form
        var nameValue = formHandle.f_name.value;
        var colorValue = formHandle.f_color.value;
        
        //console.log the form values
        console.log(nameValue);
        console.log(colorValue);
        
        //store values
        localStorage.setItem("name", nameValue);
        localStorage.setItem("color", colorValue);

    }

    //delete stored information
    var deleteBtn = document.getElementById("btnDel");
    function deleteInfo (){
        //this line clears the storage
        localStorage.clear();

        //this line makes page reload
        window.location.reload();
    }
    deleteBtn.onclick = deleteInfo;

}

	

	
        
        



    
window.onload = pageReady;
function pageReady() {
    // GETTING FORM ELEMENTS
    var formHandle = document.forms.ixdForm;
    var headerHide = document.getElementById("welcome");
    var formHide = document.getElementById("form");
    var confirmMessage = document.getElementById("result");
    
  
    function processForm() {
        //1. OUTPUT MESSAGE WITH DYNAMIC VALUES
        /// DYNAMIC FIRST NAME
        var userFirstName = formHandle.f__fName;
        var dynamicFirstName = document.getElementById("result__Fname");
		dynamicFirstName.innerHTML = userFirstName.value;

        /// DYNAMIC LAST NAME
        var userLastName = formHandle.f__lName;
        var dynamicLastName = document.getElementById("result__Lname");
		dynamicLastName.innerHTML = userLastName.value;

        /// DYNAMIC STUDENT ID
        var userStudentId = formHandle.f__id;
        var dynamicStudentId = document.getElementById("result__id");
		dynamicStudentId.innerHTML = userStudentId.value;

        /// DYNAMIC PROGRAM
        var userProgramChoice = formHandle.f__program;
        var dynamicProgramChoice = document.getElementById("result__program");
        dynamicProgramChoice.innerHTML = userProgramChoice.options[userProgramChoice.selectedIndex].text;

        /// DYNAMIC PROJECT
        var userProjectChoice = formHandle.f__project;
        var dynamicProjectChoice = document.getElementById("result__project");
        dynamicProjectChoice.innerHTML = userProjectChoice.value;

        //2. VALIDATION
        /// First Name Validation
        if (userFirstName.value === "") {
            userFirstName.style.background = "red";
            userFirstName.focus();
            return false;
        } else {
            userFirstName.style.background = "white";
        }

        /// Last Name Validation
        if (userLastName.value === "") {
            userLastName.style.background = "red";
            userLastName.focus();
            return false;
        } else {
            userLastName.style.background = "white";
        }

        /// Student ID Validation with Regular Expression
        var humberIdRegEx = /^(n|N)\d{8}$/;
        if (!humberIdRegEx.test(userStudentId.value)) {
            userStudentId.style.background = "red";
            userStudentId.focus();
            return false;
        } else {
            userStudentId.style.background = "white";
        }

        /// Program Choice Validation
        if (userProgramChoice.value == "X") {
			userProgramChoice.style.background = "red";
			userProgramChoice.focus();
			return false;
		} else {
            userProgramChoice.style.background = "white";
        }

        /// Project Choice Validation
        if (userProjectChoice.value === "") {
            // console.log(userProjectChoice);
			var error = document.getElementById("caption_project")
            error.style.background = "red";
			return false;
		} 
        
        /// QUESTION: when this code is uncommented, I am getting HTTP ERROR 405 "Uncaught TypeError: Cannot read properties of undefined (reading 'style') at HTMLFormElement.processForm (127.0.0.1:5500/Assign-4-Forms.js:85:19)", WHY?
        // else {
        //     error.style.background = "white";
        // }

        //3. FORM BEHAVIOR AFTER SUBMIT
        headerHide.style.display = "none";
		formHide.style.display = "none";
        confirmMessage.style.display = "block";

        return false;
    }
    
    // LISTENER
    formHandle.onsubmit = processForm;
}

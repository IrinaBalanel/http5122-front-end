//LAB 10 - 1 FAQ PAGE

//Listen for window load the jQuery way
$(window).on("load", function(){
	//Inside of here is your jQuery/JavaScript
	$("p").hide();

	//ADD CLICK EVENT TO <h2>
	$("h2").on("click", function(){
		$(".contentBox").slideUp(3000);
		$(this).next("p").slideToggle(3000);
	});

	//CHANGE <p> BACKGROUND ON HOVER
	
	//with sipmle css
	// $("p").hover(
	// 	function() {$("p").css({"background":"#FFE5C3", "color":"#524737"});},
	// 	function() {$("p").css({"background":"#524737", "color":"#FFE5C3"});}
	// );
	
	//with css class
	$("p").hover(
		function() {$("p").toggleClass("textHovered");}
	);

});


	







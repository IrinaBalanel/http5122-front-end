//LAB 10 - 2 INVENTORY PAGE

$(window).on("load", function(){
	$(".desc").hide();
	
	//ADD MOUSEOVER/MOUSEOUT FUNCTIONS FOR <tr>
	$("tr").on("mouseover", function(){
		$(this).css({"background":"red", "color":"white"})
	});

	$("tr").on("mouseout", function(){
		$(this).css({"background":"white", "color":"black"})
	});


	//ADD CLICK EVENT TO <tr>

	$("tr").on("click", function(){
		$(".desc").hide();
		$(this).find(".desc").slideToggle();
	});


});






	

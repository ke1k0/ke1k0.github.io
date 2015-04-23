$(document).ready(function(){
    var width = window.innerWidth
	|| document.documentElement.clientWidth
	|| document.body.clientWidth;

	$(document).ready(function(){
	    $("#menu-toggle").hide();
	    if (width < 977) {
	    	$("#menu-icon").click(function(){
		        $("#menu-toggle").toggle(300);
		    });
		}
		else {
			$("#menu-toggle").show();
		}
	});
});
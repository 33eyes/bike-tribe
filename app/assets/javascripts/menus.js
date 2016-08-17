$(document).ready(function() {
  
  $("ul.menu-vert li").click(function(){
    
    // Get the menu-item- class on this element
		var classes = $(this).attr('class').split(' ');
		for (var i = 0; i < classes.length; i++) {
			var matches = /^menu\-item\-(.+)/.exec(classes[i]);
			if (matches != null) {
				var menuitemclass = matches[1];
			}
		}
		
		// Get the id of the menu-vert class parent of this element
		var menuid = $(this).closest(".menu-vert").attr("id");
		
		$("#"+menuid+" li").removeClass("selected-bkgd");
		$(this).addClass("selected-bkgd");
		
		// Hide profile items that do not match the selected menu-item- class, and show those that do.
		$("."+menuid+"-items > div").addClass("hide-menu-item");
		$("."+menuid+"-items > div.menu-item-"+menuitemclass).removeClass("hide-menu-item");
  });


});
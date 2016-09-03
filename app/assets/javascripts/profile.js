$(document).ready(function() {
/*  
  $(".interest").hover(function(){
    $(this).find("a").css("display", "inline");
    $(this).find(".interest-exp-level").css("display", "block");
    $(this).find(".interest-description").css("display", "block");
  }, function(){
    $(this).find("a").css("display", "none");
    $(this).find(".interest-exp-level").css("display", "none");
    $(this).find(".interest-description").css("display", "none");
  });
*/

  $(".interest").click(function(){
    $(this).find("a").toggle();
    $(this).find(".interest-exp-level").toggle();
    $(this).find(".interest-description").toggle();
   });

  /*
  $(document).mouseup(function (e)
  {
    var container = $(".interest");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
    
            e.stopPropagation();
  });

*/


});
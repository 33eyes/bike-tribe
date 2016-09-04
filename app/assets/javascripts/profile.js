$(document).ready(function() {

/* Expand/close interest items in user profile section */
  $(".interest").click(function(){
    $(this).find("a").toggle();
    $(this).find(".interest-exp-level").toggle();
    $(this).find(".interest-description").toggle();
  }).find("a.btn-edit").click(function(e) {
    e.stopPropagation();
  });




});
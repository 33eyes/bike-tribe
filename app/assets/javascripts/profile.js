$(document).ready(function() {

  /* Hide empty interest item descriptions */
  $("p.interest-description span").each(function(){
    if($(this).text()=="" || $(this).text()=="Click here to add notes") {
      $(this).parents(".interest-description-empty").addClass("hide");
    } else {
      $(this).parents(".interest-description-empty").removeClass("hide");
    }
  });


  /* Expand/close interest items in user profile section */
  $(".interest").click(function(){
    $(this).find("span.btn-edit.toggle").toggle();
    $(this).find(".interest-exp-level.toggle").toggleClass("hide");
    $(this).find(".interest-description.toggle").toggle();
  }).find("span.btn-edit").click(function(e) {
    e.stopPropagation();
  });
  
  
  
  /* Activating Best In Place */
  $(".best_in_place").best_in_place();


  /* Interest item editing */
  $('.interest span.btn-edit').on("click", function () {
    
    // Keep interest item expanded when editing 
    $(this).parents('.interest').find("span.btn-edit").removeClass("toggle");
    $(this).parents('.interest').find(".interest-exp-level").removeClass("toggle");
    $(this).parents('.interest').find(".interest-description").removeClass("toggle");
  
    // Put interest item in editing mode 
    $(this).parents('.interest').find(".interest-bar h4").addClass("editing-mode");
    $(this).parents('.interest').find("span.btn-edit").hide();
    $(this).parents('.interest').find(".interest-exp-level").addClass("editing-mode");
    $(this).parents('.interest').find(".interest-description-empty").removeClass("hide");
    $(this).parents('.interest').find(".interest-description").addClass("editing-mode");
  
    // Show save and delete buttons 
    $(this).parents('.interest').find("span.btn-save").removeClass("hide");
    $(this).parents('.interest').find("span.btn-delete-container").removeClass("hide");
  
  });

  /* Save button action for item editing */
  $('.interest span.btn-save').on('click', function(){
    
    // Remove editing mode from interest item 
    $(this).parents('.interest').find(".interest-bar h4").removeClass("editing-mode");
    $(this).parents('.interest').find(".interest-exp-level").removeClass("editing-mode");
    
    // Check if the interest description is empty after editing
    if($(this).parents('.interest').find("p.interest-description span").text()=="" || $(this).parents('.interest').find("p.interest-description span").text()=="Click here to add notes") {
      $(this).parents('.interest').find(".interest-description-empty").addClass("hide");
    } else {
      $(this).parents('.interest').find(".interest-description-empty").removeClass("hide");
    }
    
    $(this).parents('.interest').find(".interest-description").removeClass("editing-mode");
  
    // Put back interest item expand toggle
    $(this).parents('.interest').find("span.btn-edit").addClass("toggle");
    $(this).parents('.interest').find(".interest-exp-level").addClass("toggle");
    $(this).parents('.interest').find(".interest-description").addClass("toggle");
  
    // Put the interest item back into expanded state (it will toggle on this click)
    $(this).parents('.interest').find("span.btn-edit.toggle").hide();
    $(this).parents('.interest').find(".interest-exp-level.toggle").toggleClass("hide");
    $(this).parents('.interest').find(".interest-description.toggle").toggle();
  
    // Check if experience level changed, and update bkgd-color
    if($(this).parents('.interest').find("div.interest-exp-level span").text()=="expert") {
      $(this).parents('.interest').removeClass("updated-beginner");
      $(this).parents('.interest').removeClass("updated-intermediate");
      $(this).parents('.interest').addClass("updated-expert");
    } else if($(this).parents('.interest').find("div.interest-exp-level span").text()=="intermediate") {
      $(this).parents('.interest').removeClass("updated-beginner");
      $(this).parents('.interest').removeClass("updated-expert");
      $(this).parents('.interest').addClass("updated-intermediate");
    } else {
      $(this).parents('.interest').removeClass("updated-expert");
      $(this).parents('.interest').removeClass("updated-intermediate");
      $(this).parents('.interest').addClass("updated-beginner");
    }
  
    // Hide save and delete buttons 
    $(this).parents('.interest').find("span.btn-delete-container").addClass("hide");
    $(this).parents('.interest').find("span.btn-save").addClass("hide");
  });

  


});
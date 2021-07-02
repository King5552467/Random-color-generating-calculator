$(document).ready(function() {
  
  $( "#responsive-menu-icon" ).click(function() {
  
  
var nav = $(".nav-wrapper");
var navHeight = nav.height();
    
    if (navHeight < 150) {

TweenMax.to(nav, 1, {"height":150});
    } else {
      TweenMax.to(nav, 1, {"height":50});
    };
  });
  
  // menu icon jquery
  
  
  // when whole menu div is clicked
  
  
  $("#responsive-menu-icon").click( function() {
    // if the menu height is not full, transform icon
    var nav = $(".nav-wrapper");
var navHeight = nav.height();
    
    if (navHeight < 150) {
      $("#a").addClass("rotate-down");
    $("#responsive-menu-icon").addClass("menu-up");
     $("#b").addClass("disappear");
   
     $("#c").addClass("rotate-up");

    } else {
      
      // if it's not less than full height, remove animation classes
      $("#a").removeClass("rotate-down");
    $("#responsive-menu-icon").removeClass("menu-up");
     $("#b").removeClass("disappear");
   
     $("#c").removeClass("rotate-up");
  
    };
  });
});

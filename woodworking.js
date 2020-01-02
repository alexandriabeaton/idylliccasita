// change opacity of brand name on load
function pageLoaded(){
	document.querySelector("h1").style.opacity = 1;
}

window.onload = pageLoaded;

// display logo after scrolling beyong landing pg image
$(function() {
  $(window).scroll(function() {
      $(".header-logo").show('slow');
  });
});

$(function() {
  $(window).scroll(function() {
    var x = $(window).scrollTop();
    if (x < 500) {
      $(".header-logo").toggle();
    } 
  });
});

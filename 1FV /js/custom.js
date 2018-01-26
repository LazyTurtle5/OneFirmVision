
// Remove the navigation for mobile view

if ($(window).width() < 767) {
   $(".navigation").hide();
}
else {
   $(".navigation").show();
}

 /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

$(document).ready(function() {
    $(".jumper").on("click", function( e ) {

        e.preventDefault();

        $("body, html").animate({ 
            scrollTop: $( $(this).attr('href') ).offset().top 
        }, 600);

    });
});


// fading in the .opening class
function main() {
    $('.opening').hide();
  $('.opening').fadeIn(1000);
}

$(document).ready(main);




/*var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
    
  });*/

// Change color of menu icon on hover
var $burger = $('.burger');
var $icon = $('.burger-icon');

$icon.hover(function() {
    $burger.css('background-color', '#337ab7');
});

$icon.mouseleave($burger, function(){
    $burger.css('background-color', '#fff');
});


// Remove the navigation for mobile view

window.onresize = function(event) {
    if(event.currentTarget.outerWidth <= 767){
        console.info("hiding");
        $(".navigation").hide();
      
    }else{
        console.info("showing");
        $(".navigation").show();
    }
}










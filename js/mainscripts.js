$(document).ready(function(){

// Scripts for toggling and styling button in "about" section//

var acc = document.getElementsByClassName ('button_container');
var i;
  for (i=0;i<acc.length;i++) {
	 acc[i].onclick = function() {
		this.classList.toggle('active');
	
var panel = this.nextElementSibling;
var border = this.parentNode;
  if (panel.style.maxHeight && border.style.borderBottom) {
    panel.style.maxHeight = null;
    border.style.borderBottom = null; 
    } 

  else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    border.style.borderBottom = "1px solid #E3E3E3";
    panel.style.borderTop = "1px solid #E3E3E3";
    } 
	}
}

//ajax request to form-handler.php//

  $('.form').submit(function()  {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "form-handler.php",
      data: th.serialize()
	  }).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

//script of portfolio filter buttons
  $(".filter-button").click(function(){
    var value = $(this).attr('data-filter');
      if(value == "all_works") {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
        }

      else {
//      $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//      $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');   
        }
    });


//script of slick-plugin carousels at blog and clients section//

$('.slick_carousel').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  arrows: true,
  autoplay: true,
  variableWidth: true
});

$('.slick_carousel_clients').slick({
  dots: true,
  autoplay:true,
  vertical:true,
});

//script for fullscreen navigation//
  //open of nav//

var navMenu = document.getElementsByClassName ('navButton');
var i;
  for (i=0;i<navMenu.length;i++) {
  navMenu[i].onclick = function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
  //close of nav//

var navMenuClose = document.getElementsByClassName ('closebtn');
var i;
  for (i=0;i<navMenuClose.length;i++) {
  navMenuClose[i].onclick = function closeNav() {
  document.getElementById("myNav").style.height = "0%"; 
  }
}

var linkCloseMenu = document.getElementsByClassName ('overlay-link');
var i;
  for (i=0;i<linkCloseMenu.length;i++) {
  linkCloseMenu[i].onclick = function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }};
}


});

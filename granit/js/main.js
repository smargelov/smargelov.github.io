

$(document).ready(function () {
	
	// Add WOW plagin

	var wow = new WOW(
	      {
	        animateClass: 'animated',
	        offset:       100,
	        callback:     function(box) {
	          // console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	        }
	      }
	    );
	    wow.init();


    // Make fixed top menu

	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop || st < 100){   
	     $('header').removeClass('fixed');
	   } else {
	     $('header').addClass('fixed');
	   }
	   lastScrollTop = st;

	});

	//  Card hover open

	$(".card").mouseenter(
	       function(){ $(this).removeClass('start') }
	);
	$(".card").mouseleave(
	       function(){ $(this).addClass('start') }
	);
	$(".card").focusin(
	       function(){ $(this).toggleClass('start') }
	);

	//  Add Magnific Popup

	$("#button1").magnificPopup({
	    items: [
	      {
	        src: 'img/lic1.jpg'
	      },
	      {
	        src: 'img/lic2.jpg'
	      }
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image' 
	});

	$(".open-popup").magnificPopup({
		items: {
	        src: '#rec', 
	        type: 'inline'
      	}
	});

});


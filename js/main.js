// ############## SMOOTH SCROLLING ##############

$(document).ready(function() {

// Select all links with hashes
$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
			&& 
			location.hostname == this.hostname
			) {
			// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top - $('.navbar').height()
				}, 1000)
				return false;
			}
		}
	});
})


// ############## INITIALIZE WOW AND ANIMATE ##############

$(document).ready(function(){
	new WOW().init();
})


// ############## HIGHLIGHT MENU ITEM ON SCROLL ##############

$(document).ready(function() {
    
    $(window).scroll( function() {
        
        $("section").each(function()  {
            
            var sectionId = $(this).attr("id");
            var height = $(this).outerHeight();
            var topOffset = $(this).offset().top - $('.navbar').height() - 60;
            
            if ($(window).scrollTop() > topOffset && $(window).scrollTop() < topOffset + height) {
             
                $(".navbar-nav li a[href='#" + sectionId + "']").parent().addClass("active");
           
            } else {
                $(".navbar-nav li a[href='#" + sectionId + "']").parent().removeClass("active");
            }
        });
    });
});


// ############## TRANSPARENT NAVBAR ON SCROLL ##############

$(document).ready(function() {

    //caches a jQuery object containing the header element
    var header = $(".navbar");
    var titleOffset = $(".firstTitle").offset().top;
    var windowWidth = $(window).width();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= titleOffset && windowWidth > 481) {
            header.addClass("navbarTransparent");
        } else {
            header.removeClass("navbarTransparent");
        }
    });
});


// ############## POPUP ##############

$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});
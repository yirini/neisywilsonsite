// Scroll
smoothScroll(1200);

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {
	        event.preventDefault();
	    var target = $( $(this).attr('href') );
	    if( target.length ) {

	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

(function($) {

    'use strict';

	var scrollMenu = function() {
		var start_change = $('.navbar');
			start_change.toggleClass('is-fill', $(this).scrollTop() > start_change.height());
	};

    var typed = new Typed('#typed', {
        strings: ["Frontend Developer."],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 500,
        startDelay: 500,
        loop: false
    });

    var inicio = function() {
		typed.start();

		$(document).scroll(scrollMenu);
	}

	$(document).ready(inicio); 

})(window.jQuery);
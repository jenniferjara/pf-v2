(function($) {

    'use strict';

    /*var scrollMenus = function (e) {
        e.preventDefault();
        this.each(function () {
            $('html, body').animate({
                scrollTop: $(this).offset().top
            }, 1000);
        });
    };*/

   	var scrollNav = function() {
		var start_change = $('.navbar');
			start_change.toggleClass('is-fill', $(this).scrollTop() > start_change.height());
	};

    var typed = new Typed('#typed', {
        strings: ["Frontend Developer."],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 500,
        startDelay: 500,
        loop: true
    });

    var startPage = function() {
        typed.start();
        $('.bxslider').bxSlider({
            controls: false,
            mode: 'vertical',
            slideMargin: 30
        });

        $(document).scroll(scrollNav);


	};

	$(document).ready(startPage);


})(window.jQuery);
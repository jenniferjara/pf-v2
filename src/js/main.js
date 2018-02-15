(function($) {

    'use strict';



    var scrollMenus = function () {
        var id = $(this).find('a').attr("href"), posi, ele, padding = 65;
        ele = $(id); posi = ($(ele).offset()||0).top - padding;

        $('html, body').animate({scrollTop:posi}, 1500);
    };

   	var scrollNav = function() {
		var start_change = $('.navbar');
			start_change.toggleClass('is-fill', $(this).scrollTop() > start_change.height());
	};

    var typed = new Typed('#typed', {
        strings: ["Frontend Developer.", "Self-taught.", "UX newbie."],
        typeSpeed: 120,
        backSpeed: 100,
        backDelay: 800,
        startDelay: 800,
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

        //language=JQuery-CSS
        $('ul.nav.navbar-nav > li').on('click', scrollMenus);
        $('ul.hero_links_main:nth-child(1) > li').on('click', scrollMenus);


	};

	$(document).ready(startPage);


})(window.jQuery);
(function($) {

    'use strict';
    $(window).resize(function () {
        console.log($(window).width());
    });

    var showDemos = function (e) {
        e.preventDefault();
        console.log($(this).text());

        $('.demo_bg:nth-child(2)').toggle('slow');
        if ($(this).text() == "Ver más") {
            $(this).text("Ver menos");
        } else {
            $(this).text('Ver más');
        }
    };

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
        loop: true
    });

    var inicio = function() {
        typed.start();

        $('.demo_more a').text('Ver más').on('click', showDemos);
        $(document).scroll(scrollMenu);
	};

	$(document).ready(inicio); 

})(window.jQuery);
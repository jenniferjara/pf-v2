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

    var showDemos = function (e) {
        e.preventDefault();
        //$('.demo_bg:nth-child(2)').toggle('slow');
        if ($(this).text() == "+") {
            $(this).text("-");
            $(this).parent().addClass('demo_more_tp');
            $('.demo_bg:nth-child(2)').css('display', 'block');
            $("html, body").animate({ scrollTop: ($('.demo_bg:nth-child(1)').offset().top + $('.demo_bg:nth-child(1)').height()) - 70 }, 1000);
            resizes();
        } else {
            $(this).text('+');
            $(this).parent().removeClass('demo_more_tp');
            $("html, body").animate({ scrollTop: ($('.demo_bg:nth-child(1)').offset().top) - 70}, 1400);
            $('.demo_bg:nth-child(2)').css('display', 'none');
        }

    };

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

    var inicio = function() {
        typed.start();
        function resizes(){
            $(window).on('resize', function () {
                if ($(window).width() <= 920) {
                    $('.demo_bg:nth-child(2)').css('display', 'none');
                } else if ($(window).width() > 920) {
                    $('.demo_bg:nth-child(2)').css('display', 'flex');
                }
            });
        };

        $('.demo_more a').text('+').on('click', showDemos);
        $('.demo_more').fixTo('#demo', {top: 0, useNativeSticky:true});

        $(document).scroll(scrollNav);
	};

	$(document).ready(inicio); 

})(window.jQuery);
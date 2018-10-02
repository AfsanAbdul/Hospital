/*header*/

$(function () {
    $('#datetimepicker1').datetimepicker();
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $(".icon-button").fadeIn()
        }
        else {
            $(".icon-button").fadeOut()
        }
    });

    $('.icon-button').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop()) {
            $('nav').css({
                'background-color': '#f8f8f8',
                'margin-top':0
            });

            $('.navbar-nav li a').css({
                'line-height': '4px'
            });

            $('header a.navbar-brand').css({
                'margin-top': '0'
            });

        }

        else {
            $('nav').css({
                'background-color': 'transparent',
                'margin-top': '50px'
            });

            $('.navbar-default a').css({
                'color': '#777'
            });

            $('.head-first').css({
                'display': 'block'
            });

            $('.navbar-nav li a').css({
                'line-height': '20px'
            });

            $('header a.navbar-brand').css({
                'margin-top': '7px'
            });
        }

    })

     new WOW({ mobile: false }).init();

});


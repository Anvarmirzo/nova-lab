$(document).ready(function () {
    $('.dark-img').hide();
    $('.header__burger').click(function () {
        if (!$('.navigation').hasClass('active-menu')) {
            $('.navigation').addClass('active-menu');
            $('.fa-bars').hide();
            $('.fa-close').show();
        }
        else {
            $('.navigation').removeClass('active-menu');
            $('.fa-close').hide();
            $('.fa-bars').show();
        }
    })



    const workSlider = $('#workSlider');

    workSlider.slick({
        adaptiveHeight: true,
        slidesToShow: 3,
        infinite: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    speed: 250,
                }
            },
        ]
    });

    // $('#workSliderLeft').click(function (e) {
    //     e.preventDefault();
    //     workSlider.trigger('prev.owl.carousel');
    // })
    // $('#workSliderRight').click(function (e) {
    //     e.preventDefault();
    //     workSlider.trigger('next.owl.carousel');
    // })




    var btn = document.getElementById("theme-button");
    var link = document.getElementById("theme-link");

    btn.addEventListener("click", function () { ChangeTheme(); });

    function ChangeTheme() {
        let lightTheme = "css/light.css";
        let darkTheme = "css/dark.css";

        var currTheme = link.getAttribute("href");
        var theme = "";

        if (currTheme == lightTheme) {
            currTheme = darkTheme;
            theme = "dark";
        }
        else {
            currTheme = lightTheme;
            theme = "light";
        }

        link.setAttribute("href", currTheme);
    }


    $('.icon__btn').click(function () {
        if (!$('.moon').hasClass('switch')) {
            $('.moon').addClass('switch');
            $('.sun').hide();
            $('.moon').show();
            $('.light-img').hide();
            $('.dark-img').toggle(50);
        }
        else {
            $('.moon').removeClass('switch');
            $('.moon').hide();
            $('.sun').show();
            $('.dark-img').hide();
            $('.light-img').toggle(50);
        }
    })
    // $('.navigation__link').click(function (e) {
    //     e.preventDefault();
    //     $('.navigation__link').removeClass('navigation__link--active');
    //     $('html').animate({
    //         scrollTop: $($(this).addClass('navigation__link--active').attr('href')).offset().top - $('.nav').innerHeight()
    //     }, 800)
    // })
    // function scrolled() {
    //     var scroll = $(this).scrollTop();
    //     $('.navigation__link').each(function () {
    //         var attr = $(this).attr('href');
    //         var position = $(attr).offset().top - 191;
    //         if (scroll >= position) {
    //             $('.navigation__link').removeClass('navigation__link--active');
    //             $(this).addClass('navigation__link--active');
    //         }
    //     })
    // }
    // $(window).on('scroll', function () {
    //     scrolled();
    // });



    $('.wrap1-btn2').click(function () {

    });
    $('.wrap1-btn1').click(function () {

    });
});


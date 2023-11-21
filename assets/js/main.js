(function ($) {
    "use strict";

    new WOW().init();

    /*---background image---*/
    function dataBackgroundImage() {
        $('[data-bgimg]').each(function () {
            var bgImgUrl = $(this).data('bgimg');
            $(this).css({
                'background-image': 'url(' + bgImgUrl + ')',
            });
        });
    }

    $(window).on('load', function () {
        dataBackgroundImage();
    });

    /*---stickey menu---*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });


    /*---slider activation---*/
    $('.slider_area').owlCarousel({
        animateOut: 'fadeOut',
        autoplay: true,
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 1,
        dots: true,
    });

    /*---product column5 activation---*/
    $('.product_column5').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
    }).owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 5,
        margin: 20,
        dots: false,
        navText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },


        }
    });

    /*---product column4 activation---*/
    $('.product_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
    }).owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        margin: 20,
        dots: false,
        navText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },


        }
    });


    /*---product column4 activation---*/
    $('.product_sidebar_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
    }).owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        margin: 20,
        dots: false,
        navText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },

            1200: {
                items: 4,
            },
        }
    });

    /*---featured column3 activation---*/
    $('.featured_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
        $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')
    }).owlCarousel({
        autoplay: true,
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 3,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },

        }
    });


    /*---product column3 activation---*/
    $('.product_column3').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 3,
        margin: 20,
        dots: false,
        navText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },

        }
    });

    /*---product column2 activation---*/
    $('.product_column2').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 2,
        margin: 20,
        dots: false,
        navText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
                margin: 0,
            },
            992: {
                items: 2,
            },
        }
    });

    $('#nav-tab a,#nav-tab2 a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    /*---product column4 activation---*/
    $('.blog_column4').owlCarousel({
        autoplay: true,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 8000,
        items: 4,
        margin: 20,
        dots: false,
        navText: ['<i class="ion-ios-arrow-thin-left"></i>', '<i class="ion-ios-arrow-thin-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });


    /*---small product activation---*/
    $('.small_product_active').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        arrows: false,
        rows: 3,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    });


    /*--- niceSelect---*/
    $('.select_option').niceSelect();



    /*---  ScrollUp Active ---*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*---niceSelect---*/
    $('.niceselect_option').niceSelect();

    /*---mini cart activation---*/
    $('.mini_cart_wrapper > a').on('click', function () {
        $('.mini_cart,.off_canvars_overlay').addClass('active')
    });

    $('.mini_cart_close,.off_canvars_overlay').on('click', function () {
        $('.mini_cart,.off_canvars_overlay').removeClass('active')
    });

    /*---canvas menu activation---*/

    /*---canvas menu activation---*/
    $('.canvas_open').on('click', function () {
        $('.Offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
    });

    $('.canvas_close,.off_canvars_overlay').on('click', function () {
        $('.Offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });



    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
        var $this = $(this);
        if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.siblings('ul').slideUp('slow');
            } else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if ($this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/)) {
            $this.parent().toggleClass('menu-open');
        } else if ($this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/)) {
            $this.toggleClass('menu-open');
        }
    });


    /*js ripples activation*/
    $('.js-ripples').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04
    });



    /*---small product activation---*/
    jQuery(window).on('load', function () {
        $('.instagram-wrap').slick({
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 4,
            arrows: true,
            prevArrow: '<button class="prev_arrow"><i class="ion-ios-arrow-thin-left"></i></button>',
            nextArrow: '<button class="next_arrow"><i class="ion-ios-arrow-thin-right"></i></button>',
            responsive: [
                {
                    breakpoint: 300,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
            ]
        });
    });
})(jQuery);

$(document).ready(function () {
    $('#footerYear').text(new Date().getFullYear())
})

function isValidEmail(email) {
    // Define a regular expression pattern for basic email format validation
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  
    // Use the test method to check if the email matches the pattern
    return emailPattern.test(email);
  }

$(document).ready(function () {
    $('#registerForm').submit(function (event) {
        event.preventDefault();
        const form = document.getElementById('registerForm');
        if (form.elements['email'].value in localStorage) {
            $('#RegisterMessage').text('Already Registred')
        } 
        else 
        {
            if(!isValidEmail(form.elements['email'].value))
            {
                $("#emailSpn").html("This is not a valid email");
                if(form.elements['password'].value.length<8)
                {
                        $("#passwordSpn").html("Password must be min 8 chars");
                }
            }
            
            else{
                localStorage.setItem(form.elements['email'].value, form.elements['password'].value)
                location.href = 'index.html'
                alert("Succesfully Registered")
            }
        }
    })
})
$(document).ready(function () {
    $('#loginForm').submit(function (event) {
        event.preventDefault();
        const form = document.getElementById('loginForm');
        if (!(form.elements['email'].value in localStorage)) {
            $('#LoginMessage').text('You are not registered!')
        } else {
            if (localStorage.getItem(form.elements['email'].value) == form.elements['password'].value) {
                location.href = 'index.html'
                alert("Successfully Logged In")
            }
            else{
                $('#LoginMessage').text('Password Not Correct!')
            }
        }
    })
})


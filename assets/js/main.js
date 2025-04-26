// on scroll down add class shrink in navbar and on scroll up remove class shrink

window.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.cus-nav');

    if (this.window.innerWidth < 992) {
        navbar.classList.add('shrink');
    }
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.cus-nav');

    if (this.window.innerWidth >= 992) {
        if (window.scrollY > 0) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    }
});


// --- Flourish Mobile Navbar Script ---
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('flourishNavbar');
    const toggleButton = document.getElementById('flourishNavbarToggle');
    const menuContent = document.getElementById('flourishNavbarMenu');

    // Check if mobile navbar elements exist before adding listeners
    if (navbar && toggleButton && menuContent) {

        const submenuToggles = navbar.querySelectorAll('.flourish-submenu-toggle');

        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent click from closing the main menu

                const parentLi = toggle.closest('.flourish-nav-item-has-submenu');

                if (parentLi) {
                    const currentlyOpen = parentLi.classList.contains('submenu-is-open');
                    // Close all others *before* opening the new one
                    closeOtherSubmenus(parentLi);
                    // Toggle the current one (if it wasn't the one already open, it will open)
                    if (!currentlyOpen) {
                        parentLi.classList.add('submenu-is-open');
                    }
                }
            });
        });

        // Helper function to close other submenus
        function closeOtherSubmenus(currentOpenLi) {
            submenuToggles.forEach(toggle => {
                const li = toggle.closest('.flourish-nav-item-has-submenu');
                // Close if it's not the current one OR if the current one is being clicked to close
                if (li !== currentOpenLi || li.classList.contains('submenu-is-open')) {
                    li.classList.remove('submenu-is-open');
                }
            });
        }

        // Main Toggle Logic
        toggleButton.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent triggering document click listener
            const isOpen = navbar.classList.toggle('is-open');
            toggleButton.setAttribute('aria-expanded', isOpen);

            // If closing the main menu, also close all submenus
            if (!isOpen) {
                closeAllSubmenus();
            }
        });

        // Outside Click Logic
        document.addEventListener('click', (event) => {
            // Check if the main navbar is open and the click was outside the navbar
            if (navbar.classList.contains('is-open') && !navbar.contains(event.target)) {
                closeMainMenu();
            }
        });

        // Function to close main menu and submenus
        function closeMainMenu() {
            navbar.classList.remove('is-open');
            toggleButton.setAttribute('aria-expanded', 'false');
            closeAllSubmenus();
        }

        // Function to close all submenus
        function closeAllSubmenus() {
            navbar.querySelectorAll('.flourish-nav-item-has-submenu.submenu-is-open').forEach(li => {
                li.classList.remove('submenu-is-open');
            });
        }

    }
    // No console error if elements aren't found, as they might intentionally be absent on desktop
});



; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         *  Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })

        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function () {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });

        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function (e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');

        menutoggle.on('click', function () {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length) {
            $('.single-select').niceSelect();
        }

        /* --------------------------------------------------
            isotop filter 
        ---------------------------------------------------- */
        var $Container = $('.isotop-filter-area');
        if ($Container.length > 0) {
            $('.property-filter-area').imagesLoaded(function () {
                var festivarMasonry = $Container.isotope({
                    itemSelector: '.project-filter-item', // use a separate class for itemSelector, other than .col-
                    masonry: {
                        gutter: 0
                    }
                });
                $(document).on('click', '.isotop-filter-menu > button', function () {
                    var filterValue = $(this).attr('data-filter');
                    festivarMasonry.isotope({
                        filter: filterValue
                    });
                });
            });
            $(document).on('click', '.isotop-filter-menu > button', function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay = $('#body-overlay');
        var searchPopup = $('#td-search-popup');

        $(document).on('click', '#body-overlay', function (e) {
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click', '.search-bar', function (e) {
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        /* -----------------------------------------------------
            Variables
        ----------------------------------------------------- */
        var leftArrow = '<i class="fa fa-angle-left"></i>';
        var rightArrow = '<i class="fa fa-angle-right"></i>';

        /*------------------------------------------------
            intro-slider
        ------------------------------------------------*/
        $('.intro-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 4
                },
            }
        });

        /*------------------------------------------------
            testimonial-slider
        ------------------------------------------------*/
        $('.testimonial-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            smartSpeed: 1500,
            items: 1,
        });

        /*------------------------------------------------
            testimonial-slider
        ------------------------------------------------*/
        $('.testimonial-slider-2').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            smartSpeed: 1500,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
            }
        });

        /*------------------------------------------------
            testimonial-slider
        ------------------------------------------------*/
        $('.testimonial-slider-3').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            margin: 30,
            smartSpeed: 1500,
            items: 3,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                992: {
                    items: 2
                },
            }
        });

        /*------------------------------------------------
            team-slider
        ------------------------------------------------*/
        $('.team-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                },
            }
        });

        /*------------------------------------------------
            institute-slider
        ------------------------------------------------*/
        $('.institute-slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            smartSpeed: 1500,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                992: {
                    items: 5
                },
            }
        });

        /*------------------------------------------------
            Magnific JS
        ------------------------------------------------*/
        $('.video-play-btn').magnificPopup({
            type: 'iframe',
            removalDelay: 260,
            mainClass: 'mfp-zoom-in',
        });
        $.extend(true, $.magnificPopup.defaults, {
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/Wimkqo8gDZ0'
                    }
                }
            }
        });

        /* -----------------------------------------
            fact counter
        ----------------------------------------- */
        $('.counter').counterUp({
            delay: 15,
            time: 2000
        });



        /**---------------------------------------
          Progress BAR
        ----------------------------------------*/
        function td_Progress() {
            var progress = $('.progress-rate');
            var len = progress.length;
            for (var i = 0; i < len; i++) {
                var progressId = '#' + progress[i].id;
                var dataValue = $(progressId).attr('data-value');
                $(progressId).css({ 'width': dataValue + '%' });
            }
        }
        var progressRateClass = $('.progress-item');
        if ((progressRateClass).length) {
            td_Progress();
        }
        $('.counting').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

                {
                    duration: 2000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });


        /*----------------------------------------
           back to top
        ----------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });

    });

    $(window).on("scroll", function () {
        /*---------------------------------------
            back-to-top
        -----------------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

        /*---------------------------------------
            sticky-active
        -----------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }

    });


    $(window).on('load', function () {

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });



})(jQuery);


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});


// recruiter section JS start

document.addEventListener('DOMContentLoaded', () => {
    const logos = [
      'assets/img/logos/1.jpg','assets/img/logos/2.jpg','assets/img/logos/3.jpg','assets/img/logos/4.jpg','assets/img/logos/5.jpg',
      'assets/img/logos/6.jpg','assets/img/logos/7.jpg','assets/img/logos/8.jpg','assets/img/logos/1.jpg',
      'assets/img/logos/2.jpg','assets/img/logos/3.jpg'
    ];
    const itemsPerPage = 5;
    let currentStart = 0;
    const container = document.getElementById('logo-container');
    const radius = 250; // px

    // pre-create img elements
    const imgElements = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const img = document.createElement('img');
      img.className = 'semi-circle-logo';
      container.appendChild(img);
      imgElements.push(img);
    }

    // position logos along the semi-circle
    function positionImgs() {
      imgElements.forEach((img, i) => {
        const idx = (currentStart + i) % logos.length;
        img.src = logos[idx];
        img.alt = `logo ${idx + 1}`;

        const angle = Math.PI * (i / (itemsPerPage - 1)); // 0→π
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        img.style.left = `calc(50% + ${x}px - 32px)`;
        img.style.top  = `calc(100% - ${y}px - 32px)`;
      });
    }

    function rotateNext() {
      imgElements.forEach(img => img.style.opacity = '0');
      setTimeout(() => {
        currentStart = (currentStart + 1) % logos.length;
        const first = imgElements.shift();
        imgElements.push(first);
        positionImgs();
        container.innerHTML = '';
        imgElements.forEach(el => container.appendChild(el));
        imgElements.forEach(img => img.style.opacity = '1');
      }, 300);
    }

    function rotatePrev() {
      imgElements.forEach(img => img.style.opacity = '0');
      setTimeout(() => {
        currentStart = (currentStart - 1 + logos.length) % logos.length;
        const last = imgElements.pop();
        imgElements.unshift(last);
        positionImgs();
        container.innerHTML = '';
        imgElements.forEach(el => container.appendChild(el));
        imgElements.forEach(img => img.style.opacity = '1');
      }, 300);
    }

    document.getElementById('next').addEventListener('click', rotateNext);
    document.getElementById('prev').addEventListener('click', rotatePrev);

    // auto-rotate every 3s, pause on hover
    let autoRotate = setInterval(rotateNext, 3000);
    container.addEventListener('mouseenter', () => clearInterval(autoRotate));
    container.addEventListener('mouseleave', () => {
      autoRotate = setInterval(rotateNext, 3000);
    });

    positionImgs();
  });

  // recruiter section JS end
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
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });

        /*--------------------------------------------------
            select onput
        ---------------------------------------------------*/
        if ($('.single-select').length){
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
            $(document).on('click','.isotop-filter-menu > button' , function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            });
        }

        /*--------------------------------------------
            Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#td-search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
        bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','.search-bar',function(e){
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
               $(progressId).css({'width':dataValue+'%'});
            }
        }
        var progressRateClass = $('.progress-item');
         if ((progressRateClass).length) {
            td_Progress();
        }
        $('.counting').each(function() {
            var $this = $(this),
            countTo = $this.attr('data-count');
          
            $({ countNum: $this.text()}).animate({
                countNum: countTo
            },

            {
                duration: 2000,
                easing:'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
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

    $(window).on("scroll", function() {
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


$(document).ready(function(){
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



// List of image sources in the gallery
const images = [
    "assets/img/gallery/1.webp",
    "assets/img/gallery/2.webp",
    "assets/img/gallery/3.webp",
    "assets/img/gallery/4.webp",
    "assets/img/gallery/5.webp",
    "assets/img/gallery/6.webp",
    "assets/img/gallery/7.webp",
    "assets/img/gallery/8.webp",
    "assets/img/gallery/9.webp",
    "assets/img/gallery/10.webp",
    "assets/img/gallery/11.webp",
    "assets/img/gallery/12.webp",
    "assets/img/gallery/13.webp",
    "assets/img/gallery/14.webp",
    "assets/img/gallery/15.webp",
    "assets/img/gallery/16.webp",
    "assets/img/gallery/17.webp",
    "assets/img/gallery/18.webp",
    // Add more image paths here
];

let currentImageIndex = 0;  // Tracks the current image in the lightbox

// Open the lightbox and display the selected image
function openLightbox(index) {
    currentImageIndex = index;
    const lightboxImg = document.getElementById("lightbox-img");
    
    // Fade out the image before changing the src
    lightboxImg.classList.remove('show');  // Remove the show class (opacity 1)
    
    // Wait for the fade-out to finish before changing the image
    setTimeout(function() {
        lightboxImg.src = images[currentImageIndex];
        lightboxImg.classList.add('show');  // Add the show class to fade in
    }, 200);  // Wait for 0.2 sec before changing the image (matching the CSS transition duration)
    
    // Update the caption in lightbox
    document.getElementById("lightbox-caption").innerText = document.querySelectorAll('.gallery-item')[currentImageIndex].querySelector('.caption').innerText;
    
    document.getElementById("lightbox").style.display = "flex";
}

// Close the lightbox
function closeLightbox(event) {
    if (event.target === document.getElementById("lightbox") || event.target === document.querySelector('.close-btn')) {
        document.getElementById("lightbox").style.display = "none";
        document.body.style.overflow = "auto";  // Re-enable page scrolling when lightbox is closed
    }
}

// Show the next image in the gallery
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;  // Wrap around to first image after the last
    const lightboxImg = document.getElementById("lightbox-img");
    
    // Fade out the image before changing the src
    lightboxImg.classList.remove('show');  // Remove the show class (opacity 1)
    
    // Wait for the fade-out to finish before changing the image
    setTimeout(function() {
        lightboxImg.src = images[currentImageIndex];
        lightboxImg.classList.add('show');  // Add the show class to fade in
    }, 200);  // Wait for 0.2 sec before changing the image
    
    // Update the caption in lightbox
    document.getElementById("lightbox-caption").innerText = document.querySelectorAll('.gallery-item')[currentImageIndex].querySelector('.caption').innerText;
}

// Show the previous image in the gallery
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;  // Wrap around to last image before the first
    const lightboxImg = document.getElementById("lightbox-img");
    
    // Fade out the image before changing the src
    lightboxImg.classList.remove('show');  // Remove the show class (opacity 1)
    
    // Wait for the fade-out to finish before changing the image
    setTimeout(function() {
        lightboxImg.src = images[currentImageIndex];
        lightboxImg.classList.add('show');  // Add the show class to fade in
    }, 200);  // Wait for 0.2 sec before changing the image
    
    // Update the caption in lightbox
    document.getElementById("lightbox-caption").innerText = document.querySelectorAll('.gallery-item')[currentImageIndex].querySelector('.caption').innerText;
}



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
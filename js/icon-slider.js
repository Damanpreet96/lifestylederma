jQuery(document).ready(function($) {
    "use strict";
    $('#icon-list').owlCarousel( {
            loop: true,
            center: false,
            items: 5,
            margin: 30,
            autoplay: true,
            dots:true,
        nav:true,
            autoplayTimeout: 2500,
            smartSpeed: 250,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1170: {
                    items: 5
                }
            }
        });
    });
jQuery(document).ready(function($) {
    "use strict";
    $('#hair-product').owlCarousel( {
            loop: true,
            center: false,
            items: 4,
            margin: 10,
            autoplay: true,
            dots:true,
        nav:true,
            autoplayTimeout: 8500,
            smartSpeed: 450,
          navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 4
                }
            }
        });
    });
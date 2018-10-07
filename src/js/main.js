//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/select2/dist/js/select2.min.js

"use strict";


$(function() {


    $('.news__slider').owlCarousel({
        items: 5,
        loop: true,
        nav: false,
        dots: false,
        margin: 20,
        autoWidth: true
    });

    $('.card__carousel').owlCarousel({
        items: 1,
        loop: false,
        nav: false,
        dots: true,
        dotsContainer: ".card-dots",
        responsive: {
            320: {
                items: 1,
            },

            480: {
                items: 1
            },

            768: {
                items: 1
            },

            1023: {
                items: 1
            }
        }
    });

    $('.similar__carousel').owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        dots: false,
        margin: 100,
        responsive: {
            320: {
                items: 1,
            },

            480: {
                items: 1
            },

            768: {
                items: 3
            },

            1023: {
                items: 3
            }
        }
    });

});

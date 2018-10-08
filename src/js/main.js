//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/select2/dist/js/select2.min.js
//= ../../bower_components/remodal/dist/remodal.min.js


"use strict";



function slideItem(clickItem, showBlock) {

    clickItem.click(function(e) {
        e.preventDefault();

        var itemClick = clickItem;
        var itemHide = $(this).siblings(showBlock);

        if ($(this).hasClass('active_item')) {
            $(this).removeClass('active_item');
        } else {
            $(this).addClass('active_item');
        }

        $(showBlock).not(itemHide).slideUp('fast').prev().removeClass('active_item');
        itemHide.stop().slideToggle(400);
    });

}


function modalLk() {

    $('.header__name-js').on('click', function(e) {
        e.preventDefault();

        $(this).parent().find('.lk__modal').addClass('active');

    });

    $('.lk__close').on('click', function(e) {
        e.preventDefault();

        $('.lk__modal').toggleClass('active');

    });
}


$(function() {

    modalLk();
    slideItem($('.list__link_parent'), $('.list__dropdown'));

    $('.form-search').on('click', function() {

        $(this).find('.form-search__input').addClass('active');

    });

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

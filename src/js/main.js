//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/select2/dist/js/select2.min.js
//= ../../bower_components/remodal/dist/remodal.min.js
//= ../../bower_components/ion.rangeSlider/js/ion.rangeSlider.js
//= ../../bower_components/multiple-select/multiple-select.js


"use strict";


function quantity() {

    $('<div class="quantity__nav"><div class="quantity__button quantity__button_up">+</div><div class="quantity__button quantity__button_down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity__button_up'),
            btnDown = spinner.find('.quantity__button_down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

}


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

function selectCheckbox() {

    var expanded = false;

    function showCheckboxes(check) {
        var checkboxes = document.getElementById(check);
        if (!expanded) {
            checkboxes.style.display = "block";
            expanded = true;
        } else {
            checkboxes.style.display = "none";
            expanded = false;
        }
    }


    $('.selectBox').on('click', function() {

        showCheckboxes('checkboxes-1');
        showCheckboxes('checkboxes');

    });

}


// function stepsItem() {

//     var item = $('.steps__item');

//     item.each(function() {

//         $('.steps__nav-item_next').on('click', function() {


//             if (item.hasClass('active')) {

//                 item.removeClass('active')

//                 item.closest(item).addClass('active');

//             }

//         });

//     });


// }


$(function() {

    // selectCheckbox();
    // stepsItem();
    quantity();
    modalLk();
    slideItem($('.list__link_parent'), $('.list__dropdown'));

    $('.form-search').on('click', function() {

        $(this).find('.form-search__input').addClass('active');

    });


    $('.basket__name').on('click', function() {

        $(this).parent('.basket').find('.basket__modal').toggleClass('active');

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


    $('.multiple__select').multipleSelect({
        selectAll: false
    });

    $(".range-slider").ionRangeSlider({
        type: "double",
        min: 1000,
        max: 2000,
        from: 1200,
        to: 1800,
        hide_min_max: true,
        hide_from_to: true,
        grid: false
    });

    $('.form__select').select2({
        minimumResultsForSearch: -1,
        dropdownAutoWidth: true

    });


});

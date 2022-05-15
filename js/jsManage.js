// Menu
$(document).ready(function(){
    if ($('.menu-button').is(':visible')) {
        $('.menu-main').appendTo('.menu');
        $('.about-scroll').click(function(){
            $('html,body').animate({scrollTop:$('.tools-block01').offset().top - 50}, 300);
        });
    }else{
        $('.about-scroll').click(function(){
            $('html,body').animate({scrollTop:$('.tools-block01').offset().top - 120}, 300);
        });
    }
});

$(document).ready(function(){
    $('.menu-button').click(function() {
        $('.menu-button').toggleClass('open');
        $('.menu').stop().slideToggle(300).end();
        $('.menu-bg').slideToggle(0).end();

        $('.search').stop().removeClass('search-open');
        $('.search-btn').stop().removeClass('search-btn-open');
        $('.menu-language-options').slideUp();
        $('.plus').stop().removeClass('open');
        $('.menu-list').slideUp();
    });

    $('.menu-language-btn').click(function() {
        $(this).next('.menu-language-options').stop().slideToggle().end().toggleClass('open');
        $('.search').stop().removeClass('search-open');
        $('.search-btn').stop().removeClass('search-btn-open');
    });

    $('.search-pic').click(function(){
        $('.search').stop().addClass('search-open');
        $('.search-btn').stop().addClass('search-btn-open');
        $('.menu-language-options').slideUp();
    });
});


function chk() {
    if(document.search.kw.value == ''){
        $('.search').stop().removeClass('search-open');
        $('.search-btn').stop().removeClass('search-btn-open');
        return false;
    }
    document.search.submit();
}


$(document).ready(function(){
    $('.menu .drop-down').hover(function() {
        if ($('.menu-button').is(':hidden')) {
            $(this).find('.menu-list').stop().fadeToggle();
        }
    });

    $('.drop-down-sub').hover(function () {
        if ($('.menu-button').is(':hidden')) {
            $(this).find('.drop-down-submenu').stop().fadeToggle();
        }
    });
    
    $('.menu-main li a').next('.menu-list').before('<div class="plus"></div>');
    $('.plus').click(function(){
        $(this).toggleClass('open');
        $(this).siblings('.menu-list').stop().slideToggle();
    });

    $('.drop-down-sub a').next('.drop-down-submenu').before('<div class="sub-plus"></div>');
    $('.sub-plus').click(function(){
        $(this).toggleClass('open');
        $(this).siblings('.drop-down-submenu').stop().slideToggle();
    });
});


$(document).ready(function(){
    $('.idx-scroll-btn').click(function(){
        $('html,body').animate({scrollTop:$('.idx-container').offset().top - 150}, 300);
    });
});


// Go Top
$(document).ready(function(){     
    $(function() {
        $("#gotop").click(function() {
            jQuery("html,body").animate({
                scrollTop: 0
            }, 1000);
        });
        $(window).scroll(function() {
            if ($(this).scrollTop() > 300) {
                $('#gotop').fadeIn("fast");
            } else {
                $('#gotop').stop().fadeOut("fast");
            }
        });
    });

    $('#gotop').click(function(event) {
        event.preventDefault();
        $('.menu-language-options').slideUp();
        $('.search').stop().removeClass('search-open');
        $('.search-btn').stop().removeClass('search-btn-open');
        return false;
    })
});


$(function() {
    //Horizontal Tab
    $('#parentHorizontalTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function(event) { // Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
});


// Index
$(document).ready(function(){
    $('.owl-index').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 15000,
        paginationSpeed: 2000,
        nav: true,
        navText:['',''],
        items:1,
    });
});


$(document).ready(function(){
    $('.owl-pro').owlCarousel({
        margin:35,
        loop:true,
        autoplay:true,
        autoplayHoverPause: true,
        dots:false,
        nav:true,
        navText:['',''],
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1024:{
                items:3,
            }
        },
    });
});
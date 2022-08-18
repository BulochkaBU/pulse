$(document).ready(function(){
    // $('.carousel__inner').slick({
    //     speed: 1200,
    //     // adaptiveHeight: true,
    //     prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
    //     nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
    //     responsive: [
    //         {
    //             breakpoint: 992,
    //             settings: {
    //               arrows: false,
    //               dots: true
    //             }
    //           },
    //     ]
    // });
        
        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

        function toggleSlide(item){
            $(item).each(function(i){
                $(this).on('click', function(e){
                    e.preventDefault()
                    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
                })
            })
        }
        toggleSlide('.catalog-item__link')
        toggleSlide('.catalog-item__back')

        // Modal
        $('[data-modal=consultation]').on('click', function() {
            $('.overlay, #consultation').fadeIn('slow');
        })
        $('.modal__close').on('click', function() {
            $('.overlay, #consultation, #order, #thanks').fadeOut('fast');
        })
        $('.button_catalog-item').on('click', function() {
            $('.overlay, #order').fadeIn('slow');
        })
        $('.button_catalog-item').each(function(i) {
            $(this).on('click', function() {
                $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn('slow');
            });
        });

        $('input[name=phone]').mask('+7 (999) 999-99-99')

        // scroll

        $(window).scroll(function(){
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        })

        $("a[href='#up']").click(function(){
            const _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
        });
        
});



const slider = tns({
    container: '.carousel__inner',
    items: 1,
    speed: 1200,
    slideBy: 'page',
    controls: false,
    nav: false,
    // autoHeight: true,
    responsive: {
        768: {
            nav: false,
        },

        576: {
            nav: true,
        },
        320: {
            nav: true,
        },

        // 767: {
        //   gutter: 30,
        // },
        // 991: {
        //   items: 1,

        // }
    }

    
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
})
document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
})

new WOW().init();



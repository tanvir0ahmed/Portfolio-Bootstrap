        // $('.portfolio-item').isotope({
        //  	itemSelector: '.item',
        //  	layoutMode: 'fitRows'
        //  });
        $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');
            
            var selector = $(this).attr('data-filter');
            $('.portfolio-item').isotope({
                filter:selector
            });
            return  false;
        });
        $(document).ready(function() {
        var popup_btn = $('.popup-btn');
        popup_btn.magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        }
        });

        // sticky navigation menu

    let nav_offset_top = $('.header-area').height() + 50;

    function navbarFixed() {
        if ($('.header-area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header-area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header-area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();


        

        });
window.onload = function () {
    //window.scrollTo()
    var scrolled;
    var timer;

    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset;
        scrollTotop();
    }
    function scrollTotop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 20;  //скорость прокрутки
            timer = setTimeout(scrollTotop, 20);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0);
        }
    }
   $(document).on("scroll", window, function () {
        if ($(window).scrollTop() > 400) {
            $("#top").show();
        }
        else {
            $("#top").hide();
        }
    });

    //скрол по якорям
    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 900,
        framesCount = 250;

    anchors.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

            let scroller = setInterval(function () {
                let scrollBy = coordY / framesCount;

                if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    window.scrollBy(0, scrollBy);
                } else {
                    window.scrollTo(0, coordY);
                    clearInterval(scroller);
                }
            }, animationTime / framesCount);
        });
    });

    document.getElementById('forrepairs').onclick = function(event){
        menuShow();
    }
    document.getElementById('close_button').onclick = function (event) {
        menuHide();
    }
    function menuShow(){
        document.querySelector('#applications').style.right = 0;
    }
    function menuHide() {
        document.querySelector('#applications').style.right = '-450px';
    }
    // // jQuery is required to run this code
    // $(document).ready(function () {
    //     scaleVideoContainer();

    //     initBannerVideoSize('.video-container .poster img');
    //     initBannerVideoSize('.video-container .filter');
    //     initBannerVideoSize('.video-container video');

    //     $(window).on('resize', function () {
    //         scaleVideoContainer();
    //         scaleBannerVideoSize('.video-container .poster img');
    //         scaleBannerVideoSize('.video-container .filter');
    //         scaleBannerVideoSize('.video-container video');
    //     });
    // });

    // function scaleVideoContainer() {
    //     var height = $(window).height() + 5;
    //     var unitHeight = parseInt(height) + 'px';
    //     $('.homepage-hero-module').css('height', unitHeight);
    // }

    // function initBannerVideoSize(element) {
    //     $(element).each(function () {
    //         $(this).data('height', $(this).height());
    //         $(this).data('width', $(this).width());
    //     });

    //     scaleBannerVideoSize(element);
    // }

    // function scaleBannerVideoSize(element) {

    //     var windowWidth = $(window).width(),
    //         windowHeight = $(window).height() + 5,
    //         videoWidth,
    //         videoHeight;

    //     // console.log(windowHeight);

    //     $(element).each(function () {
    //         var videoAspectRatio = $(this).data('height') / $(this).data('width');

    //         $(this).width(windowWidth);

    //         if (windowWidth < 1000) {
    //             videoHeight = windowHeight;
    //             videoWidth = videoHeight / videoAspectRatio;
    //             $(this).css({ 'margin-top': 0, 'margin-left': -(videoWidth - windowWidth) / 2 + 'px' });

    //             $(this).width(videoWidth).height(videoHeight);
    //         }

    //         $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    //     });
    // }
}
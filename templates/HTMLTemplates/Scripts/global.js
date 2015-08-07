$(document).ready(function () {
    // promoBackground();
    // homeHeroVideo();

    mainNav.init();
});

var promoBackground = function () {
    var promos = $('.homepage-promo');

    promos.hover(function () {
        if ($(this).data('animation')) {
            $(this).css('background-image', 'url(' + $(this).data('animation') + ')');
        }
        else {
          //  $(this).addClass('blur');
           
        }
        $(this).find('.subheadline').animate({'opacity': 1}, 300);
    },
    function () {
        $(this).css('background-image', 'url(' + $(this).data('static') + ')'); $(this).find('.subheadline').animate({ 'opacity': 0 }, 300);
    }
    );
};

var homeHeroVideo = function () {
    var vid = document.getElementById("bgvid");
    var webmSource = document.getElementById("currentWebm");
    var mp4Source = document.getElementById("currentMP4");
    var next = 1;

    var videos = [
        '//techslides.com/demos/sample-videos/small',
        '//demosthenes.info/assets/videos/polina',
        '//techslides.com/demos/sample-videos/small',
        '//demosthenes.info/assets/videos/polina'];

    vid.play();

    vid.addEventListener('ended', function () {
        mp4Source.setAttribute('src', videos[next] + '.mp4');
        webmSource.setAttribute('src', videos[next] + '.webm');
        vid.load();
        vid.play();
        next++;
    });

    var button = document.getElementById("scrolldown");
    button.addEventListener('click', function () {
        $('html, body').animate({
            scrollTop: $("#homepage-promos").offset().top
        }, 350);
    });
};

var mainNav = {

        init: function() {
            mainNav.onScrollStart();
            $('li.nav-item').hover(
                function() { mainNav.openDropdown($(this));},
                function() { mainNav.closeDropdown(); }
                );
        },
        onScrollStart: function() {
            console.log('1');
            $(document).on("scrollstart",function(){
                console.log('2');
              alert("Started scrolling!");
            });
        },
        openDropdown: function(nav) {
            $('li.nav-item, ul.subnav').removeClass('active');
            $('ul.subnav').hide();
            nav.addClass('active');
            subnav = nav.data('subnav');
            $('ul#'+subnav).addClass('active');
        },
        closeDropdown: function(nav) {
            $('main').on('mouseover', function() {
                $('li.nav-item, ul.subnav').removeClass('active');
                $('ul.subnav').hide();
            });
        }
}


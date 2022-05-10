$(document).ready(function() {
    $('#fullpage').fullpage({
        afterLoad: function(anchorLink, index) {
            if (index != 1 && index < 6) {
                var progress = document.querySelector('.progress-done' + index);
                progress.style.width = progress.getAttribute('data-done') + '%';
                console.log(progress);

                if (index == 2) {
                    var progress2 = document.querySelector('.data-width1');
                    progress2.style.width = progress2.getAttribute('data-done') + '%';
                    console.log(progress2);

                    var progress3 = document.querySelector('.data-width2');
                    progress3.style.width = progress3.getAttribute('data-done') + '%';
                    console.log(progress3);
                }
            }
        },

        onLeave: function(index, nextIndex) {
            if (index != 1 && index < 6) {
                var progress = document.querySelector('.progress-done' + index);
                progress.style.width = '0%';

                if (index == 2) {
                    var progress2 = document.querySelector('.data-width1');
                    progress2.style.width = '0%';

                    var progress3 = document.querySelector('.data-width2');
                    progress3.style.width = '0%';
                }
            }
        },

        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Intro', 'Areas of Focus', 'Neuropathic Pain', 'Migraine Pain', 'Acute Pain', 'Publications', ],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        controlArrows: true,
        scrollingSpeed: 1500,
        autoScrollin: true,
        css3: true,
        parallax: true,
        parallaxOptions: {
            type: 'cover',
            percentage: 62,
            property: 'translate'
        },



    });

    // const progress = document.querySelector('.progress-done');
    // progress.style.width = progress.getAttribute('data-done') + '%';

    $(function() {
        $('a[href*=\\#]:not([href=\\#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
    });

});
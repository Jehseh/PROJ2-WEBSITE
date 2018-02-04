$(document).ready(function () {



    var slideSpeed = 750;
    var $owl = $('.owl-carousel'),
        $nextSlideBtn = $('.nextSlideBtn'),
        $homeSlideBtn = $('.homeSlideBtn');

    var active = $owl.find(".owl-item.active");



    $owl.owlCarousel({
        items: 1,
        dotsContainer: ".carousel-dots",
        responsiveRefreshRate: 10,
        responsiveClass: true,
        touchDrag: false,
        mouseDrag: false,
        onChanged: callback,
        onInitialized: callback
    });



    $nextSlideBtn.click(function () {
        $owl.trigger("next.owl.carousel");
    });

    $("#historytab").click(function () {
        $owl.trigger("to.owl.carousel", 0, 100);
        setTimeout(function () {
            $("#slide-title").show();
            $("#slide-message").hide();
        }, slideSpeed);
    });
    $("#gamestab").click(function () {
        $owl.trigger("to.owl.carousel", 4, 100);
    });
    $("#devtab").click(function () {
        $owl.trigger("to.owl.carousel", 5, 100);
    });
    $("#abouttab").click(function () {
        $owl.trigger("to.owl.carousel", 6, 100);
    });




    //Hack the slides to make it fullscreen on init
    $owl.data('owl.carousel').onResize();

    $("#slide-titletomessage").click(function () {
        $("#slide-title").fadeOut(slideSpeed);
        setTimeout(function () {
            $("#slide-message").fadeIn(slideSpeed);
        }, slideSpeed);
    })
    $("#slide-aatoab").click(function () {
        $("#slide-a-a").fadeOut(slideSpeed);
        setTimeout(function () {
            $("#slide-a-b").fadeIn(slideSpeed);
        }, slideSpeed);

    })
    $("#slide-batobb").click(function () {
        $("#slide-b-a").fadeOut(slideSpeed);
        setTimeout(function () {
            $("#slide-b-b").fadeIn(slideSpeed);
        }, slideSpeed);

    })

    $("#titleslidereset").click(function () {
        setTimeout(function () {
            $("#slide-title").show();
            $("#slide-message").hide();
        }, slideSpeed);

    });

    $("#secondslidereset").click(function () {
        setTimeout(function () {
            $("#slide-a-a").show();
            $("#slide-a-b").hide();
        }, slideSpeed);
    });
    $("#thirdslidereset").click(function () {
        setTimeout(function () {
            $("#slide-b-a").show();
            $("#slide-b-b").hide();
        }, slideSpeed);
    });

    var audio = new Audio();
    audio.src = "assets/audio/bgm.ogg";
    audio.loop = true;
    audio.play();

    $("#playbutton").click(function () {
        switch (audio.paused) {
            case true:
                audio.play();
                $("#playButtonImg").css({
                    "background-color": "#eee"
                });
                break;
            case false:
                audio.pause();
                $("#playButtonImg").css({
                    "background-color": "transparent"
                });
                break;
        }
    });


});

function callback(event) {
    var item = event.item.index + 1;

    switch (item) {
        case 1:
            $("#historytab").css({
                "color": "#555",
                "background-color": "#eee"
            });
            $("#gamestab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#devtab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#abouttab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            break;
        case 2:
            $("#historytab").css({
                "color": "#555",
                "background-color": "#eee"
            });
            $("#gamestab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#devtab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#abouttab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            break;
        case 3:
            $("#historytab").css({
                "color": "#555",
                "background-color": "#eee"
            });
            $("#gamestab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#devtab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#abouttab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            break;
        case 4:
            $("#historytab").css({
                "color": "#555",
                "background-color": "#eee"
            });
            $("#gamestab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#devtab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#abouttab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            break;

        case 5:
            $("#historytab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#gamestab").css({
                "color": "#555",
                "background-color": "#eee"
            });
            $("#devtab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#abouttab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            break;
        case 6:
            $("#historytab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#gamestab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#devtab").css({
                "color": "#555",
                "background-color": "#eee"
            });
            $("#abouttab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            break;
        case 7:
            $("#historytab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#gamestab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#devtab").css({
                "color": "#eee",
                "background-color": "#555"
            });
            $("#abouttab").css({
                "color": "#555",
                "background-color": "#eee"
            });
            break;
    }
}

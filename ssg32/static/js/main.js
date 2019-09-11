$(document).ready(function () {
    svg4everybody({});

    $('.header__burger').click(function () {
        $('.header__nav').slideDown(500)
    })
    $('.header__nav-close').click(function () {
        $('.header__nav').slideUp(500)
    })

    var servicesContentHeigth = 0;
    $(".services__content").each(function (index, h) {
        servicesContentHeigth =
            $(this).height() > servicesContentHeigth ?
            $(this).height() :
            servicesContentHeigth;
        $(this).height(servicesContentHeigth);
    });

    $('[data-btn="feedback"]').click(function () {
        $(".overlay").show(500);
        $(".modal")
            .delay(100)
            .animate({
                    top: "50%"
                },
                500
            );
    });

    function closeModal() {
        $(".modal").animate({
                top: "-100%"
            },
            500
        );
        $(".overlay")
            .delay(200)
            .hide(500);
    }

    $(".overlay").click(closeModal);
    $(".modal__close").click(closeModal);

    var portOwl = $("#portfolio-slider");
    portOwl.owlCarousel({
        items: 1,
        dots: false,
        nav: false,
        autoplay: true,
        loop: true,
        autoWidth: false,
        margin: 20,
        responsive: {
            // 320: {},
            576: {
                items: 2,
            },
            720: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });
    $(".portfolio__next").click(function () {
        portOwl.trigger("next.owl.carousel");
    });
    $(".portfolio__prev").click(function () {
        portOwl.trigger("prev.owl.carousel");
    });

    $("#hero-slider").owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        autoplay: true,
        autoWidth: false,
        loop: true
    });
    $("#content-slider").owlCarousel({
        items: 1,
        dots: true,
        nav: false,
        autoplay: true,
        autoWidth: false,
        loop: true
    });

    // Phone mask

    $('[data-role="phone"]').focusin(function () {
        $(this).attr("placeholder", "+7 (___) ___-__-__");
    });
    $('[data-role="phone"]').focusout(function () {
        if ($(this).attr("placeholder") == "+7 (___) ___-__-__") {
            $(this).attr("placeholder", "Телефон*");
        }
    });
    $('[data-role="phone"]').mask("+7 (999) 999-99-99");

    // Office lightbox
    lightbox.option({
        showImageNumberLabel: false,
        wrapAround: true
    });

    // SVG animation
    $(".services__card").hover(
        function () {
            var obj = $(this).find("object");
            var svgDoc = obj[0].contentDocument;
            $(svgDoc)
                .find(".el-path")
                .addClass("path-active");
        },
        function () {
            var obj = $(this).find("object");
            var svgDoc = obj[0].contentDocument;
            $(svgDoc)
                .find(".el-path")
                .removeClass("path-active");
        }
    );

    function changeContactTitlePlace() {
        if ($(".header").width() < 720) {
            $(".contact-page-form__right").prepend($(".contact-page-form__left .contact-page-form__subtitle, .contact-page-form__left .contact-page-form__title"));
        } else
            $(".contact-page-form__left").prepend($(".contact-page-form__right .contact-page-form__subtitle, .contact-page-form__right .contact-page-form__title"));

    }
    changeContactTitlePlace();
    $(window).resize(changeContactTitlePlace);
});
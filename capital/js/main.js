$(document).ready(function(){function a(){$(".modal").fadeOut(700),$(".overlay").fadeOut(500)}$(".header__burger").click(function(){var a=this;$(a).hasClass("header__burger--active")?($(a).removeClass("header__burger--active"),$(".header__bottomline").slideUp()):($(a).addClass("header__burger--active"),$(".header__bottomline").slideDown())}),$(".faq__item:first-child").addClass("faq__item--active").find(".faq__answer").show(),$(".faq__btn").click(function(){$(this).parent().hasClass("faq__item--active")?$(this).text("+").parent().removeClass("faq__item--active").find(".faq__answer").slideUp():($(".faq__items").find(".faq__item").removeClass("faq__item--active").find(".faq__answer").slideUp().next().text("+"),$(this).text("–").parent().addClass("faq__item--active").find(".faq__answer").slideDown())}),$("#documents-carousel").owlCarousel({margin:20,items:5,dots:!1,nav:!0,navText:['<div class="arrow-left"><img src="img/vector-temp/arrow-left.png" alt=""></div>','<div class="arrow-right"><img src="img/vector-temp/arrow-right.png" alt=""></div>'],navContainer:".about__arrow-block",loop:!0,responsive:{992:{items:5},720:{items:4,stagePadding:50},576:{items:3,stagePadding:50},0:{items:1,stagePadding:50}}}),$("#office-slider").owlCarousel({margin:20,items:3,nav:!0,dots:!1,navText:['<div class="arrow-left"><img src="img/vector-temp/arrow-left.png" alt=""></div>','<div class="arrow-right"><img src="img/vector-temp/arrow-right.png" alt=""></div>'],navContainer:".about__arrow-block",loop:!0,responsive:{992:{items:3},720:{items:2},576:{items:3},0:{items:2}}}),$("#sber-slider").owlCarousel({nav:!0,navText:['<div class="arrow-left"><img src="img/vector-temp/arrow-left.png" alt=""></div>','<div class="arrow-right"><img src="img/vector-temp/arrow-right.png" alt=""></div>'],navContainer:".sber__arrow-block",loop:!0,dots:!1,responsive:{992:{items:3},720:{items:2},576:{items:2},0:{items:1}}}),$("#feedback-carousel").owlCarousel({margin:20,items:3,nav:!0,navText:['<div class="arrow-left"><img src="img/vector-temp/arrow-left.png" alt=""></div>','<div class="arrow-right"><img src="img/vector-temp/arrow-right.png" alt=""></div>'],navContainer:".feedback__arrow-block",loop:!0,dots:!1,responsive:{992:{items:3},720:{items:3},576:{items:2},0:{items:1}}}),$("#about-top-carousel").owlCarousel({items:1,nav:!0,navText:['<div class="about-top__arrow-left arrow-left"><img src="img/vector-temp/arrow-left.png" alt=""></div>','<div class="about-top__arrow-right arrow-right"><img src="img/vector-temp/arrow-right.png" alt=""></div>'],navContainer:".about-top__arrow-block",loop:!0,dots:!1,autoplay:!0,autoplayHoverPause:!0}),$("#hero-slider").owlCarousel({items:1,nav:!1,loop:!0,dots:!0,autoplay:!0,autoplayHoverPause:!0}),$("#index-doc-slider").owlCarousel({margin:20,items:5,nav:!1,loop:!0,dots:!1,responsive:{992:{items:5},720:{items:4,stagePadding:50},576:{items:3,stagePadding:50},0:{items:1,stagePadding:50}}}),$("#index-part-slider").owlCarousel({nav:!0,items:1,dots:!1,navText:['<div class="arrow-left"><img src="img/vector-temp/arrow-left.png" alt=""></div>','<div class="arrow-right"><img src="img/vector-temp/arrow-right.png" alt=""></div>'],navContainer:".part__arrow-block",loop:!0,responsive:{720:{items:2}}}),$("[data-btn=modal-form").click(function(){$(".overlay").fadeIn(500),$(".modal-1").fadeIn(700)}),$("[data-btn=diff").click(function(){$(".overlay").fadeIn(500),$(".modal-2").fadeIn(700)}),$(".overlay").click(function(){a()}),$(".modal__close").click(function(){a()})});
//# sourceMappingURL=main.js.map

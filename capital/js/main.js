$(document).ready(function(){function s(){$(".modal").fadeOut(700),$(".overlay").fadeOut(500),$("body").removeClass("show-modal")}$(".header__burgerbox").click(function(){var s=$(this).find(".header__burger");$(s).hasClass("header__burger--active")?($(s).removeClass("header__burger--active"),$(".header__bottomline").slideUp()):($(s).addClass("header__burger--active"),$(".header__bottomline").slideDown())}),$(".faq__item:first-child").addClass("faq__item--active").find(".faq__answer").show(),$(".faq__btn").click(function(){$(this).parent().hasClass("faq__item--active")?$(this).text("+").parent().removeClass("faq__item--active").find(".faq__answer").slideUp():($(".faq__items").find(".faq__item").removeClass("faq__item--active").find(".faq__answer").slideUp().next().text("+"),$(this).text("–").parent().addClass("faq__item--active").find(".faq__answer").slideDown())}),$("#documents-carousel").owlCarousel({margin:20,items:5,dots:!1,nav:!0,navText:['<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></div>','<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></div>'],navContainer:".about__arrow-block",loop:!0,responsive:{992:{items:5},720:{items:4,stagePadding:50},576:{items:3,stagePadding:50},0:{items:1,stagePadding:50}}}),$("#office-slider").owlCarousel({margin:20,items:3,nav:!0,dots:!1,navText:['<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></div>','<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></div>'],navContainer:".about__arrow-block",loop:!0,responsive:{992:{items:3},720:{items:2},576:{items:3},0:{items:2}}}),$("#sber-slider").owlCarousel({nav:!0,navText:['<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></div>','<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></div>'],navContainer:".sber__arrow-block",loop:!0,dots:!1,responsive:{992:{items:3},720:{items:2},576:{items:2},0:{items:1}}}),$("#feedback-carousel").owlCarousel({margin:20,items:3,nav:!0,navText:['<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></div>','<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></div>'],navContainer:".feedback__arrow-block",loop:!0,dots:!1,responsive:{992:{items:3},720:{items:3},576:{items:2},0:{items:1}}}),$("#about-top-carousel").owlCarousel({items:1,nav:!0,navText:['<div class="about-top__arrow-left arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></div>','<div class="about-top__arrow-right arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></div>'],navContainer:".about-top__arrow-block",loop:!0,dots:!1,autoplay:!0,autoplayHoverPause:!0}),$("#hero-slider").owlCarousel({items:1,nav:!1,loop:!0,dots:!0,autoplay:!0,autoplayHoverPause:!0}),$("#index-doc-slider").owlCarousel({margin:20,items:5,nav:!1,loop:!0,dots:!1,responsive:{992:{items:5},720:{items:4,stagePadding:50},576:{items:3,stagePadding:50},0:{items:1,stagePadding:50}}}),$("#index-part-slider").owlCarousel({nav:!0,items:1,dots:!1,navText:['<div class="arrow-left"><svg class="icon icon-arrow-left"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></div>','<div class="arrow-right"><svg class="icon icon-arrow-right"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></div>'],navContainer:".part__arrow-block",loop:!0,responsive:{720:{items:2}}}),$("[data-btn=modal-form").click(function(){$(".overlay").show(500),$(".modal-1").show(700),$("body").addClass("show-modal")}),$("[data-btn=diff").click(function(){$(".overlay").fadeIn(500),$(".modal-2").fadeIn(700)}),$("[data-btn=best-prog").click(function(){$(".overlay").fadeIn(500),$(".modal-3").fadeIn(700)}),$(".overlay").click(function(){s()}),$(".modal__close").click(function(){s()}),$(".contacts__photo").click(function(){var s=$(this).data("img");$(".modal-img").attr("src",s),$(".overlay").fadeIn(500),$(".modal-img").fadeIn(700),$("body").addClass("show-modal")}),$(".phon").mask("+7 (999) 999-99-99")});
//# sourceMappingURL=main.js.map

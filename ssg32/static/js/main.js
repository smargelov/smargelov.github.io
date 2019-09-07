$(document).ready(function() {
  svg4everybody({});

  var servicesContentHeigth = 0;
  $(".services__content").each(function(index, h) {
    servicesContentHeigth =
      $(this).height() > servicesContentHeigth
        ? $(this).height()
        : servicesContentHeigth;
    $(this).height(servicesContentHeigth);
  });

  $('[data-btn="feedback"]').click(function() {
    $(".overlay").show(500);
    $(".modal")
      .delay(100)
      .animate(
        {
          top: "50%"
        },
        500
      );
  });

  function closeModal() {
    $(".modal").animate(
      {
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
    items: 4,
    dots: false,
    nav: false,
    margin: 20,
    autoplay: true,
    autoWidth: false,
    loop: true
  });
  $(".portfolio__next").click(function() {
    portOwl.trigger("next.owl.carousel");
  });
  $(".portfolio__prev").click(function() {
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

  $('[data-role="phone"]').focusin(function() {
    $(this).attr("placeholder", "+7 (___) ___-__-__");
  });
  $('[data-role="phone"]').focusout(function() {
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
    function() {
      var obj = $(this).find("object");
      var svgDoc = obj[0].contentDocument;
      $(svgDoc)
        .find(".el-path")
        .addClass("path-active");
    },
    function() {
      var obj = $(this).find("object");
      var svgDoc = obj[0].contentDocument;
      $(svgDoc)
        .find(".el-path")
        .removeClass("path-active");
    }
  );
});

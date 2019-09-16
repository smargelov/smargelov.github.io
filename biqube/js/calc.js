$(document).ready(function() {
  $(".calculator__submenu")
    .find(".calculator__subbtn")
    .on("click", function() {
      var item = $(this).attr("data-target");
      $(".calculator__subbtn").removeClass("active");
      $(this).addClass("active");
      $(".calculator__subitem").removeClass("active");
      $("." + item).addClass("active");
    });

  $(".newTable__spoiler").click(function() {
    var parentBlock = $(this).closest(".newTable__tr");
    var hideBlock = parentBlock.next(".newTable__hide-tr");

    if ($(parentBlock).hasClass("open")) {
      $(parentBlock).removeClass("open");
      $(hideBlock).removeClass("active");
      $(this).text("Развернуть");
    } else {
      $(".newTable__tr").removeClass("open");
      $(parentBlock).addClass("open");
      $(".newTable__hide-tr").removeClass("active");
      $(hideBlock).addClass("active");
      $(".newTable__spoiler").text("Развернуть");
      $(this).text("Свернуть");
    }
  });

  // New modal

  $(".newTable__btn").click(function(e) {
    e.preventDefault();
    $(".newOverlay").fadeIn(500);
    $(".new-modal")
      .delay(600)
      .addClass("active");
  });

  function closeModal() {
    $(".new-modal").removeClass("active");
    $(".newOverlay")
      .delay(600)
      .fadeOut(500);
  }

  $(".new-modal__close, .newOverlay, .clean-btn").click(closeModal);
  $("body").keydown(function(e) {
    if (e.keyCode == 27) {
      closeModal();
    }
  });
});

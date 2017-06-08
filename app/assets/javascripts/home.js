$(document).on('turbolinks:load', function() {
  $('.header__initial').on('click', function() {
    $('.pop-over').addClass("is-shown");
  });

  $('.pop-over .fa-times').on('click', function() {
    $('.pop-over').removeClass("is-shown");
  });

  $('.new_board .board_link').on('click', function() {
    $('.pop-over__board').addClass("is-shown");
  });

  $('.pop-over__board .fa-times').on('click', function() {
    $('.pop-over__board').removeClass("is-shown");
  });

  $('#new_board').on('submit', function() {
    $('.pop-over__board').removeClass("is-shown");
  });

  $('.color-selector__item').on('click', function() {
    $('.color-checked').removeClass("color-checked");
    $(this).addClass("color-checked");
    var class_name = $('.color-checked').attr("class");
    var color = class_name.match(/[a-z]+-content/);
    if (color != null) {
      var color_value = color[0].replace(/-content/, "");
      $('#board_color').attr('value', color_value);
    }
  });
});

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
});

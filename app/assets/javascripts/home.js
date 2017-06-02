$(function() {
  $('.header__initial').on('click', function() {
    $('.pop-over').addClass("is-shown");
  });

  $('.fa-times').on('click', function() {
    $('.pop-over').removeClass("is-shown");
  });
});

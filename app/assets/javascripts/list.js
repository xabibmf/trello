$(document).on('turbolinks:load', function() {
  $('.lists__item__newlist__link').on('click', function() {
    $('.pop-over__list').addClass('is-shown');
  });

  $('.popover-list-close').on('click', function() {
    $('.pop-over__list').removeClass('is-shown');
  });
});

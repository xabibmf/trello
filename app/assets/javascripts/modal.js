$(document).on('turbolinks:load', function() {
  $('.lists__item__content__card').each(function() {
    $(this).on('click', function() {
      $('.mask').removeClass('hidden');
    });
  });
});

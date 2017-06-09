$(document).on('turbolinks:load', function() {
  var mask = $('.mask');
  var times = $('.modal-close');

  function maskClose() {
    mask.addClass('hidden');
    $('.modal').addClass('hidden');
  }

  $('.lists__item__content__card').each(function() {
    $(this).on('click', function() {
      mask.removeClass('hidden');
      $(this).next().removeClass('hidden');
    });
  });

  times.on('click', function() {
    maskClose();
  });

  mask.on('click', function() {
    maskClose();
  });
});
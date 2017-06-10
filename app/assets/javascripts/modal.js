$(document).on('turbolinks:load', function() {
  var mask = $('.mask');
  var times = $('.modal-close');
  var activityForm = $('#activity_memo');
  var submit = $('.activity-submit-button');

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

  activityForm.on('keyup', function() {
    if ($(this).val().length != 0) {
      submit.addClass('active');
    } else {
      submit.removeClass('active');
    }
  });

  submit.on('submit', function() {
    if (!$(this).hasClass('active')) {
      return false;
    }
  });
});

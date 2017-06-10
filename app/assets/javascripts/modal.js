$(document).on('turbolinks:load', function() {
  var mask = $('.mask');
  var times = $('.modal-close');

  function maskClose() {
    mask.addClass('hidden');
    $('.modal').addClass('hidden');
  }

  $('.lists__item__content__card').each(function() {
    var activityForm = $(this).next().find('#activity_memo');
    var submit = $(this).next().find('.activity-submit-button');
    var form = $(this).next().find('#new_activity');
    $(this).on('click', function() {
      mask.removeClass('hidden');
      $(this).next().removeClass('hidden');
    });
    activityForm.on('keyup', function() {
      if ($(this).val().length != 0) {
        submit.addClass('active');
      } else {
        submit.removeClass('active');
      }
    });
    form.on('submit', function() {
      if (!submit.hasClass('active')) {
        return false;
      }
    });
  });

  times.on('click', function() {
    maskClose();
  });

  mask.on('click', function() {
    maskClose();
  });
});

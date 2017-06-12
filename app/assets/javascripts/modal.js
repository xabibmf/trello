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
    $(this).next().find('.card-name').on('click', function() {
      $(this).addClass('hidden');
      $(this).next().addClass('is-shown');
      $(this).next().find('.card-edit-form').select();
    });
    $(this).next().find('.card-edit-form').blur(function() {
      $(this).parent().parent().prev().removeClass('hidden');
      $(this).parent().parent().removeClass('is-shown');
    });

    $(this).next().find('.modal__edit-link').on('click', function() {
      $(this).addClass('hidden');
      $(this).next().addClass('is-shown');
    });

    $(this).next().find('.card-details-close').on('click', function() {
      $(this).parent().parent().prev().removeClass('hidden');
      $(this).parent().parent().removeClass('is-shown');
    });

    $(this).next().find('.log-list__item').each(function() {
      $(this).find('.log-list__item__footer__edit').on('click', function() {
        $(this).parent().prev().prev().addClass('hidden');
        $(this).parent().prev().addClass('is-shown');
      });

      $(this).find('.activity-memo-close').on('click', function() {
        $(this).parent().parent().prev().removeClass('hidden');
        $(this).parent().parent().removeClass('is-shown');
      });
    });
  });

  times.on('click', function() {
    maskClose();
  });

  mask.on('click', function() {
    maskClose();
  });
});

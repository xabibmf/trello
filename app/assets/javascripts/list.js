$(document).on('turbolinks:load', function() {
  function clearPopoverList() {
    $('#list_name').val('');
    $('.pop-over__list').removeClass('is-shown');
  }

  $('.lists__item__newlist__link').on('click', function() {
    $('.pop-over__list').addClass('is-shown');
  });

  $('.popover-list-close').on('click', function() {
    clearPopoverList();
  });

  $('.lists__item__newlink').each(function() {
    $(this).on('click', function() {
      $(this).prev().children('.create__card').addClass('is-shown');
    });
  });

  $('.card-close').each(function() {
    $(this).on('click', function() {
      $(this).parent().parent().removeClass('is-shown');
    });
  });

  $('.lists__item').each(function() {
    $(this).children('.lists__item__header').on('click', function() {
      $(this).addClass('hidden');
      $(this).next().addClass('is-shown');
      $(this).next().find('.list-edit-form').select();
    });

    $(this).find('.list-edit-form').blur(function() {
      $(this).parent().parent().prev().removeClass('hidden');
      $(this).parent().parent().removeClass('is-shown');
    });
  });
});

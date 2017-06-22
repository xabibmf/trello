$(document).on('turbolinks:load', function() {
  function clearPopoverList() {
    $('#list_name').val('');
    $('.pop-over__list').removeClass('is-shown');
  }

  $('.lists__item__newlist__link').on('click', function() {
    $('.pop-over__list').addClass('is-shown');
    $(this).next().find('#list_name').focus();
  });

  $('.popover-list-close').on('click', function() {
    clearPopoverList();
  });

  $.each($('.lists__item__newlink'), function() {
    $(this).on('click', function() {
      var target = $(this).prev().children('.create__card');
      target.addClass('is-shown');
      target.find('#card_name').focus();
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
      var flg = true;
      jQuery(":hover").each(function() {
        if ($(this).hasClass('list-delete-button__link')) {
          flg = false;
        }
      });
      if (flg) {
        $(this).parent().parent().prev().removeClass('hidden');
        $(this).parent().parent().removeClass('is-shown');
      }
    });

    $(this).find('.edit_list').on('submit', function() {
      $(this).parent().prev().removeClass('hidden');
      $(this).parent().removeClass('is-shown');
    });
  });

  $('.board-header__name').on('click', function() {
    $(this).next().addClass("is-shown");
  });
});

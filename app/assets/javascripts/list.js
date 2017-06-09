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
});

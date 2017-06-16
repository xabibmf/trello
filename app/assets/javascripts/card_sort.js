$(document).on('turbolinks:load', function() {
  $('.lists__item__content').sortable({
    items: $('.card'),
    tolerance: "pointer",
    placeholder: "emptycard",
    handle: $('.lists__item__content__card'),
    start: function(e, ui) {
      $('.lists__item').each(function() {
        if ($(this).find('.card').length == 1 && $(this).find('.hiddena').length == 0) {
          $(this).find('.lists__item__content').prepend('<div class="card hiddena"><div class="lists__item__content__card"></div></div>');
        }
      });
    },
    beforeStop: function(e, ui) {
      $('.lists__item').each(function() {
        if ($(this).find('.card').length > 2) {
          $(this).find('.hiddena').remove();
        } else if ($(this).find('.card').length == 1　&& $(this).find('.hiddena').length == 0) {
          $(this).find('.lists__item__content').prepend('<div class="card hiddena"><div class="lists__item__content__card"></div></div>');
        }
      });
    },
    update: function(e, ui) {
      item = ui.item;
      item_data = item.data();
      $.ajax({
        type: 'PUT',
        url: item_data.updateUrl,
        data: { position: item.index(), new_list_id: item.parent().parent().attr('id') }
      });
    }
  });
});

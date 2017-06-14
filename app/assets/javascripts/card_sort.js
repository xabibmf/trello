$(document).on('turbolinks:load', function() {
  $('.lists__item__content').sortable({
    items: $('.card'),
    tolerance: "pointer",
    placeholder: "emptycard",
    connectWith: $('.lists__item__content'),
    update: function(e, ui) {
      item = ui.item;
      item_data = item.data();
      $.ajax({
        type: 'PUT',
        url: item_data.updateUrl,
        dataType: 'json',
        data: { position: item.index(), new_list_id: item.parent().parent().attr('id') }
      });
    }
  });
});

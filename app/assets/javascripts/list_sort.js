$(document).on('turbolinks:load', function() {
  $('.lists').sortable({
    items: $('.lists__item:not(:last-child)'),
    tolerance: "pointer",
    handle: $('.lists__item__header'),
    update: function(e, ui) {
      item = ui.item;
      item_data = item.data();
      $.ajax({
        type: 'PUT',
        url: item_data.updateUrl,
        dataType: 'json',
        data: { position: item.index() }
      });
    }
  });
});

$(document).on('turbolinks:load', function() {
  function buildBoardHTML(board) {
    var html = $('<li class="board-list__board ' + board.color + '-content">');
    html.append('<a class="board_link" href="/boards/' + board.id + '/lists/new">' + board.name + '</a>');
    return html;
  }

  $('#new_board').on('submit', function(e) {
    var nameField = $('#board_name');
    if(!nameField.val()) {
      return;
    }
    var formData = new FormData($('#new_board').get(0));
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: './boards',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildBoardHTML(data);
      nameField.val('');
      $('.color-checked').removeClass('color-checked');
      $('.board-list').children('.new_board').before(html);
    })
    .fail(function() {
      alert("fail to create board");
    })
    .always(function() {
      $(this).attr('disabled', false);
    });
  });
});

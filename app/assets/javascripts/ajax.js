$(document).on('turbolinks:load', function() {
  function buildBoardHTML(board) {
    var html = $('<li class="board-list__board ' + board.color + '-content">');
    html.append('<a class="board_link" href="/boards/' + board.id + '/lists/new">' + board.name + '</a>');
    return html;
  }

  $('.new_board').on('submit', function(e) {
    var nameField = $('#board_name');
    if(!nameField.val()) {
      return;
    }
    var test = '#board_name';
    var formData = new FormData($(this).get(0));
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
      var boardColor = '.color-selector_item.' + data.color + '-content';
      console.log($(boardColor));
      $(boardColor).removeClass(boardColor);
      $('.board-list').children('.new_board').before(html);
    })
    .fail(function() {

    })
    .always(function() {
      $(this).attr('disabled', false);
    });
  });
});

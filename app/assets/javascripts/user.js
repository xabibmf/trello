$(function() {
  $('#new_user').on('submit', function(e) {
    var initial = $('#user_name').val().slice(0, 1);
    $('#user_initial').val(initial);
  });
});

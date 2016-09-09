$(document).ready( function() {
  var firstClick;
  var secondClick;
  var click;
  var $gameButtons = $(".game_button");


  $('.card').on('click', function() {
    var that = $(this);
    that.toggleClass('card-bg');
    that.find('p:first').toggleClass('hidden');
  });

// location.reload - use this to refresh game without refreshing page. Assign to reset button and end of game alert
});

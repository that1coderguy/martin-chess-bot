// Initialize game logic
var game = new Chess();

// Initialize board
var board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDrop: function(source, target) {
    var move = game.move({ from: source, to: target, promotion: 'q' });
    if (move === null) return 'snapback';
    setTimeout(botMove, 250);
  }
});

// Simple bot: random legal move
function botMove() {
  var moves = game.moves();
  if (moves.length === 0) return;
  var move = moves[Math.floor(Math.random() * moves.length)];
  game.move(move);
  board.position(game.fen());
}

// Button to manually trigger bot
document.getElementById('botMoveBtn').addEventListener('click', botMove);

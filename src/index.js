
import Game from "./scripts/game";
import GameView from "./scripts/game_view";


window.addEventListener('DOMContentLoaded', function(event) {
  const canvasEl = document.getElementById('canvas');
  const startButton = document.getElementById("start-btn");
  const ctx2d = canvasEl.getContext('2d');
  const game = new Game();
  const game_view = new GameView(game, ctx2d);
  
  game_view.start();
});

startBtn.classList.remove("hidden");

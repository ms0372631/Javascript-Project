
import Game from "./scripts/game";
import GameView from "./scripts/game_view";
import Bridge from "./scripts/bridge";


window.addEventListener('DOMContentLoaded', function(event) {
  const canvas = document.getElementById('canvas');
  const ctx2d = canvas.getContext('2d');
  const game = new Game(ctx2d);
  const game_view = new GameView(game, ctx2d);
  const startButton = document.getElementById("start-btn");
  const restartButton = document.getElementById("restart-btn");
  const muteBtn = document.getElementById("mute-btn");


  startBtn.classList.remove("hidden");
  startButton.addEventListener("click", () => {
    game_view.start();
    startButton.classList.add("hidden");
    music.play();
  });

  restartButton.addEventListener("click", () => {
    game_view.start();
  });


});
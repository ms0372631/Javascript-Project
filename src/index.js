
import Game from "./scripts/game";
import GameView from "./scripts/game_view";
import Bridge from "./scripts/bridge";

window.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById('canvas');
  const ctx2d = canvas.getContext('2d');
  const game = new Game(ctx2d);
  const bridge = new Bridge(ctx2d);
  const game_view = new GameView(game, ctx2d, bridge);
  const startButton = document.getElementById("start-btn");
  const restartButton = document.getElementById("restart-btn");
  const musicButton = document.getElementById("music-btn");
  const music = document.getElementById("music");
  const text = document.getElementById("text");


  startButton.removeAttribute("hidden");
  startButton.addEventListener("click", () => {
    game_view.draw();
    startButton.setAttribute("hidden", null);
    musicButton.removeAttribute("hidden");
    music.play();

    text.setAttribute("hidden", null);
  });

  // restartButton.addEventListener("click", () => {
  //   game_view.start();
  // });

  musicButton.addEventListener("click", e => {
    e.stopPropagation();
    if (music.paused) {
      music.play();
      musicButton.innerText = "Mute";
    } else {
      music.pause();
      musicButton.innerText = "Unmute";
    }
  });


});

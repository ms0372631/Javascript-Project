
import Game from "./scripts/game";
import GameView from "./scripts/game_view";
import Bridge from "./scripts/bridge";

window.addEventListener("DOMContentLoaded", () => {

  const canvas = document.getElementById('canvas');
  const ctx2d = canvas.getContext('2d');
  const bridge = new Bridge(ctx2d);
  const game = new Game(ctx2d, bridge);
  const game_view = new GameView(game, ctx2d, bridge);
  const startButton = document.getElementById("start-btn");
  const restartButton = document.getElementById("restart-btn");
  const musicButton = document.getElementById("music-btn");
  const music = document.getElementById("music");
  const text = document.getElementById("text");
  const grids = document.getElementsByClassName("grid");

  startButton.removeAttribute("hidden");
  startButton.addEventListener("click", () => {
    game_view.draw();
    for (let i = 0; i < grids.length; i++) {
      grids[i].removeAttribute("hidden");
    }
    text.setAttribute("hidden", null);
    startButton.setAttribute("hidden", null);
    musicButton.removeAttribute("hidden");
    music.play();
  });

  // restartButton.addEventListener("click", () => {
  //   game_view.start();
  // });

  musicButton.addEventListener("click", e => {
    e.stopPropagation();
    if (music.paused) {
      music.play();
      musicButton.innerText = "-MUTE--";
    } else {
      music.pause();
      musicButton.innerText = "UNMUTE";
    }
  });


});

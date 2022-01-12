
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
  const replayButton = document.getElementById("replay-btn");
  const musicButton = document.getElementById("music-btn");
  const icons = document.getElementsByClassName("icons");
  const music = document.getElementById("music");
  const text = document.getElementById("text");
  const grids = document.getElementsByClassName("grid");
  game.game_view = game_view;
  startButton.removeAttribute("hidden");
  startButton.addEventListener("click", () => {
    game_view.draw();
    for (let i = 0; i < grids.length; i++) {
      grids[i].removeAttribute("hidden");
    }
    for (let i = 0; i < icons.length; i++) {
      icons[i].removeAttribute("hidden");
    }
    text.setAttribute("hidden", null);
    startButton.setAttribute("hidden", null);
    canvas.removeAttribute('hidden');
    musicButton.removeAttribute("hidden");
    music.play();
    game.showRegularGlass();
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

  replayButton.addEventListener("click", e => {
    replayButton.setAttribute("hidden", null);
    for (let i = 0; i < grids.length; i++) {
      grids[i].removeAttribute("hidden");
    }
    text.setAttribute("hidden", null);
    startButton.setAttribute("hidden", null);
    musicButton.removeAttribute("hidden");
    music.play();
    const game = new Game(ctx2d, bridge);
    const game_view = new GameView(game, ctx2d, bridge);
    game.game_view = game_view;
    game.showRegularGlass();
    game_view.draw();
  })
});

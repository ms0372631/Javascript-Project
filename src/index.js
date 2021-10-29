
import Game from "./scripts/game";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World");
  const main = document.getElementById("main");
  new Game(main);
});
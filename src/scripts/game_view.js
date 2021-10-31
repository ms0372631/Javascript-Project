
import Game from "./game";

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.backgroundReady = false;
    this.backgroundImg.src = "./assets.background.png";
  }


  addEventListener("keydown", function(e) {
    
  })


  start () {
    // ...do something specific to an instance
    let gv = this;
    setInterval(function() {
      gv.game.draw(gv.ctx);
    }, 500);
  }

  static ClassMethod() {
      // ...logic not specific to an instance
  }

}

export default GameView;
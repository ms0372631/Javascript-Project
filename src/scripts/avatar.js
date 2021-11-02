import Game from "./game";
import Bridge from "./bridge";

class Avatar {
  constructor(ctx) {
    this.ctx = ctx;
  }

  draw() {
    while (this.game.listofAvatars--) {
      var ava = new Image();
      var currentAva = this.game.listofAvatars.pop();
      ava.onload = () => {
        this.ctx.drawImage(ava, this.avaPosX, 125, 125);
      };

      avatar.src = "./dist/assets/images/bridges.png";
    }
  }

  makeMove(i ,j) {
    if (Bridge.bridge[i][j]) {

    }

  }

  // loadImage() {
  //   if (backgroundReady) {
  //     context
  //   }
  // }
}

export default Avatar;
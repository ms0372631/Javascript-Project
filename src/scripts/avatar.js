import Game from "./game";
import Bridge from "./bridge";

class Avatar {
  constructor(ctx, pos) {
    this.ctx = ctx;
    this.pos = pos;
  }

  draw() {
    var ava = new Image();
    ava.src = "./dist/assets/images/avatar.png";
    
    ava.onload = () => {
      console.log(this.pos);
      this.ctx.drawImage(ava, this.pos[0], this.pos[1], 75, 75);
    };
  }



  // loadImage() {
  //   if (backgroundReady) {
  //     context
  //   }
  // }
}

export default Avatar;
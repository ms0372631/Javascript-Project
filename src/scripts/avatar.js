import Game from "./game";
import Bridge from "./bridge";

class Avatar {
  constructor(ctx, pixel, id) {
    this.ctx = ctx;
    this.pixel = pixel;
    this.pos = [-1, 0];
    this.id = id;
  }

  draw() {
    var ava = new Image();
    ava.src = "./dist/assets/images/avatar.png";
    
    ava.onload = () => {
      this.ctx.drawImage(ava, this.pixel[0], this.pixel[1], 75, 75);
    };
  }



  // loadImage() {
  //   if (backgroundReady) {
  //     context
  //   }
  // }
}


export default Avatar;
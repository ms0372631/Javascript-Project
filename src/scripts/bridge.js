
// import { cosh } from "core-js/core/number";

class Bridge {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = [];
    this.defaultPos = [50, 700];
    this.buildBridge();
  }
  

  drawBridge() {
    let bridge1 = new Image();
    let bridge2 = new Image();
    
    bridge1.src = "./dist/assets/images/bridge.png";
    bridge2.src = "./dist/assets/images/bridge.png";
    bridge1.onload = () => {
      this.ctx.drawImage(bridge1, 75, 150, 125, 590);
    };
    bridge2.onload = () => {
      this.ctx.drawImage(bridge2, 250, 150, 125, 590);
    };
  }

  drawFinishline() {
    let finishline = new Image();
    finishline.src = "./dist/assets/images/finishline.png";
    finishline.onload = () => {
      this.ctx.drawImage(finishline, 0, 0, 450, 150);
      this.drawBridge();
    };
  }


  draw(avatars) {
    let platform = new Image();
    platform.src = "./dist/assets/images/platform.png";
    platform.onload = () => {
      this.ctx.drawImage(platform, 0, 660, 450, 350);
      this.drawFinishline();
      let i = 0;
      while (i < avatars.length) {
        let currAva = avatars[i];
        currAva.draw();
        i++;
      }
    }; 
  }

  buildBridge() {
    const random = ["regular", "tempered"];
    for (let i = 0; i < 7; i++) {
      if (random[Math.floor(Math.random() * 2)] === "regular") {
        this.grid.push(["regular", "tempered"]);
      }
      else {
        this.grid.push(["tempered", "regular"]);
      }
    }
    this.grid.push(["endpoint, endpoint"]);
    console.log(this.grid);
  }
 
}

export default Bridge;

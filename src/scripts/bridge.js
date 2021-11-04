import TemperedGlass from "./tempered_glass";
import RegularGlass from "./regular_glass";

class Bridge {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = [];
    this.posofReg = [];
    this.posofTemp = [];
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
    const grid = [];
    for (let i = 0; i < 8; i++) {
      if (random[Math.floor(Math.random() * 2)] === "regular") {
        grid.push(["regular", "tempered"]);
        this.posofReg.push([i, 0]);
        this.posofTemp.push([i, 1]);
      }
      else {
        grid.push(["tempered", "regular"]);
        this.posofReg.push([i, 1]);
        this.posofTemp.push([i, 0]);
      }
    }
    return grid;
  }
 
}

export default Bridge;

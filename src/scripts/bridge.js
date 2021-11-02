import TemperedGlass from "./tempered_glass";
import RegularGlass from "./regular_glass";

class Bridge {
  constructor(ctx) {
    this.ctx = ctx;
    this.grid = Bridge.BuildBridge();
    this.spotTaken = [];
  }

  draw() {
    var platform = new Image();

    platform.onload = () => {
      this.ctx.drawImage(platform, 0, 660, 450, 350);
    };
    platform.src = "./dist/assets/images/platform.png";

    var finishline = new Image();

    finishline.onload = () => {
      this.ctx.drawImage(finishline, 0, 0, 450, 150);
    };
    finishline.src = "./dist/assets/images/finishline.png";

    var bridge1 = new Image();
    bridge1.onload = () => {
      this.ctx.drawImage(bridge1, 75, 150, 125, 590);
    };
    bridge1.src = "./dist/assets/images/bridge.png";

    var bridge2 = new Image();
    bridge2.onload = () => {
      this.ctx.drawImage(bridge2, 250, 150, 125, 590);
    };
    bridge2.src = "./dist/assets/images/bridge.png";
  }

  static BuildBridge() {
    const random = ["regular", "tempered"];
    let grid = [];
    for (let i = 1; i < 11; i++) {
      if (random[Math.floor(Math.random() * 2)] === "regular") {
        let tGlass = new TemperedGlass(i, 1);
        let rGlass = new RegularGlass(i, 0);
        grid.push([rGlass, tGlass]);
      }
      else {
        let tGlass = new TemperedGlass(i, 0);
        let rGlass = new RegularGlass(i, 1);
        grid.push([tGlass, rGlass]);
      }
    }
  }
 
}

export default Bridge;

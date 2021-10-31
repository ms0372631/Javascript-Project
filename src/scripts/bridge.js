import TemperedGlass from "./tempered_glass";
import RegularGlass from "./regular_glass";

class Bridge {
  constructor(ctx) {
    this.grid = Bridge.BuildBridge();
    this.spotTaken = [];
  }

  static BuildBridge() {
    const random = ["regular", "tempered"];
    let grid = [];
    for (let i = 1; i < 11; i++) {
      if (random[getRandomInt(1)] === "regular") {
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


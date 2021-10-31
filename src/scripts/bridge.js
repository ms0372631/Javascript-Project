import TemperedGlass from "./tempered_glass";
import RegularGlass from "./regular_glass";

class Bridge {
  constructor() {
    this.bridge = Bridge.BuildBridge();
    this.spotTaken = [];
  }

  static BuildBridge() {
    const random = ["regular", "tempered"];
    let bridge = [];
    for (let i = 1; i < 11; i++) {
      if (random[getRandomInt(1)] === "regular") {
        let tGlass = new TemperedGlass(i, 1);
        let rGlass = new RegularGlass(i, 0);
        bridge.push([rGlass, tGlass]);
      }
      else {
        let tGlass = new TemperedGlass(i, 0);
        let rGlass = new RegularGlass(i, 1);
        bridge.push([tGlass, rGlass]);
      }
    }
  }

 
}
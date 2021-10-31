import Glass from "./glass";
import Avatar from "./avatar";
import Game from "./game";

class RegularGlass extends Glass{
  constructor(i, j) {
    super();
    this.checkBroken();
  }

  checkBroken() {
    if (this.beingStepped()) {
      this.isBroken = true;
      Game.numofAvatar--;
      Game.avatars = Game.avatar.filter(el => el != [i, j]);
    }
  }
  
}

export default RegularGlass;
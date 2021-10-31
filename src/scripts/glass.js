import Bridge from "./bridge";


class Glass {
  constructor(i, j) {
    this.pos = [i, j];
    this.hasAvatar = false;
    this.isBroken = false;
    this.beingStepped();
  }

  beingStepped() {
    for (let i = 0; i < Bridge.spotTaken.length; i++)
      if (Bridge.spotTaken[i] === this.pos)
        this.hasAvatar = true;
  }

}

export default Glass;
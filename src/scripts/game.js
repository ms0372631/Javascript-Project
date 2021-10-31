
import Bridge from "./game";
import Avatar from "./avatar";

class Game {
  constructor(ele) {
    this.ava_num = make_ava;
    this.score = 0;
    this.timeLimit = 60;
    this.numofAvatar = 10;
    this.level = 0;
    this.levelStarted = false;
    this.gameOver = false;
    this.avatars = [];
}

  start() {
    this.startNewLevel();
  }

  startNewLevel() {
    this.levelStarted = true;
    this.level++;

  }

  Timer() {
    this.timeLimit--;
    var minutes = Math.floor(this.timeLimit / 60);
    var seconds = this.timeLimit - (minutes * 60);
    var timeString = this.addZeros(minutes) + ":" + this.addZeros(seconds);
    if (this.timeLimit === 0) {
      outofTime();
      this.gameover();
    }
  }

  CreateAvatars() {
    for (let i = 0; i < this.numofAvatars; i++) {
      this.avatars.push(Avatar.new(-1, -1));
    }
  }



  NextStage() {
    this.start();
    numofAvatar--;
  }

  stage() {
    
  }

  make_ava() {

  }
  

  start() {
    this.toggleScene('start');

    //image hide 
    //image show
  }

  play() {
    this.toggleScene('');
  }

  draw() {

  }


  new() {

  }

  win() {
   
    
  }

  gameover() {
    if (this.ava_num === 0 || )
      return true;
  }
}
export default Game;


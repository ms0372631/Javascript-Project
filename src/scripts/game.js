
import Bridge from "./game";
import Avatar from "./avatar";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.score = 0;
    this.timeLimit = 60;
    this.numofAvatar = 10;
    this.level = 0;
    this.levelStarted = false;
    this.gameOver = false;
    this.avatars = [];
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
      this.gameover();
    }
  }

  CreateAvatars() {
    for (let i = 0; i < this.numofAvatars; i++) {
      this.avatars.push(Avatar.new(-1, -1));
    }
  }

  Make_move() {

  }

  NextStage() {
    this.start();
    numofAvatar--;
  }

  stage() {
    
  }



  start() {
    // this.toggleScene('start');
    this.startNewLevel();

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
    if (this.ava_num === 0)
      return true;
  }
}


export default Game;


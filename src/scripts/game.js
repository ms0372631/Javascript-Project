
import Bridge from "./game";
import Avatar from "./avatar";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.score = 0;
    this.timeLimit = 60;
    this.timeRemaining = 30;
    this.numofAvatar = 3;
    this.listofAvatars = [];
    this.level = 0;
    this.levelStarted = false;
    this.gameOver = false;
    this.CreateAvatar();
    // setInterval(this.Timer.bind(this), 1000);
}


  startNewLevel() {
    this.levelStarted = true;
    this.level++;

  }

  CreateAvatar() {
    while (this.listofAvatars.length < this.numofAvatar) {
      const newAva = new Avatar();
      this.listofAvatars.push(newAva);
    }
  }
  

  Timer() {
    if (this.timeRemaining == 0)
      this.gameover();
    while (this.timeRemaining--) {
      this.timeLimit--;
      var minutes = Math.floor(this.timeLimit / 60);
      var seconds = this.timeLimit - (minutes * 60);
      var timeString = minutes + ":" + seconds;
      if (this.timeLimit === 0) {
        this.gameover();
      }
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
  lose() {
    
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


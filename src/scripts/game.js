
import Bridge from "./game";
import Avatar from "./avatar";
import GameView from "./game_view";

class Game {
  constructor(ctx, bridge) {
    this.bridge = bridge;
    this.ctx = ctx;
    this.score = 0;
    this.timeRemaining = 30;
    this.listofAvatars = [];
    this.numofAvatar = 3;
    this.level = 0;
    this.levelStarted = false;
    this.gameOver = false;
    this.currentPos = [-1, -1];
    this.passedby = [];
    this.CreateAvatars();
    this.Make_move();
    this.defaultPos = [50, 700];
    // setInterval(this.Timer.bind(this), 1000);
    // posMap = {
    //   "01": [],
    //   ""
    // };
} 


  startNewLevel() {
    this.levelStarted = true;
    this.level++;

  }

  CreateAvatars() {
    while (this.listofAvatars.length < this.numofAvatar) {
      this.defaultPos[0] += 125;
      const newAva = new Avatar(this.ctx, this.defaultPos.slice());
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

  currentAva() {
    return this.listofAvatars[this.listofAvatars.length - 1];
  }

  Make_move() {
    const leftBridge = document.getElementById("bridgeleft");
    const rightBridge = document.getElementById("bridgeright");
    leftBridge.addEventListener("click", (event) => {
      // if (event.target.tagName === "li") {
        const nextPos = [parseInt(event.target.id[0], 10), parseInt(event.target.id[1], 10)];
          if (nextPos[1] != this.currentPos[1] + 1) {
            alert('You could only choose the spots on the next row!');
            // this.Make_move();
          }
          else {
            this.updatePixel(this.currentAva(), nextPos);
            this.currentPos = nextPos;
            if (this.currentPos[1] === 7)
              this.game.win();
              this.checkGlass(nextPos);
        }
      console.log(this.currentPos);
      //}
    });
    rightBridge.addEventListener("click", (event) => {
      //if (event.target.tagName === "li") {
        const nextPos = [parseInt(event.target.id[0], 10), parseInt(event.target.id[1], 10)];
        if (nextPos[1] != this.currentPos[1] + 1) {
          alert('You could only choose the spots on the next row!');
        }
        else {
          this.updatePixel(this.currentAva(), );
          this.currentPos = nextPos;
          if (this.currentPos[1] === 7)
            this.game.win();
          // this.checkGlass(nextPos);
        }
      //}
      console.log(this.currentPos);
      if (this.currentPos[1] === 7)
        this.game.win();
    });
    
    // for (let step of steps) {
    //   step.addEventListener("click", () => {
    //     const nextPos = [parseInt(step.id[0], 10), parseInt(step.id[1], 10)];
    //     console.log(nextPos);
    //     if (nextPos[1] != this.currentsPos[1]) {
    //       alert('You could only choose the spots on the next row!');
    //     }
    //     else {
    //       this.checkGlass(nextPos);

    //     }
    //   });
    // }
  }

  checkGlass(nextPos) {
    if (this.bridge[nextPos[0]], [nextPos[1]] === "regular") {
      //do the broken glass animation
      // this.listofAvatars.pop();
      if (this.numofAvatar != 0) {
        // GameView.draw()
        //clear one avatar and restart
      }
      else
        this.gameover();
    }
    else {
      this.passedby.push(this.currentPos[1] === 0 ? [this.currentPos[0], 1] : [this.currentPos[0], 0]);
      GameView.draw();
     
    }
      
  }

  updatePixel() {
    if (this.currentPos[])
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



  new() {

  }

  win() {
    //you win the game message
  }

  gameover() {
    //you lose and restart button
  }
}


export default Game;


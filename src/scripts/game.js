
import GameView from "./game_view";
import Avatar from "./avatar";


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
    this.passedbyId = [];
    this.defaultPos = [-60, 750];
    this.regular = [];
    this.CreateAvatars();
    this.collectRegularGlass();
    this.Make_move();
    // setInterval(this.Timer.bind(this), 1000);
} 

  collectRegularGlass() {
    for (let i = 0; i < this.bridge.grid.length - 1; i++) {
      if (this.bridge.grid[i][0] === "regular")
        this.regular.push([i, 0]);
      else
        this.regular.push([i, 1]);
    }
  }

  hideRegularGlass() {
    for (let i = 0; i < this.regular.length; i++) {
      const el = document.getElementById(`${this.regular[i][0]}${this.regular[i][1]}`);
      el.style.backgroundColor = "";
      el.style.opacity = "";
    }
  }

 showRegularGlass() { 
  for (let i = 0; i < this.regular.length; i++) {
    const el = document.getElementById(`${this.regular[i][0]}${this.regular[i][1]}`);
    console.log(el);
    el.style.backgroundColor = "red";
    el.hidden = false;
    el.style.opacity = "0.5";
  }
   setTimeout(this.hideRegularGlass.bind(this), 3000);
 }

  startNewLevel() {
    this.levelStarted = true;
    this.level++;
  }

  CreateAvatars() {
    let i = 1;
    while (this.listofAvatars.length < this.numofAvatar) {
      this.defaultPos[0] += 125;
      let dup = this.defaultPos.slice();
      const newAva = new Avatar(this.ctx, dup, i);
      this.listofAvatars.push(newAva);
      i++;
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
        const nextPos = [parseInt(event.target.id[0], 10), parseInt(event.target.id[1], 10)];
          if (nextPos[0] != this.currentAva().pos[0] + 1) {
  
            alert('You could only choose the spots on the next row!');
          }
          else {
            this.updatePixel(this.currentAva(), this.currentAva().pos, nextPos);
            this.checkGlass(this.currentAva().pos, nextPos);
            if (this.currentAva().pos[0] === 7)
              this.win();
        }
    });
    rightBridge.addEventListener("click", (event) => {
        const nextPos = [parseInt(event.target.id[0], 10), parseInt(event.target.id[1], 10)];
        if (nextPos[0] != this.currentAva().pos[0] + 1) {
          console.log(this.currentAva().pos, nextPos);
          alert('You could only choose the spots on the next row!');
        }
        else {
          this.updatePixel(this.currentAva(), this.currentAva().pos, nextPos);
          this.checkGlass(this.currentAva().pos, nextPos);
          if (this.currentAva().pos[0] === 7)
            this.win();
        }
    });
  }

  checkGlass(curPos, nextPos) {
    if (this.bridge.grid[nextPos[0]][nextPos[1]] === "regular") {
        //do the broken glass animation
        this.listofAvatars.pop();
        this.passedby = [];
        this.game_view.draw();
        while (this.passedbyId.length > 0) {
          const cur = this.passedbyId.pop();
          cur.style.backgroundColor = "";
          cur.style.opacity = "";
        }
        //clear one avatar and restart
    if (this.listofAvatars.length === 0)
        this.gameover();
    }
    else {
      //collect all the bad glasses
      const passedGlassPos = this.currentAva().pos[1] === 0 ? [this.currentAva().pos[0], 1] : [this.currentAva().pos[0], 0];
      const el = document.getElementById(`${passedGlassPos[0]}${passedGlassPos[1]}`);
      if (passedGlassPos[0]!= -1) {
        el.style.backgroundColor = "red";
        el.style.opacity = "0.5";
        this.passedbyId.push(el);
      }
      this.currentAva().pos = nextPos;
      this.game_view.draw();
    }
  }

  updatePixel(ava, pre, cur) {
    if (pre[1] != cur[1] && pre[1] === 0) 
      ava.pixel[0] += 175;
    else if (pre[1] != cur[1] && pre[1] === 1) 
      ava.pixel[0] -= 175;
    if (ava.pixel[1] === 750) {
      ava.pixel[1] = 665;
      ava.pixel[0] = cur[1] === 0 ? 100 : 275;
    }
    else
      ava.pixel[1] = ava.pixel[1] - 86;
  }


  stage() {
    
  }
  lose() {
    
  }


  play() {
    this.toggleScene('');
  }



  new() {

  }

  win() {
    alert('You have won the game!');
  }

  gameover() {
    alert("You have lost the game!");

  }
}


export default Game;


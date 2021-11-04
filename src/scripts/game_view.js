
import Game from "./game";



class GameView {
  constructor(game, ctx, bridge) {
    this.numofAvatar = game.numofAvatar;
    this.bridge = bridge;
    this.game = game;
    this.ctx = ctx;

    // this.bridge = bridge;
    // this.$canvas = $("#canvas");
    // this.$canvasOffset = $canvas.offset();
    // this.offsetX = canvasOffset.left;
    // this.offsetY = canvasOffset.top;
    // this.scrollX = this.$canvas.scrollLeft();
    // this.scrollY = this.$canvas.scrollTop();
    this.backgroundReady = false;
   
    this.isDown = false;
    // this.ctx.addEventListener("mousedown", this.handleMouseDown);
    // this.ctx.addEventListener("mouseup", this.handleMouseUp);
    // this.ctx.addEventListener("mouseout", this.handleMouseOut);
  }

  draw() {
    var background = new Image();
    var bridge = new Image();
   
  
    background.onload = () => {
      this.ctx.drawImage(background, 0, 0, 450, 875);
    };
    background.src = "./dist/assets/images/background.png";

    this.bridge.draw(this.game.listofAvatars);
    // this.avatar.draw();

    // let i = 0;
    // while (i < this.numofAvatar) {
    //   const currAva = this.game.listofAvatars[i];
    //   currAva.draw(this.avaPosX);
    //   this.avaPosX += 175;
    //   i++;
    // }
  }

  showGlasses () {
    //show diffrent colors based on the type of glass on this.passed
  }

  
    // this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // for (let i = 0; i < rowCount; i++) {
    //   let row = [];
    //   for (let j = 0; j < colCount; j++) {
    //     this.ctx.rect(i * colWidth, j * rowHeight, colWidth, rowHeight);
    //     this.ctx.stroke();
    //   }
    // }
  
  
  
  handleMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();

    startX = pharseInt(e.clietnX - offsetX);
    startY = pharseInt(e.clientY - offsetY);

    drawRect();

    this.isDown = true;
  }

  handleMouseUp(e) {
    e.preventDefault();
    e.stopPropagation();

    mouseX = parseInt(e.clientX - offsetX);
    mouseY = parseInt(e.clientY - offsetX);

    this.isDown = false;


  }

  handleMouseOut(e) {
    e.preventDefault();
    e.stopPropagation();

    this.isDown = false;
  }

  checkForAvatar() {
    var startCol = parseInt(startX / colWidth);
    var startRow = parseInt(startY / rowHeight);
    var lastCol = parseInt(mouseX / colWidth);
    var lastRow = parseInt(mouseY / rowHeight);

    var length = Math.max(Math.abs(startCol - lastCol) + 1, Math.abs(startRow - lastRow) + 1);
    var dx = 0;
    var dy = 0;
    var x = startCol;
    var y = startRow;
    if (lastCol > startCol)
      dx = 1;
    if (lastCol < startCol)
      dx = -1;
    if (lastRow > startRow)
      dy = -1;
    if (lastRow < startRow)
      dy = -1;

    while (length > 0) {
      // grid[y * colCount + x] // add avatar to specific spot
      this.ctx.save();
      this.ctx.fillStyle = "red";
      this.ctx.globalAlpha = 0.25;
      this.ctx1.globalCompositeOperation = "destination-over";
      this.ctx.fillRect(x * colWidth + 2, y * rowHeight + 2, colWidth -4, rowHeight - 4);
      this.ctx.restore();
    }
  }

}

// for (var i = 0; i <= 640; i += 40) {
//   // context.beginPath();
//   context.moveTo(0, i);
//   context.lineTo(640, i);
//   context.closePath();
//   context.stroke();

//   context.beginPath();
//   context.moveTo(i, 0);
//   context.lineTo(i, 640);
//   context.closePath();
//   context.stroke();
// }

export default GameView;
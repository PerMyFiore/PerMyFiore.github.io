class Bibo {
  constructor(img) {
    this.pointX = 250;
    this.pointY = 450;
    this.dx = 0;
    this.dy = 0;
    this.x = 250;
    this.y = 450;
    this.slow = 0.05;
    this.img = img;
    this.xscaling = 1;
    this.yscaling = 1;
  }

  move() {
    
    this.pointX = mouseX;
    this.pointY = mouseY;
    this.dx = this.pointX - this.x;
    this.dy = this.pointY - this.y;
    if (this.x + this.dx * this.slow < displayWidth && this.x + this.dx * this.slow > displayWidth / 5/2) {
      this.x += this.dx * this.slow;
    }
    if (this.y + this.dy * this.slow < displayHeight && this.y + this.dy * this.slow > displayWidth / 5/2) {
      this.y += this.dy * this.slow;
    }

    image(
      this.img,
      this.x,
      this.y,
      displayWidth / 5, displayWidth / 5
    );
  }
}
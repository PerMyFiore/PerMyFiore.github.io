class Dito {
  constructor(level, imgsu,imggiu, itemsx, itemsy) {
    this.level = level;
    this.x = itemsx[Math.floor(Math.random() * itemsx.length)];
    this.y = itemsy[Math.floor(Math.random() * itemsy.length)];
    if(this.y == itemsy[0]){
        this.img = imggiu;
        this.dir = 1;
    }else if(this.y == itemsy[1]){
        this.img = imgsu;
        this.dir = -1;
    }
    this.speed = this.level == 0 ? 4 : this.level == 1 ? 6 : 8;
  }

  move() {
    
    this.y += this.speed * this.dir;
    image(this.img, this.x, this.y, displayWidth / 5, displayWidth / 5);
  }
}

class Dita {
  constructor(imgsu, imggiu) {
    this.alive = 0;
    this.arr = [];
    this.generate();
    this.imgsu = imgsu;
    this.imggiu = imggiu;
    this.over100 = false;
    this.over200 = false;
  }
  generate() {
    this.arr.push(
      new Dito(Math.floor(Math.random() * 3), imgditosu, imgditogiu,
      [
        (1 / 5) * displayWidth,
        (2 / 5) * displayWidth,
        (3 / 5) * displayWidth,
        (4 / 5) * displayWidth,
      ],
      [1,displayHeight-1]
      )
    );
    this.alive++;
  }
  move() {
    for (let i = 0; i < this.arr.length; i++) {
      this.arr[i].move();
    }
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].y < 0 || this.arr[i].y > displayHeight) {
        punti += (this.arr[i].level+1) * 10;
        this.arr.splice(i, 1);
        this.alive--;
        this.generate();
        if(punti >= 100 && !this.over100){
          this.over100 = true;
          this.generate();
        }
        if(punti >= 200 && !this.over200){
          this.over200 = true;
          this.generate();
        }
        if(punti >= 300){
          MENU = "WIN";
        }
      }
    }
  }
}

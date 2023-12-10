var cnv;
let MENU = "HOME";
let leave = false,
  played = false,
  isplaying = false;
let imgxfiore,
  imglogo,
  imgbibo,
  imggioca,
  imgpausa,
  imgregole,
  imgriprendi,
  imgritorna,
  imgback,
  imggift,
  imgnontoccare,
  imgbimbabella,
  imgditosu,
  imgditogiu,
  imgplayback,
  imglost,
  imgwin,
  song;
let bouncingxbibo, bouncingybibo, speedbouncingxbibo, speedbouncingybibo;
let punti = 0;
let bibo;
let dita;

function preload() {
  imgxfiore = loadImage("img/xfiore.jpg");
  imglogo = loadImage("img/logo.jpg");
  imgbibo = loadImage("img/bouncing.png");
  imggioca = loadImage("img/giocaimg.jpg");
  imgpausa = loadImage("img/pausaimg.jpg");
  imgregole = loadImage("img/regoleimg.jpg");
  imgriprendi = loadImage("img/riprendiimg.jpg");
  imgritorna = loadImage("img/ritornaimg.jpg");
  imgback = loadImage("img/backimg.jpg");
  imggift = loadImage("img/giftimg.jpg");
  imgnontoccare = loadImage("img/nontoccareimg.jpg");
  imgbimbabella = loadImage("img/bimbabellaimg.jpg");
  imgditosu = loadImage("img/ditosu.png");
  imgditogiu = loadImage("img/ditogiu.png");
  imgplayback = loadImage("img/playback.jpg");
  imgwin = loadImage("img/win.jpg"),
  imglost = loadImage("img/lost.jpg");
  song = loadSound("assets/music.mp3");
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}

function setup() {
  cnv = createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
  textFont("Verdana");
  bouncingxbibo = displayWidth / 3;
  bouncingybibo = displayHeight / 5;
  speedbouncingxbibo = 5;
  speedbouncingybibo = 5;
  bibo = new Bibo(imgbibo);
  dita = new Dita(imgditosu, imgditogiu);
}

function draw() {
  if (MENU == "HOME") {
    home();
  } else if (MENU == "PLAYING") {
    playing();
  } else if (MENU == "INSTRUCTIONS") {
    instructions();
  } else if (MENU == "PAUSE") {
    pause();
  } else if (MENU == "WIN") {
    win();
  } else if (MENU == "LOST") {
    lost();
  }
}

function mouseClicked() {
  if (MENU == "HOME") {
    if (
      mouseX > displayWidth / 2 - displayHeight / 5 / 2 &&
      mouseX < displayWidth / 2 + displayHeight / 5 / 2
    ) {
      if (
        // da home a playing
        mouseY > displayHeight / 2 - displayWidth / 5 / 2 &&
        mouseY < displayHeight / 2 + displayWidth / 5 / 2
      ) {
        MENU = "PLAYING";
        played = true;
        isplaying = true;
        song.loop();
      } else if (
        // da home a instructions
        mouseY > (displayHeight / 4) * 3 - displayWidth / 5 / 2 &&
        mouseY < (displayHeight / 4) * 3 + displayWidth / 5 / 2
      ) {
        MENU = "INSTRUCTIONS";
      }
    }
  } else if (MENU == "PAUSE") {
    if (
      mouseX > displayWidth / 2 - displayHeight / 5 / 2 &&
      mouseX < displayWidth / 2 + displayHeight / 5 / 2
    ) {
      if (
        // da pause a isntruction
        mouseY > (displayHeight / 4) * 3 - displayWidth / 5 / 2 &&
        mouseY < (displayHeight / 4) * 3 + displayWidth / 5 / 2
      ) {
        MENU = "INSTRUCTIONS";
      } else if (
        // da pause a play
        mouseY > displayHeight / 2 - displayWidth / 5 / 2 &&
        mouseY < displayHeight / 2 + displayWidth / 5 / 2
      ) {
        leave = true;
        song.loop();
      }
    }
  } else if (MENU == "INSTRUCTIONS") {
    if (
      mouseX > displayWidth / 2 - displayHeight / 5 / 2 &&
      mouseX < displayWidth / 2 + displayHeight / 5 / 2
    ) {
      if (
        mouseY > (displayHeight / 4) * 3 - displayWidth / 5 / 2 &&
        mouseY < (displayHeight / 4) * 3 + displayWidth / 5 / 2
      ) {
        leave = true;
      }
    }
  } else if (MENU == "PLAYING") {
    if (mouseX > displayWidth - displayHeight / 5 && mouseX < displayWidth) {
      if (
        mouseY > displayWidth / 10 &&
        mouseY < displayWidth / 10 + displayWidth / 10
      ) {
        MENU = "PAUSE";
        song.stop();
      }
    }
  } else if (MENU == "LOST") {
    if (
      mouseX > displayWidth / 2 - displayHeight / 5 / 2 &&
      mouseX < displayWidth / 2 + displayHeight / 5 / 2
    ) {
      if (
        mouseY > displayHeight - displayWidth / 10 - displayWidth / 5 / 2 &&
        mouseY < displayHeight - displayWidth / 10 + displayWidth / 5 / 2
      ) {
        MENU = "HOME";
        bibo = new Bibo(imgbibo);
        dita = new Dita(imgditosu, imgditogiu);
        (leave = false), (played = false), (isplaying = false);
        punti = 0;
      }
    }
  } else if (MENU == "WIN") {
    if (mouseY > displayHeight - displayWidth / 10 && mouseY < displayHeight) {
      MENU = "HOME";
      window.location.href = "disegno.jpg";
    }
  }
}

function home() {
  background(220);
  image(
    imggift,
    displayWidth / 2,
    displayHeight / 2,
    displayWidth,
    displayHeight
  );
  image(
    imgbibo,
    bouncingxbibo,
    bouncingybibo,
    displayWidth / 5,
    displayWidth / 5
  );
  bouncingxbibo += speedbouncingxbibo;
  bouncingybibo += speedbouncingybibo;
  if (bouncingxbibo > displayWidth - displayWidth / 10) {
    speedbouncingxbibo = -5;
  } else if (bouncingxbibo < displayWidth / 10) {
    speedbouncingxbibo = 5;
  }
  if (bouncingybibo > displayHeight - displayWidth / 10) {
    speedbouncingybibo = -5;
  } else if (bouncingybibo < displayWidth / 10) {
    speedbouncingybibo = 5;
  }
  push();
  image(
    imglogo,
    displayWidth / 2,
    displayHeight / 5,
    ((6 * displayWidth) / 10) * 1.2,
    ((4 * displayWidth) / 10) * 1.2
  );
  fill(0, 255, 0);
  rect(
    displayWidth / 2,
    displayHeight / 2,
    displayHeight / 5,
    displayWidth / 5
  );
  fill(255, 0, 0);
  rect(
    displayWidth / 2,
    (3 * displayHeight) / 4,
    displayHeight / 5,
    displayWidth / 5
  );
  textSize(displayWidth / 10);
  fill(255);
  text("START", displayWidth / 2, displayHeight / 2 + displayWidth / 10 / 3);
  image(
    imggioca,
    displayWidth / 2,
    displayHeight / 2,
    displayHeight / 5,
    displayWidth / 5
  );
  text(
    "RULES",
    displayWidth / 2,
    (3 * displayHeight) / 4 + displayWidth / 10 / 3
  );
  image(
    imgregole,
    displayWidth / 2,
    (3 * displayHeight) / 4,
    displayHeight / 5,
    displayWidth / 5
  );
  pop();
}

function instructions() {
  push();
  background(255, 0, 255);
  image(
    imgback,
    displayWidth / 2,
    displayHeight / 2,
    displayWidth,
    displayHeight
  );
  image(
    imgxfiore,
    width / 2,
    displayHeight / 8,
    (2 * displayHeight) / 5,
    (2 * displayWidth) / 5
  );
  fill(255, 0, 255);
  rect(
    displayWidth / 2,
    (displayHeight / 4) * 3,
    displayHeight / 5,
    displayWidth / 5
  );
  fill("white");
  textSize(displayWidth / 10);
  text(
    "RESUME",
    displayWidth / 2,
    (displayHeight / 4) * 3 + displayWidth / 10 / 2
  );
  image(
    imgritorna,
    displayWidth / 2,
    (displayHeight / 4) * 3,
    displayHeight / 5,
    displayWidth / 5
  );
  textSize(displayWidth / 20);
  fill("black");
  text("Trascina Bibo in giro", displayWidth / 2, (displayHeight / 16) * 7);
  text(
    "Evita le dita, altrimenti muori",
    displayWidth / 2,
    (displayHeight / 16) * 8
  );
  text(
    "Raccogli i fiori per ottenere punti",
    displayWidth / 2,
    (displayHeight / 16) * 9
  );
  text(
    "Raggiungi 300 punti per vincere",
    displayWidth / 2,
    (displayHeight / 16) * 10
  );
  pop();
  if (leave && !isplaying) {
    MENU = "HOME";
    leave = false;
  } else if (leave && isplaying) {
    MENU = "PAUSE";
    leave = false;
  }
}

function pause() {
  push();
  background("red");
  image(
    imgback,
    displayWidth / 2,
    displayHeight / 2,
    displayWidth,
    displayHeight
  );
  image(
    imgbimbabella,
    displayWidth / 2,
    displayHeight / 8,
    (2 * displayHeight) / 5,
    (2 * displayWidth) / 5
  );
  fill(255, 0, 255);
  rect(
    displayWidth / 2,
    (displayHeight / 4) * 3,
    displayHeight / 5,
    displayWidth / 5
  );
  rect(
    displayWidth / 2,
    displayHeight / 2,
    displayHeight / 5,
    displayWidth / 5
  );
  fill("white");
  textSize(displayWidth / 10);
  text(
    "RETURN",
    displayWidth / 2,
    (displayHeight / 4) * 3 + displayWidth / 10 / 2
  );
  text("RULES", displayWidth / 2, displayHeight / 2 + displayWidth / 10 / 2);
  image(
    imgriprendi,
    displayWidth / 2,
    displayHeight / 2,
    displayHeight / 5,
    displayWidth / 5
  );
  image(
    imgregole,
    displayWidth / 2,
    (displayHeight / 4) * 3,
    displayHeight / 5,
    displayWidth / 5
  );
  pop();
  if (leave && !played) {
    MENU = "HOME";
    leave = false;
  } else if (leave && played) {
    MENU = "PLAYING";
    leave = false;
  }
}

function playing() {
  push();
  background(0, 255, 0);
  image(
    imgplayback,
    displayWidth / 2,
    displayHeight / 2,
    displayWidth,
    displayHeight
  );
  fill("orange");
  noStroke();
  rect(
    displayWidth - displayWidth / 5,
    displayWidth / 10,
    displayHeight / 5,
    displayWidth / 5
  );
  textSize(displayWidth / 10);
  fill("white");
  text(
    "PAUSE",
    (4 * displayWidth) / 5,
    displayWidth / 10 + displayWidth / 10 / 2,
    displayWidth / 5,
    displayWidth / 5
  );
  image(
    imgpausa,
    displayWidth - displayWidth / 5,
    displayWidth / 10,
    displayHeight / 5,
    displayWidth / 5
  );
  strokeWeight(1);
  stroke(0);
  fill("beige");
  rect(
    displayWidth / 5,
    displayWidth / 10,
    displayWidth - displayWidth / 5,
    displayWidth / 5
  );
  textSize(displayWidth / 11);
  fill("black");
  push();
  textAlign(LEFT);
  text(
    "punti:",
    displayWidth / 10 + displayWidth / 11 / 2,
    displayWidth / 10 + displayWidth / 10 / 2,
    displayWidth / 5,
    displayWidth / 5
  );
  pop();
  push();
  textAlign(RIGHT);
  text(
    punti,
    (5 * displayWidth) / 10 - displayWidth / 11 / 2,
    displayWidth / 10 + displayWidth / 10 / 2,
    displayWidth / 5,
    displayWidth / 5
  );
  pop();
  bibo.move();
  dita.move();
  hit();
  if (leave) {
    MENU = "HOME";
    leave = false;
  }
  pop();
}

function hit() {
  for (let i = 0; i < dita.arr.length; i++) {
    if (dist(bibo.x, bibo.y, dita.arr[i].x, dita.arr[i].y) < displayWidth / 6) {
      MENU = "LOST";
      //location.reload();
    }
  }
}

function lost() {
  song.stop();
  push();
  background(255, 0, 0);
  image(
    imglost,
    displayWidth / 2,
    displayHeight / 2,
    displayWidth,
    displayHeight
  );
  fill("white");
  textSize(displayWidth / 10);
  text("YOU LOST", displayWidth / 2, displayHeight / 4);
  image(
    imgritorna,
    displayWidth / 2,
    displayHeight - displayWidth / 10,
    displayHeight / 5,
    displayWidth / 5
  );
  pop();
}

function win() {
  song.stop();
  push();
  background(255, 0, 0);
  image(
    imgwin,
    displayWidth / 2,
    displayHeight / 2,
    displayWidth,
    displayHeight
  );
  fill("white");
  textSize(displayWidth / 10);
  text("YOU WON", displayWidth / 2, displayHeight / 4);
  image(
    imgnontoccare,
    displayWidth / 2,
    displayHeight - displayWidth / 10 / 2,
    (displayWidth / 10) * 8,
    displayWidth / 10
  );
  pop();
}
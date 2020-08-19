var fireworks = [];
var gravity;
let mySound;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("assets/this-dot-daniel-shiffman-coding-train");
}

function setup() {
  createCanvas(1825, 1045);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
  mySound.play();
  console.log("🎆🎆🟠 🟠🎆🎆🎆 🎆🎆🟠 🟠🎆 🟠 🎆🎆🟠");
}

function draw() {
  colorMode(RGB);
  background(221, 72, 20);

  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  textSize(256);
  text("ubuntu", 500, 600);
  textFont("Ubuntu");
}

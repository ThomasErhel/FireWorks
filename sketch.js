var fireworks = [];
var gravity;

function setup() {
  createCanvas(1825, 1045);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
  console.log("🎆🎆🟠 🟠🎆🎆🎆 🎆🎆🟠 🟠🎆 🟠 🎆🎆🟠"); // https://en.wikipedia.org/wiki/Morse_code
}

function draw() {
  colorMode(RGB);
  background(236, 111, 24);

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
  text("Mon Pro Web", 200, 600);
  textFont("Ubuntu");
}

let itter = 1;
let step = 0.1;

function setup() {
  pixelDensity(2);
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  for (let i = 0; i < itter; i += step) {
    let decay = exp(-pow(i, 2));
    strokeWeight(1 * decay);
    let radius = 300 * decay;
    ellipse(width / 2, height / 2, radius, radius);
  }
}

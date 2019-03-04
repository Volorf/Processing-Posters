let margin = 40
let itter = 10
let radius
let step

function setup() {
  pixelDensity(2)
  createCanvas(400, 400)
  step = (width - margin * 2) / (itter - 1)
  noLoop()
}

function draw() {
  background(0)
  fill(255);
  noStroke();
  for (let y = 0; y < itter; y++) {
    for (let x = 0; x < itter; x++) {
      radius = random(0, 10);
      ellipse(margin + x * step, margin + y * step, radius, radius);
    }
  }
}

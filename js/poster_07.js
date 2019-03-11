let itter = 1000
let r = 150
let cX = []
let cY = []
let step

function setup() {
  pixelDensity(2)
  step = TWO_PI / itter
  createCanvas(400, 400)
  background(0);
  for (let i = 0; i < itter; i++) {
    cX.push(cos(step * i) * r)
    cY.push(sin(step * i) * r)
  }
  noLoop()
}

function draw() {
  translate(width / 2, height / 2)
  for (let i = 0; i < itter; i++) {}
  beginShape()
  for (let i = 0; i < itter; i += 1) {
    strokeCap(ROUND)
    strokeJoin(ROUND)
    strokeWeight(0.5)
    stroke(255)
    noFill()
    let rI1 = round(randomGaussian(20, itter))
    let rI2 = round(random(0, itter))
    vertex(cX[rI1], cY[rI1])
    push()
    fill(245)
    pop()
  }
  endShape()
}

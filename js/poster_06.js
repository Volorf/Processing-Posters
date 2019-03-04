let itter = 20
let step
let offset
let strokeOffsetMin = 1
let strokeOffsetMax = 40

function setup() {
  pixelDensity(2)
  createCanvas(595, 691)
  step = width / (itter - 1)
  offset = step / 2
  noLoop()
}

function draw() {
  background(0)
  for (let x = 0; x < itter; x++) {
    stroke(255)
    strokeWeight(random(strokeOffsetMin, strokeOffsetMax))
    let offsetX = random(-offset, offset)
    let lX = x * step + offsetX
    line(lX, 0, lX, height)
  }
}

let cols = 10
let rows = 10
let boxSize = 20
let gap
let rotStep
let angle = 0
let fCubes = []

function setup() {
  pixelDensity(2)
  createCanvas(800, 800, WEBGL)
  background(0)
  stroke(255)
  strokeWeight(2)
  noFill()

  gap = (width - boxSize * 3 - (boxSize * cols)) / (cols - 1)
  ortho()
  rotStep = PI / 120
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      push()
      translate(-width / 2 + boxSize * 2 + boxSize * x + gap * x, 0, 0)
      translate(0, -height / 2 + boxSize * 2 + boxSize * y + gap * y, 0)
      let fCube = new FCube(boxSize)
      fCube.randomize()
      fCube.create()
      fCubes.push(fCube)
      pop()
    }
  }
}

function draw() {
  background(0)
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      push()
      translate(-width / 2 + boxSize * 2 + boxSize * x + gap * x, 0, 0)
      translate(0, -height / 2 + boxSize * 2 + boxSize * y + gap * y, 0)
      fCubes[y * cols + x].animate(angle)
      pop()
    }
  }
  angle += rotStep
}

class FCube {
  constructor(size) {
    this.size = size
    this.rotX = random(-PI, PI)
    this.rotY = random(-PI, PI)
    this.rotZ = random(-PI, PI)
    this.cdX = random([-1, 1])
    this.cdY = random([-1, 1])
    this.cdZ = random([-1, 1])
  }

  create() {
    box(this.size)
  }

  randomize() {
    rotateX(this.rotX)
    rotateY(this.rotY)
    rotateZ(this.rotZ)
  }

  animate(step) {
    rotateX(this.rotX + step * this.cdX)
    rotateY(this.rotY + step * this.cdY)
    rotateZ(this.rotZ + step * this.cdZ)
    box(this.size)
  }
}

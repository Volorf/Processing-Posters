let itter = 16
let margin = 40
let step

function setup() {
  createCanvas(640, 640)
  noLoop()
  step = (width - margin * 2) / itter
}

function draw() {
  background(0)
  for (let y = 0; y < itter; y++) {
    for (let x = 0; x < itter; x++) {
      push()
      translate(x * step + margin, y * step + margin)
      let pat = new Pattern(step)
      // 0 - half oval, 1 - straight, 2 - diagonal
      pat.create(0)
      pop()
    }
  }

}

class Pattern {
  constructor(step) {
    this.width = step
    this.height = step
    this.step = step
    this.arr0 = [0, HALF_PI, PI, PI + HALF_PI]
    this.arr1 = [[0,0,this.step,0],[this.step,0,this.step,this.step],[this.step,this.step,0,this.step],[0,this.step,0,0]]
    this.arr2 = [[0,0,this.step,this.step],[0,this.step, this.step,0]]
  }
  create(type) {
    noStroke()
    fill(255)
    push()
    switch (type) {
      case 0:
        let rRot = random(this.arr0)
        translate(this.width / 2, this.height / 2)
        rotate(rRot)
        arc(0, 0, this.width, this.height, 0, PI)
        break
      case 1:
      	let rPar = random(this.arr1)
        stroke(255)
        strokeCap(PROJECT)
        strokeWeight(this.step/5)
      	line(rPar[0], rPar[1], rPar[2], rPar[3])
        break
      case 2:
      	let rPos = random(this.arr2)
        stroke(255)
        strokeCap(PROJECT)
        strokeWeight(this.step/5)
        line(rPos[0], rPos[1], rPos[2], rPos[3])
        break
      default:
        console.log("the switch is broken")
    }
    pop()

  }
}

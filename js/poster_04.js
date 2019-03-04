let arr = []
let margin = 40
let col = 32
let gapX = 8
let gapY = 5
let minH = 5
let maxH = 30
let rectWidth
let yLimit
let workHeight

function setup() {
  createCanvas(400, 400)
  pixelDensity(2)
  workHeight = height - margin * 2
  yLimit = height - margin
  rectWidth = ((width - margin * 2) - (gapX * (col - 1))) / col
  for (let i = 0; i < col; i++) {
    arr.push([])
  }
  noLoop()
}

function draw() {
  background(0)
  noStroke()
  fill(255)

  for (let i = 0; i < col; i++) {
    let loop = true
    let count = 0
    while (loop) {
      let rH = random(minH, maxH)
      arr[i].push(rH)
      let controlSum = (arr[i].reduce((a, b) => a + b) + margin + count * gapY)
      count++
      if (controlSum > yLimit) {
        loop = false
        if (rH >= gapY) {
          arr[i].pop()
          arr[i][arr[i].length - 1] += rH + gapY
        }
        arr[i][arr[i].length - 1] = arr[i][arr[i].length - 1] - controlSum + yLimit
      }
    }
  }

  for (let _col = 0; _col < col; _col++) {
    let sumRects = 0;
    for (let _row = 0; _row < arr[_col].length; _row++) {
      rect((margin + _col * (rectWidth + gapX)), margin + sumRects + _row * gapY, rectWidth, arr[_col][_row])
      sumRects += arr[_col][_row]
    }
  }
}

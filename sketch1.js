var ys = [20, 100, 180]
var s  = [3, 3, 3]


function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
  background(200)

    ys [0] =  ys [0] + s [0]
    if (ys [0] < 0 || ys [0] > height) {
        s [0] = s [0] * -1
    }
    rect(30, ys [0], 20, 20)

  ys [1] = ys [1] + s [1]
  if (ys [1] < 0 || ys [1] > height) {
    s [1] = s [1] * -1
  }
  rect(60, ys [1], 20, 20)

  ys [2] = ys [2] + s [2]
  if (ys [2] < 0 || ys [2] > height) {
    s [2] = s [2] * -1
  }
  rect(90, ys [2], 20, 20)
}

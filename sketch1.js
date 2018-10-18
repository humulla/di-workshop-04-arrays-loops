var ys = [20, 100, 180]
var s  = [3, 3, 3]
var count = 3


function setup() {
  createCanvas(400, 400)
  background(200)
}

function draw() {
    background(200)
    
    for(var i = 0; i < 3; i++){
        ys[i] = ys[i] + s[i]
        if (ys [i] < 0 || ys [i] > height) {
          s [i] = s [i] * -1
        }

      rect(30 * (i + 1), ys[i], 20, 20)
      }
    }
    



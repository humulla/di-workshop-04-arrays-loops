function setup() {
    createCanvas(400, 400)
    background(200)
}
  
function draw() {
    var x = 10
    var count = 19
    var y = 10


    for(var i = 0; i < count; i = i + 1){
        y = 0
        for(var j = 0; j < count; j = j + 1){
            rect(x, y, 10, 10)
            y = y + 15
        }
        x = x + 20
    }

// x = 10
// console.log (x)


// for(var i = 0; i < count; i = i + 1){
//     rect(x, 25, 10, 10)
//     x = x + 20
// }

    // the rect will draw a rectangle with the size given and x=x+20 is changing the position of the square.   
    

    

}
  
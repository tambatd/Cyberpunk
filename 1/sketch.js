let x1 = 0
let x2 = 0
let x3 = 0
let x4 = 0

function setup() {
    translate(width * 0.5, height * 0.5);
    createCanvas(500, 500);
    frameRate(30);
    angleMode(RADIANS);
    background(255);
    for (i = 0; i < 2000; i = i + 50) {
    stroke(color(63,138,146));
        line(0, i, 2000, i);
        line(i, 0, i, 2000);
    }

    stroke(color(79, 180, 177));
  fill(0, 0, 0, 25)
 
    strokeWeight(1);
}

function draw() {
  fill(0,0,0,0);
      stroke(color(63,138,146));
stroke(color(237,34,93));
rect(245-x1, 245-x1,10+x1+x2, 10+(x2*2));
     // stroke(color(237,34,93));

 rect(-245-x1, 245-x1,10+x1+x2, 10+x1);
   rect(-245-x1, 250,10+x1+x2, 10+x1);


  x1+=5;
  x2+=5;
  

  
}


function mouseClicked() {
    x1 = 0;
    x2 = 0;
    setup();
}
let theta = 0.0;
let beta = 0.1;
let rectWidth = 10;
let rectHeight= 20;
let rotationSpeed = 0.001;

function setup() {
  createCanvas(1080, 720);
  rectMode(CENTER);
  strokeWeight(3);
}

function draw() {  background(0);
  noFill();
  stroke(255);
  //stationary rect
  push();
  translate(width/2, height/2);//center the rectangles
  for(var i = 0; i < 25; i++){
    rect(0, 0,
    i*rectWidth,
    i*rectHeight);
  }
  pop();


 
  push();
  translate(width/2, height/2);
  rotate(beta);
  stroke(255,0,0);
  for(let i =0; i < 25; i++){
    rect(0, 0, i*rectWidth, i*rectHeight);
    }

    beta -= rotationSpeed;
    pop();

 
    push();
    translate(width/2, height/2);
    rotate(theta);
    for(let i =0; i < 25; i++){
      rect(0, 0, i*rectWidth, i*rectHeight);
      }
  
      theta += rotationSpeed;
     pop();
     
  
    

  }


// function mousePressed() {
//   save('image.png');
// }
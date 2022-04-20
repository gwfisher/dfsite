function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(254);
  translate(10, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(80, 80, 80);
  pop();
  
}
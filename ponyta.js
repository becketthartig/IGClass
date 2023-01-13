let ponyta;
let fil = false;

function setup() {
  
  var canvas = createCanvas(windowWidth / 3, windowWidth / 3);
  canvas.parent('sketch-holder');
  
  strokeWeight(1);
  
  ponyta = new Ponyta(50, 100, 0);
  
  //Rotate to be like the image I was looking at to make this
  //ponyta.rotate(0, PI / 4 - 0.05, 0);
  //ponyta.rotate(PI / 12, 0, 0);
  
}

function draw() {
  
  background(120);
  translate(width / 2, height / 2);
  
  /* //CONSTANT ROTATION
  ponyta.rotate(0, 0.02, 0.005); */
  
  //ROTATE USING ARROW KEYS
  if(keyIsDown(RIGHT_ARROW)) {
    ponyta.rotate(0, -0.03, 0);
  }
  if(keyIsDown(LEFT_ARROW)) {
    ponyta.rotate(0, 0.03, 0);
  }
  if(keyIsDown(UP_ARROW)) {
    ponyta.rotate(-0.03, 0, 0);
  }
  if(keyIsDown(DOWN_ARROW)) {
    ponyta.rotate(0.03, 0, 0);
  }
  
  //ponyta.renderWireframe();
  
  if(fil) {
    ponyta.renderVoxel();
  }
  else {
    ponyta.renderWireframe();
  }

}

function keyPressed() {
  if(key == "v") { //Render Filled in
    fil = true;
  } else if(key == "w") { //Render Wire Frame
    fil = false;
  }
}

class Ponyta { //Ponyta is an object which contains a preset array of cubes in the shape and color of the Pokemon Ponyta
  
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    let verticies = [
      new Cube(0, 0, 0, 0), 
      new Cube(0, 0, -10, 0), 
      new Cube(-10, 0, -10, 0), 
      new Cube(-10, 0, 0, 0),
      new Cube(0, -10, 0, 1),
      new Cube(0, -10, -10, 1),
      new Cube(-10, -10, -10, 1),
      new Cube(-10, -10, 0, 1),
      new Cube(0, -20, 0, 1),
      new Cube(0, -20, -10, 1),
      new Cube(-10, -20, -10, 1),
      new Cube(-10, -20, 0, 1),
      new Cube(0, -30, 0, 1),
      new Cube(0, -30, -10, 1),
      new Cube(-10, -30, -10, 2),
      new Cube(-10, -40, -10, 2),
      new Cube(-10, -50, -10, 2),
      new Cube(-10, -30, 0, 1),
      new Cube(-10, -40, 0, 1),
      new Cube(-10, -50, 0, 1),
      new Cube(0, -40, -10, 2),
      new Cube(0, -50, -10, 2),
      new Cube(0, -40, 0, 1),
      new Cube(0, -50, 0, 1),
      new Cube(-10, -60, -20, 2),
      new Cube(-10, -40, -20, 2),
      new Cube(-10, -50, -20, 2),
      new Cube(0, -60, -10, 1),
      new Cube(-10, -60, -10, 1),
      new Cube(0, -60, 0, 1),
      new Cube(-10, -60, 0, 1),
      new Cube(0, -70, -10, 1),
      new Cube(-10, -70, -10, 1),
      new Cube(0, -70, 0, 1),
      new Cube(-10, -70, 0, 1),
      new Cube(-10, -80, -10, 1),
      new Cube(0, -80, 0, 1),
      new Cube(-10, -80, 0, 1),
      new Cube(0, -90, 0, 1),
      new Cube(-10, -90, 0, 1),
      new Cube(0, -100, 0, 1),
      new Cube(-10, -100, 0, 1),
      new Cube(0, -110, 0, 1),
      new Cube(-10, -110, 0, 1),
      new Cube(10, -110, 0, 1),
      new Cube(20, -110, 0, 1),
      new Cube(0, -120, 0, 1),
      new Cube(10, -120, 0, 1),
      new Cube(20, -120, 0, 1),
      new Cube(30, -120, 0, 1),
      new Cube(40, -120, 0, 1),
      new Cube(50, -120, 0, 1),
      new Cube(60, -120, 0, 1),
      new Cube(0, -130, 0, 1),
      new Cube(10, -130, 0, 1),
      new Cube(20, -130, 0, 1),
      new Cube(30, -130, 0, 1),
      new Cube(40, -130, 0, 1),
      new Cube(50, -130, 0, 1),
      new Cube(60, -130, 0, 1),
      new Cube(0, -140, 0, 1),
      new Cube(10, -140, 0, 1),
      new Cube(20, -140, 0, 1),
      new Cube(30, -140, 0, 3),
      new Cube(40, -140, 0, 1),
      new Cube(50, -140, 0, 1),
      new Cube(0, -150, 0, 1),
      new Cube(10, -150, 0, 1),
      new Cube(20, -150, 0, 1),
      new Cube(30, -150, 0, 4),
      new Cube(40, -150, 0, 1),
      new Cube(0, -160, 0, 1),
      new Cube(10, -160, 0, 1),
      new Cube(20, -160, 0, 1),
      new Cube(30, -160, 0, 1),
      new Cube(20, -160, -10, 1),
      new Cube(20, -170, -10, 1),
      new Cube(20, -170, 0, 5),
      new Cube(10, -180, 0, 5),
      new Cube(0, -180, 0, 5),
      new Cube(-20, -60, -20, 5),
      new Cube(-20, -70, -20, 5),
      new Cube(-30, -70, -20, 5),
      new Cube(-30, -80, -20, 5),
      new Cube(-20, -60, -10, 1),
      new Cube(-20, -70, -10, 1),
      new Cube(-20, -80, -10, 1),
      new Cube(-20, -90, -10, 1),
      new Cube(-30, -60, -10, 1),
      new Cube(-30, -70, -10, 1),
      new Cube(-30, -80, -10, 1),
      new Cube(-30, -90, -10, 1),
      new Cube(-20, -60, 0, 1),
      new Cube(-20, -70, 0, 1),
      new Cube(-20, -80, 0, 1),
      new Cube(-20, -90, 0, 1),
      new Cube(-30, -60, 0, 1),
      new Cube(-30, -70, 0, 1),
      new Cube(-30, -80, 0, 1),
      new Cube(-30, -90, 0, 1),
      new Cube(-20, -100, 0, 1),
      new Cube(-30, -100, 0, 1),
      new Cube(-40, -60, 0, 1),
      new Cube(-40, -70, 0, 1),
      new Cube(-40, -80, 0, 1),
      new Cube(-40, -90, 0, 1),
      new Cube(-50, -60, 0, 1),
      new Cube(-50, -70, 0, 1),
      new Cube(-50, -80, 0, 1),
      new Cube(-50, -90, 0, 1),
      new Cube(-40, -100, 0, 2),
      new Cube(-50, -100, 0, 2),
      new Cube(-40, -60, -10, 1),
      new Cube(-40, -70, -10, 1),
      new Cube(-40, -80, -10, 1),
      new Cube(-40, -90, -10, 1),
      new Cube(-50, -60, -10, 1),
      new Cube(-50, -70, -10, 1),
      new Cube(-50, -80, -10, 1),
      new Cube(-50, -90, -10, 1),
      new Cube(-60, -60, 0, 1),
      new Cube(-60, -70, 0, 1),
      new Cube(-60, -80, 0, 1),
      new Cube(-60, -90, 0, 1),
      new Cube(-70, -60, 0, 1),
      new Cube(-70, -70, 0, 1),
      new Cube(-70, -80, 0, 1),
      new Cube(-70, -90, 0, 1),
      new Cube(-60, -100, 0, 2),
      new Cube(-70, -100, 0, 1),
      new Cube(-60, -60, -10, 1),
      new Cube(-60, -70, -10, 1),
      new Cube(-60, -80, -10, 1),
      new Cube(-60, -90, -10, 1),
      new Cube(-70, -60, -10, 1),
      new Cube(-70, -70, -10, 1),
      new Cube(-70, -80, -10, 1),
      new Cube(-70, -90, -10, 1),
      new Cube(-80, -60, 0, 1),
      new Cube(-80, -70, 0, 1),
      new Cube(-80, -80, 0, 1),
      new Cube(-80, -90, 0, 1),
      new Cube(-90, -60, 0, 1),
      new Cube(-90, -70, 0, 1),
      new Cube(-90, -80, 0, 1),
      new Cube(-90, -90, 0, 1),
      new Cube(-80, -100, 0, 1),
      new Cube(-90, -100, 0, 1),
      new Cube(-80, -60, -10, 2),
      new Cube(-80, -70, -10, 1),
      new Cube(-80, -80, -10, 1),
      new Cube(-80, -90, -10, 1),
      new Cube(-90, -60, -10, 2),
      new Cube(-90, -70, -10, 1),
      new Cube(-90, -80, -10, 1),
      new Cube(-80, -20, 0, 1),
      new Cube(-80, -30, 0, 1),
      new Cube(-80, -40, 0, 1),
      new Cube(-80, -50, 0, 1),
      new Cube(-90, -20, 0, 1),
      new Cube(-90, -30, 0, 1),
      new Cube(-90, -40, 0, 1),
      new Cube(-90, -50, 0, 1),
      new Cube(-80, -20, -10, 1),
      new Cube(-80, -30, -10, 1),
      new Cube(-80, -40, -10, 2),
      new Cube(-80, -50, -10, 2),
      new Cube(-90, -20, -10, 1),
      new Cube(-90, -30, -10, 1),
      new Cube(-90, -40, -10, 2),
      new Cube(-90, -50, -10, 2),
      new Cube(-80, -10, 0, 1),
      new Cube(-80, -10, -10, 1),
      new Cube(-90, -10, 0, 1),
      new Cube(-90, -10, -10, 1),
      new Cube(-80, 0, 0, 0),
      new Cube(-80, 0, -10, 0),
      new Cube(-90, 0, 0, 0),
      new Cube(-90, 0, -10, 0),
      new Cube(-70, -50, -10, 1),
      new Cube(-70, -50, 0, 1),
      new Cube(-70, -40, -10, 1),
      new Cube(-70, -40, 0, 1),
      new Cube(-70, -30, -10, 1),
      new Cube(-70, -30, 0, 1),
      new Cube(-60, -50, -10, 1),
      new Cube(-60, -50, 0, 1),
      new Cube(-90, -60, -20, 2),
      new Cube(-90, -50, -20, 2),
      new Cube(-90, -40, -20, 2),
      new Cube(-90, -30, -20, 2),
      new Cube(-90, -20, -20, 5),
      new Cube(-90, -70, -20, 5),
      new Cube(-80, -60, -20, 5),
      new Cube(-100, -70, -20, 5),
      new Cube(-100, -60, -20, 5),
      new Cube(-100, -80, -20, 5),
      new Cube(-10, -170, 0, 2),
      new Cube(-10, -180, 0, 2),
      new Cube(10, -170, 0, 2),
      new Cube(0, -170, 0, 2),
      new Cube(-20, -180, 0, 2),
      new Cube(-80, -110, 0, 2),
      new Cube(-90, -110, 0, 2),
      new Cube(-100, -110, 0, 2),
      new Cube(-110, -110, 0, 2),
      new Cube(-120, -110, 0, 2),
      new Cube(-130, -110, 0, 2),
      new Cube(-100, -100, 0, 2),
      new Cube(-110, -100, 0, 2),
      new Cube(-120, -100, 0, 2),
      new Cube(-100, -90, 0, 2),
      new Cube(-140, -110, 0, 5),
      new Cube(-130, -120, 0, 5),
      new Cube(-120, -120, 0, 2),
      new Cube(-110, -120, 0, 2),
      new Cube(-100, -100, -10, 2),
      new Cube(-100, -110, -10, 2),
      new Cube(-100, -120, -10, 5),
      new Cube(0, 0, 20, 0), 
      new Cube(0, 0, 30, 0), 
      new Cube(-10, 0, 30, 0), 
      new Cube(-10, 0, 20, 0),
      new Cube(0, -10, 20, 1),
      new Cube(0, -10, 30, 1),
      new Cube(-10, -10, 30, 1),
      new Cube(-10, -10, 20, 1),
      new Cube(0, -20, 20, 1),
      new Cube(0, -20, 30, 1),
      new Cube(-10, -20, 30, 1),
      new Cube(-10, -20, 20, 1),
      new Cube(0, -30, 20, 1),
      new Cube(0, -30, 30, 1),
      new Cube(-10, -30, 30, 2),
      new Cube(-10, -40, 30, 2),
      new Cube(-10, -50, 30, 2),
      new Cube(-10, -30, 20, 1),
      new Cube(-10, -40, 20, 1),
      new Cube(-10, -50, 20, 1),
      new Cube(0, -40, 30, 2),
      new Cube(0, -50, 30, 2),
      new Cube(0, -40, 20, 1),
      new Cube(0, -50, 20, 1),
      new Cube(-10, -60, 40, 2),
      new Cube(-10, -40, 40, 2),
      new Cube(-10, -50, 40, 2),
      new Cube(0, -60, 30, 1),
      new Cube(-10, -60, 30, 1),
      new Cube(0, -60, 20, 1),
      new Cube(-10, -60, 20, 1),
      new Cube(0, -70, 30, 1),
      new Cube(-10, -70, 30, 1),
      new Cube(0, -70, 20, 1),
      new Cube(-10, -70, 20, 1),
      new Cube(-10, -80, 30, 1),
      new Cube(0, -80, 20, 1),
      new Cube(-10, -80, 20, 1),
      new Cube(0, -90, 20, 1),
      new Cube(-10, -90, 20, 1),
      new Cube(0, -100, 20, 1),
      new Cube(-10, -100, 20, 1),
      new Cube(0, -110, 20, 1),
      new Cube(-10, -110, 20, 1),
      new Cube(10, -110, 20, 1),
      new Cube(20, -110, 20, 1),
      new Cube(0, -120, 20, 1),
      new Cube(10, -120, 20, 1),
      new Cube(20, -120, 20, 1),
      new Cube(30, -120, 20, 1),
      new Cube(40, -120, 20, 1),
      new Cube(50, -120, 20, 1),
      new Cube(60, -120, 20, 1),
      new Cube(0, -130, 20, 1),
      new Cube(10, -130, 20, 1),
      new Cube(20, -130, 20, 1),
      new Cube(30, -130, 20, 1),
      new Cube(40, -130, 20, 1),
      new Cube(50, -130, 20, 1),
      new Cube(60, -130, 20, 1),
      new Cube(0, -140, 20, 1),
      new Cube(10, -140, 20, 1),
      new Cube(20, -140, 20, 1),
      new Cube(30, -140, 20, 3),
      new Cube(40, -140, 20, 1),
      new Cube(50, -140, 20, 1),
      new Cube(0, -150, 20, 1),
      new Cube(10, -150, 20, 1),
      new Cube(20, -150, 20, 1),
      new Cube(30, -150, 20, 4),
      new Cube(40, -150, 20, 1),
      new Cube(0, -160, 20, 1),
      new Cube(10, -160, 20, 1),
      new Cube(20, -160, 20, 1),
      new Cube(30, -160, 20, 1),
      new Cube(20, -160, 30, 1),
      new Cube(20, -170, 30, 1),
      new Cube(20, -170, 20, 5),
      new Cube(10, -180, 20, 5),
      new Cube(0, -180, 20, 5),
      new Cube(-20, -60, 40, 5),
      new Cube(-20, -70, 40, 5),
      new Cube(-30, -70, 40, 5),
      new Cube(-30, -80, 40, 5),
      new Cube(-20, -60, 30, 1),
      new Cube(-20, -70, 30, 1),
      new Cube(-20, -80, 30, 1),
      new Cube(-20, -90, 30, 1),
      new Cube(-30, -60, 30, 1),
      new Cube(-30, -70, 30, 1),
      new Cube(-30, -80, 30, 1),
      new Cube(-30, -90, 30, 1),
      new Cube(-20, -60, 20, 1),
      new Cube(-20, -70, 20, 1),
      new Cube(-20, -80, 20, 1),
      new Cube(-20, -90, 20, 1),
      new Cube(-30, -60, 20, 1),
      new Cube(-30, -70, 20, 1),
      new Cube(-30, -80, 20, 1),
      new Cube(-30, -90, 20, 1),
      new Cube(-20, -100, 20, 1),
      new Cube(-30, -100, 20, 1),
      new Cube(-40, -60, 20, 1),
      new Cube(-40, -70, 20, 1),
      new Cube(-40, -80, 20, 1),
      new Cube(-40, -90, 20, 1),
      new Cube(-50, -60, 20, 1),
      new Cube(-50, -70, 20, 1),
      new Cube(-50, -80, 20, 1),
      new Cube(-50, -90, 20, 1),
      new Cube(-40, -100, 20, 2),
      new Cube(-50, -100, 20, 2),
      new Cube(-40, -60, 30, 1),
      new Cube(-40, -70, 30, 1),
      new Cube(-40, -80, 30, 1),
      new Cube(-40, -90, 30, 1),
      new Cube(-50, -60, 30, 1),
      new Cube(-50, -70, 30, 1),
      new Cube(-50, -80, 30, 1),
      new Cube(-50, -90, 30, 1),
      new Cube(-60, -60, 20, 1),
      new Cube(-60, -70, 20, 1),
      new Cube(-60, -80, 20, 1),
      new Cube(-60, -90, 20, 1),
      new Cube(-70, -60, 20, 1),
      new Cube(-70, -70, 20, 1),
      new Cube(-70, -80, 20, 1),
      new Cube(-70, -90, 20, 1),
      new Cube(-60, -100, 20, 2),
      new Cube(-70, -100, 20, 1),
      new Cube(-60, -60, 30, 1),
      new Cube(-60, -70, 30, 1),
      new Cube(-60, -80, 30, 1),
      new Cube(-60, -90, 30, 1),
      new Cube(-70, -60, 30, 1),
      new Cube(-70, -70, 30, 1),
      new Cube(-70, -80, 30, 1),
      new Cube(-70, -90, 30, 1),
      new Cube(-80, -60, 20, 1),
      new Cube(-80, -70, 20, 1),
      new Cube(-80, -80, 20, 1),
      new Cube(-80, -90, 20, 1),
      new Cube(-90, -60, 20, 1),
      new Cube(-90, -70, 20, 1),
      new Cube(-90, -80, 20, 1),
      new Cube(-90, -90, 20, 1),
      new Cube(-80, -100, 20, 1),
      new Cube(-90, -100, 20, 1),
      new Cube(-80, -60, 30, 2),
      new Cube(-80, -70, 30, 1),
      new Cube(-80, -80, 30, 1),
      new Cube(-80, -90, 30, 1),
      new Cube(-90, -60, 30, 2),
      new Cube(-90, -70, 30, 1),
      new Cube(-90, -80, 30, 1),
      new Cube(-80, -20, 20, 1),
      new Cube(-80, -30, 20, 1),
      new Cube(-80, -40, 20, 1),
      new Cube(-80, -50, 20, 1),
      new Cube(-90, -20, 20, 1),
      new Cube(-90, -30, 20, 1),
      new Cube(-90, -40, 20, 1),
      new Cube(-90, -50, 20, 1),
      new Cube(-80, -20, 30, 1),
      new Cube(-80, -30, 30, 1),
      new Cube(-80, -40, 30, 2),
      new Cube(-80, -50, 30, 2),
      new Cube(-90, -20, 30, 1),
      new Cube(-90, -30, 30, 1),
      new Cube(-90, -40, 30, 2),
      new Cube(-90, -50, 30, 2),
      new Cube(-80, -10, 20, 1),
      new Cube(-80, -10, 30, 1),
      new Cube(-90, -10, 20, 1),
      new Cube(-90, -10, 30, 1),
      new Cube(-80, 0, 20, 0),
      new Cube(-80, 0, 30, 0),
      new Cube(-90, 0, 20, 0),
      new Cube(-90, 0, 30, 0),
      new Cube(-70, -50, 30, 1),
      new Cube(-70, -50, 20, 1),
      new Cube(-70, -40, 30, 1),
      new Cube(-70, -40, 20, 1),
      new Cube(-70, -30, 30, 1),
      new Cube(-70, -30, 20, 1),
      new Cube(-60, -50, 30, 1),
      new Cube(-60, -50, 20, 1),
      new Cube(-90, -60, 40, 2),
      new Cube(-90, -50, 40, 2),
      new Cube(-90, -40, 40, 2),
      new Cube(-90, -30, 40, 2),
      new Cube(-90, -20, 40, 5),
      new Cube(-90, -70, 40, 5),
      new Cube(-80, -60, 40, 5),
      new Cube(-100, -70, 40, 5),
      new Cube(-100, -60, 40, 5),
      new Cube(-100, -80, 40, 5),
      new Cube(-10, -170, 20, 2),
      new Cube(-10, -180, 20, 2),
      new Cube(10, -170, 20, 2),
      new Cube(0, -170, 20, 2),
      new Cube(-20, -180, 20, 2),
      new Cube(-80, -110, 20, 2),
      new Cube(-90, -110, 20, 2),
      new Cube(-100, -110, 20, 2),
      new Cube(-110, -110, 20, 2),
      new Cube(-120, -110, 20, 2),
      new Cube(-130, -110, 20, 2),
      new Cube(-100, -100, 20, 2),
      new Cube(-110, -100, 20, 2),
      new Cube(-120, -100, 20, 2),
      new Cube(-100, -90, 20, 2),
      new Cube(-140, -110, 20, 5),
      new Cube(-130, -120, 20, 5),
      new Cube(-120, -120, 20, 2),
      new Cube(-110, -120, 20, 2),
      new Cube(-100, -100, 30, 2),
      new Cube(-100, -110, 30, 2),
      new Cube(-100, -120, 30, 5),
      new Cube(-50, -130, 10, 5),
      new Cube(-50, -120, 10, 5),
      new Cube(-40, -120, 10, 5),
      new Cube(-50, -110, 10, 2),
      new Cube(-40, -110, 10, 2),
      new Cube(-30, -110, 10, 2),
      new Cube(-20, -110, 10, 2),
      new Cube(-20, -120, 10, 5),
      new Cube(-60, -120, 10, 5),
      new Cube(-70, -120, 10, 5),
      new Cube(-60, -110, 10, 5),
      new Cube(-70, -110, 10, 5),
      new Cube(-80, -120, 10, 5),
      new Cube(-80, -110, 10, 2),
      new Cube(-90, -110, 10, 2),
      new Cube(-100, -110, 10, 5),
      new Cube(-110, -110, 10, 2),
      new Cube(-110, -120, 10, 2),
      new Cube(-110, -130, 10, 5),
      new Cube(-120, -120, 10, 2),
      new Cube(-130, -120, 10, 2),
      new Cube(-140, -120, 10, 2),
      new Cube(-150, -120, 10, 5),
      new Cube(-150, -130, 10, 5),
      new Cube(-150, -140, 10, 5),
      new Cube(-160, -130, 10, 5),
      new Cube(-160, -140, 10, 5),
      new Cube(-170, -130, 10, 5),
      new Cube(-140, -130, 10, 5),
      new Cube(-140, -140, 10, 5),
      new Cube(-130, -130, 10, 5),
      new Cube(-120, -130, 10, 5),
      new Cube(-140, -110, 10, 2),
      new Cube(-130, -110, 10, 2),
      new Cube(-120, -100, 10, 2),
      new Cube(-110, -90, 10, 2),
      new Cube(-100, -80, 10, 2),
      new Cube(-90, -70, 10, 1),
      new Cube(-80, -60, 10, 1),
      new Cube(-70, -60, 10, 1),
      new Cube(-60, -60, 10, 1),
      new Cube(-50, -60, 10, 1),
      new Cube(-40, -60, 10, 1),
      new Cube(-30, -60, 10, 1),
      new Cube(-20, -60, 10, 1),
      new Cube(-10, -60, 10, 1),
      new Cube(0, -70, 10, 1),
      new Cube(0, -80, 10, 1),
      new Cube(0, -90, 10, 1),
      new Cube(-10, -120, 10, 2),
      new Cube(-10, -130, 10, 2),
      new Cube(-10, -140, 10, 2),
      new Cube(-20, -140, 10, 5),
      new Cube(-20, -150, 10, 5),
      new Cube(-10, -150, 10, 5),
      new Cube(0, -100, 10, 1),
      new Cube(10, -110, 10, 1),
      new Cube(20, -110, 10, 1),
      new Cube(30, -120, 10, 1),
      new Cube(40, -120, 10, 1),
      new Cube(50, -120, 10, 1),
      new Cube(60, -120, 10, 1),
      new Cube(60, -130, 10, 1),
      new Cube(50, -140, 10, 1),
      new Cube(40, -150, 10, 1),
      new Cube(30, -160, 10, 5),
      new Cube(20, -170, 10, 5),
      new Cube(10, -180, 10, 5),
      new Cube(0, -180, 10, 5),
      new Cube(-10, -180, 10, 2),
      new Cube(-10, -190, 10, 5),
      new Cube(-20, -180, 10, 2),
      new Cube(-20, -190, 10, 5),
      new Cube(-30, -180, 10, 2),
      new Cube(-30, -190, 10, 5),
      new Cube(-40, -180, 10, 2),
      new Cube(-40, -190, 10, 5),
      new Cube(-50, -190, 10, 5),
      new Cube(-10, -160, 10, 2),
      new Cube(-20, -170, 10, 2),
      new Cube(-30, -170, 10, 5)
    ];
    for(let i = 0; i < verticies.length; i++) {
      for(let j = 0; j < verticies[i].v.length; j++) {
        verticies[i].v[j][0] += x;
        verticies[i].v[j][1] += y;
        verticies[i].v[j][2] += z;
      }
    }
    this.v = verticies;
  }
  
  rotate(tx, ty, tz) {
    for(let i = 0; i < this.v.length; i++) {
      this.v[i].rotate(tx, ty, tz);
    }
  }
  
  renderWireframe() { //Render cubes as wireframe, sorted to appear correct on z-axis
    this.v = this.v.sort((a, b) => b.v[0][2] - a.v[0][2]);
    for(let i = 0; i < this.v.length; i++) {
      this.v[i].renderWireframe();
    }
  }
  
  renderVoxel() { //Render cubes as "voxels", sorted to appear correct on z-axis
    noStroke();
    this.v = this.v.sort((a, b) => b.v[0][2] - a.v[0][2]);
    for(let i = 0; i < this.v.length; i++) {
      this.v[i].renderVoxel();
    }
  }
  
}

class Cube { //Essentially the cube from class but with color (defined in the constructor), variable side length and other optomizations for my application
  
  constructor(x, y, z, c = 3, sideLength = 10) {
    this.s = sideLength;
    this.x = x;
    this.y = y;
    this.z = z;
    let col;
    switch(c) {
      case 0:
        col = color(36, 36, 69);
        break;
      case 1:
        col = color(230, 230, 146);
        break;
      case 2:
        col = color(223, 128, 69);
        break;
      case 3:
        col = color(0);
        break;
      case 4:
        col = color(255);
        break;
      case 5:
        col = color(240, 157, 70);
        break;
    }
    this.col = col;
    let s = sideLength / 2;
    let verticies = [[-s, s, s], [s, s, s], [s, -s, s], [-s, -s, s], [-s, s, -s], [s, s, -s], [s, -s, -s], [-s, -s, -s]];
    for(let i = 0; i < verticies.length; i++) {
      verticies[i][0] += x;
      verticies[i][1] += y;
      verticies[i][2] += z;
    }
    this.v = verticies;
    this.c = [[0, 1], [1, 2], [2, 3], [3, 0], [0, 4], [1, 5], [2, 6], [3, 7], [4, 5], [5, 6], [6, 7], [7, 4]];
    this.vox =[[0, 1, 2, 3], [4, 5, 6, 7], [0, 4, 5, 1], [1, 5, 6, 2], [2, 6, 7, 3], [3, 7, 4, 0]];
  }
  
  rotate(tx, ty, tz) {
    if(tx != 0) {
      for(let i = 0; i < this.v.length; i++) {
        const ny = this.v[i][1] * cos(tx) - this.v[i][2] * sin(tx); 
        this.v[i][2] = this.v[i][1] * sin(tx) + this.v[i][2] * cos(tx); 
        this.v[i][1] = ny;
      }
    }
    if(ty != 0) {
      for(let i = 0; i < this.v.length; i++) {
        const nx = this.v[i][0] * cos(ty) + this.v[i][2] * sin(ty); 
        this.v[i][2] = -this.v[i][0] * sin(ty) + this.v[i][2] * cos(ty); 
        this.v[i][0] = nx;
      }
    }
    if(tz != 0) {
      for(let i = 0; i < this.v.length; i++) {
        const nx = this.v[i][0] * cos(tz) - this.v[i][1] * sin(tz); 
        this.v[i][1] = this.v[i][0] * sin(tz) + this.v[i][1] * cos(tz);
        this.v[i][0] = nx;
      }
    }
  } 
  
  renderWireframe() {
    stroke(this.col);
    //stroke(0);
    //strokeWeight(5);
    for(let i = 0; i < this.c.length; i++) {
      line(this.v[this.c[i][0]][0], this.v[this.c[i][0]][1], this.v[this.c[i][1]][0], this.v[this.c[i][1]][1]);
    }
  }
  
  renderVoxel() { //Fill in the sides of the cube like as if it was a voxel
    fill(this.col);
    for(let i = 0; i < this.vox.length; i++) {
      beginShape();
      vertex(this.v[this.vox[i][0]][0], this.v[this.vox[i][0]][1]);
      vertex(this.v[this.vox[i][1]][0], this.v[this.vox[i][1]][1]);
      vertex(this.v[this.vox[i][2]][0], this.v[this.vox[i][2]][1]);
      vertex(this.v[this.vox[i][3]][0], this.v[this.vox[i][3]][1]);
      endShape();
    }
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth / 3, windowWidth / 3);
}

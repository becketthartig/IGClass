let cam;

let planets = [];
let focusIndex = 0;
let lastFocusLoc;

let img;

function preload() {
  img = loadImage("360_F_100126078_Ltb5kvNjYBLQQCkgkGSvv1N4HR3C1SND.jpg");
}

function setup() {
  
  createCanvas(windowWidth / 3, windowWidth / 3, WEBGL);
  noStroke();
  
  planets.push(new Planet("sun", 
                          createVector(0, 0, 0), 
                          10, 
                          0, 
                          color(255, 255, 153), 
                          createVector(-300, -400, 300), 
                          "sphere"));
  planets.push(new Planet("mercury", 
                          createVector(60, 0, 0), 
                          2, 
                          Math.PI / 4, 
                          color(220), 
                          createVector(-30, -30, 30), 
                          "box"));
  planets.push(new Planet("venus", 
                          createVector(120, 0, 0), 
                          3, 
                          Math.PI / 9, 
                          color(255, 128, 128), 
                          createVector(-30, -30, 30), 
                          "box"));
  planets.push(new Planet("earth",
                          createVector(230, 0, 0), 
                          4, 
                          Math.PI / 18, 
                          color(100, 100, 255), 
                          createVector(-30, -30, 30), 
                          "sphere"));
  planets.push(new Planet("mars", 
                          createVector(370, 0, 0), 
                          [1, 2, 1], 
                          Math.PI / 40, 
                          color(153, 51, 0), 
                          createVector(-30, -30, 30), 
                          "ellipsoid"));
  planets.push(new Planet("stardust-6", 
                          createVector(600, 0, 0), 
                          [1, 2], 
                          Math.PI / 64, 
                          color(247, 208, 203), 
                          createVector(-30, -30, 30), 
                          "cone"));
  planets.push(new Planet("stardust-7", 
                          createVector(640, 0, 0), 
                          [1, 2], 
                          Math.PI / 64, 
                          color(237, 228, 193), 
                          createVector(-30, -30, 30), 
                          "cylinder"));
  planets.push(new Planet("stardust-8", 
                          createVector(680, 0, 0), 
                          [1, 0.5], 
                          Math.PI / 64, 
                          color(227, 198, 233), 
                          createVector(-30, -30, 30), 
                          "torus"));
  planets.push(new Planet("stellarum", 
                          createVector(870, 0, 0), 
                          undefined, 
                          Math.PI / 91, 
                          color(100, 100, 255), 
                          createVector(-30, -30, 30), 
                          "pyramid"));
  planets.push(new Planet("systems-edge", 
                          createVector(1000, 0, 0), 
                          [3, 1.5], 
                          Math.PI / 110, 
                          color(250), 
                          createVector(-30, -30, 30), 
                          "torus"));
  
  cam = createCamera();
  cam.perspective(Math.PI / 3, 1, 0.01);
  cam.setPosition(planets[focusIndex].pos.x + planets[focusIndex].off.x, planets[focusIndex].pos.y + planets[focusIndex].off.y, planets[focusIndex].pos.z + planets[focusIndex].off.z);
  lastFocusLoc = planets[focusIndex].pos.copy();
  cam.lookAt(planets[focusIndex].pos.x, planets[focusIndex].pos.y, planets[focusIndex].pos.z);
  
}

function draw() {
  
  background(14);
  
  pointLight(255, 255, 255, 0, 0, 0);
  
  orbitControl();
  
  planets[8].col = lerpColor(color(214, 245, 245), color(75, 0, 130), Math.abs(Math.sin(frameCount / 300)));
  
  for (const planet of planets) {
    planet.updatePos(deltaTime / 1000);
    planet.render();
  }
  
  const deltaPlanetPosition = lastFocusLoc.copy().sub(planets[focusIndex].pos.copy());
  lastFocusLoc = planets[focusIndex].pos.copy();
  cam.setPosition(cam.eyeX - deltaPlanetPosition.x, cam.eyeY - deltaPlanetPosition.y, cam.eyeZ - deltaPlanetPosition.z);
  cam.lookAt(planets[focusIndex].pos.x, planets[focusIndex].pos.y, planets[focusIndex].pos.z);
  
}

function keyPressed() {
  
  if (keyCode == LEFT_ARROW) {
    focusIndex = focusIndex == 0 ? planets.length - 1 : focusIndex - 1;
    cam.setPosition(planets[focusIndex].pos.x + planets[focusIndex].off.x, planets[focusIndex].pos.y + planets[focusIndex].off.y, planets[focusIndex].pos.z + planets[focusIndex].off.z);
    lastFocusLoc = planets[focusIndex].pos.copy();
  }
  
  if (keyCode == RIGHT_ARROW) {
    focusIndex = focusIndex + 1 == planets.length ? 0 : focusIndex + 1;
    cam.setPosition(planets[focusIndex].pos.x + planets[focusIndex].off.x, planets[focusIndex].pos.y + planets[focusIndex].off.y, planets[focusIndex].pos.z + planets[focusIndex].off.z);
    lastFocusLoc = planets[focusIndex].pos.copy();
  }
  
}

class Planet {
  
  constructor(name, positionVector, shapeFieldInfo, orbitRate, color, focusOffset, shape) {
    this.name = name;
    this.pos = positionVector;
    this.SFI = shapeFieldInfo;
    this.orbit = orbitRate;
    this.col = color;
    this.off = focusOffset;
    this.shape = shape;
  }
  
  updatePos(timeStep) {
    const rotation = -this.orbit * timeStep;
    const newCords = createVector(this.pos.x, this.pos.z).rotate(rotation);
    this.pos.x = newCords.x;
    this.pos.z = newCords.y;
  }
  
  render() {

    fill(this.col);
    translate(this.pos);
    if (this.name == "sun" || this.name == "stellarum") {
      emissiveMaterial(this.col);
    }
    if (this.name == "systems-edge") {
      texture(img);
    }
    switch (this.shape) {
      case "sphere":
        sphere(this.SFI);
        break;
      case "box":
        box(this.SFI);
        break;
      case "cylinder":
        cylinder(this.SFI[0], this.SFI[1]);
        break;
      case "cone":
        cone(this.SFI[0], this.SFI[1]);
        break;
      case "ellipsoid":
        ellipsoid(this.SFI[0], this.SFI[1], this.SFI[2]);
        break;
      case "torus":
        torus(this.SFI[0], this.SFI[1]);
        break;
      case "pyramid":
        beginShape();
        vertex(0, 2, 0);
        vertex(0.7, -2, 0.7);
        vertex(0.7, -2, -0.7);
        vertex(-0.7, -2, -0.7);
        vertex(-0.7, -2, 0.7);
        vertex(0.7, -2, 0.7);
        endShape(CLOSE);
    }
    translate(this.pos.copy().mult(-1));
    emissiveMaterial(color(0));
    
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth / 3, windowWidth / 3);
}

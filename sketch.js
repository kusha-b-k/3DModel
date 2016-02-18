function setup() {
  
 createCanvas(displayWidth, displayHeight, WEBGL);
  perspective(60 / 160 * PI, width/height, 0.1, 10);
}

function draw() {
  
 // background(25, 22, 0);
  background('#222222');
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  ambientLight(50);
  directionalLight(200, 0, 0, 0.25, 0.25, 0.25);
  pointLight(0, 0, 200, locX, locY, 0);
  pointLight(200, 200, 0, -locX, -locY, 0);

  push();
  translate(-250, 0, 0);
  rotateZ(frameCount * 1.22);
  rotateX(frameCount * 0.02);
  specularMaterial(250);
 // box(100, 100, 100);
  pop();
  
   camera(11, 22, sin(frameCount * 0.01) * 100);
    plane(120, 120);
     rotateX(frameCount * 0.01);
     rotateY(frameCount * 0.01);
     ambientLight(100);
     pointLight(250, 250, 250, 100, 100, 0);
     specularMaterial(220);
     torus(300, 10);
     specularMaterial(150);
      sphere(200);
      specularMaterial(41);
      rotateX(frameCount * 0.01);
      rotateZ(frameCount * 0.01);
      specularMaterial(92);
      pointLight(250,235,215, 220, 100, 0);
      cylinder(10, 400);
      specularMaterial(207);
      pointLight(20, 20, 250, 100, 100, 0);
      box(44, 200, 100);
      
}

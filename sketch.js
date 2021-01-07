var mr,fr;
var car,wall;
function setup() {
  createCanvas(800,400);
 fr =  createSprite(400, 200, 110, 50);
 fr.debug = true;
fr.shapeColor = "green";
 mr = createSprite(200,200,50,110);
 mr.debug = true;
 mr.shapeColor = "green";

 car = createSprite(100,100,50,50);
 car.debug = true;
 car.shapeColor = "blue";
 car.velocityX = 2;

 wall = createSprite(500,100,20,70);
 wall.debug = true;
 wall.shapeColor = "white";
}

function draw() {
  background(0);
 mr.x= World.mouseX;
 mr.y = World.mouseY;
 if(isTouching(mr,wall)){
   mr.shapeColor = "red";
   wall.shapeColor = "red";
 }
 else{
  mr.shapeColor = "green";
  wall.shapeColor = "green"; 
}
bounceOff(car,wall);
  drawSprites();
}

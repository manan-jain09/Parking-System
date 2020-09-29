var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  wall = createSprite(width / 2 + 200, 200, 60, height / 2);
  wall.shapeColor = color(80, 80, 80);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "blue";
  
  speed = random(50, 100);
  weight = random(400, 1500);
}

function draw() {
  background(0);  
  drawSprites();
  car.velocityX = speed;
  if (car.x - wall.x < wall.width / 2 + car.width / 2 
    && wall.x - car.x < car.width / 2 + wall.width / 2 
    && car.y - wall.y < wall.height / 2 + car.height / 2 
    && wall.y - car.y < car.height / 2 + wall.height / 2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;
    if (deformation < 100) {
      car.shapeColor = color(0, 225, 0);
    }
    if (deformation > 100 && deformation < 180) {
      car.shapeColor = color(230, 230, 0);
    }
    if (deformation > 180) {
      car.shapeColor = color(225, 0, 0);
    }
  } else {
    car.shapeColor = "blue";
  }
}

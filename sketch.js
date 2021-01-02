var thickness, wall;
var bullet, speed, weight;


 

function setup() {
  createCanvas(1600, 400);
  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);
  bullet=createSprite(50, 200, 40, 10);
  bullet.shapeColor=(245, 255, 250);
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80, 80, 80);
  bullet.velocityX=8;
}

function draw() {
  background(0, 0, 0);   
if(bullet.x + bullet.width > wall.x){
  bullet.velocityX = 0;
  var damage;
  damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  if(damage > 10){
    bullet.shapeColor= color(255, 0 , 0);
  }
  if(damage < 10){
    bullet.shapeColor= color(0, 255, 0 );
  }
}



 drawSprites();
}


  
    


/*function isTouching(){
  if(bullet.x + bullet.width > wall.x){
    return true;
  }
    return false;  
  }
  */


 

  
     




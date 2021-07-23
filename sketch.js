var brushImage, bathImage, drinkImage,eatImage, gymImage, issImage, moveImage, sleepImage;
var iss;
function preload(){
  bathImage=loadAnimation("bath1.png","bath2.png");
  brushImage=loadAnimation("brush.png");
  drinkImage=loadAnimation("drink1.png","drink2.png");
  eatImage=loadAnimation("eat1.png","eat2.png");
  gymImage=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  issImage=loadImage("iss.png");
  moveImage=loadAnimation("move.png","move1.png");
  sleepImage=loadAnimation("sleep.png");
}
function setup() {
  createCanvas(2000,600);
  iss=createSprite(625,250,20,20);
  iss.addImage("background",issImage);
  iss.scale=0.221;

  astronaut=createSprite(420,320);
  astronaut.addAnimation("sleeping",sleepImage);
  astronaut.scale=0.125;

  
}

function draw() {
  background(220);
  
  // createEdgeSprites();
  // astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushImage);
    astronaut.changeAnimation("brushing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gymImage);
    astronaut.changeAnimation("gymming");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing",bathImage);
    astronaut.changeAnimation("bathing");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating",eatImage);
    astronaut.changeAnimation("eating");
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("m")){
    astronaut.y=350;
    astronaut.velocityX=2;
    astronaut.velocityY=4;
  }

  drawSprites();
  textSize(15);
  fill("lightbrown");
  text("Instructions:",100,50);
  text("Up Arrow = Brushing",100,70);
  text("Down Arrow = Gymming",100,90);
  text("Left Arrow = Eating",100,110);
  text("Right Arrow = Bathing",100,130);
  text("m key = Moving",100,150);
}
var garden,rabbit;
var gardenImg,rabbitImg,apples,leaves,red,orangeimg




function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apples = loadImage("apple.png");
  leaves = loadImage("leaf.png");
  red = loadImage("redImage.png");
  orangeimg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,3));
  if (frameCount % 80 == 0){
    if (select_sprites == 1){
    createApples()
    }
else if (select_sprites ==2)
{
  createorange()
}
else{
  createred()
}
    }
  drawSprites();
}

function createApples()
{
apple=createSprite(random(50,350),40,10,10);
apple.addImage(apples);
apple.velocityY=3
apple.scale=0.07
apple.lifetime=100
}

function createorange()
{
  orange=createSprite(random(50,350),40,10,10);
  orange.addImage(orangeimg);
 orange.velocityY=3
  orange.scale=0.07
  orange.lifetime=100
}

function createred()
  {
    redimg=createSprite(random(50,350),40,10,10);
    redimg.addImage(red);
    redimg.velocityY=3
    redimg.scale=0.07
    redimg.lifetime=100
  }

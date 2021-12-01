var pathImg, path;
var cop, copImg;
var thief, thiefImg;
var gameState = "play"

function preload(){
  towerImg = loadImage("path.png");
  copImg = loadImage("car.png");
  thiefImg = loadImage("thief.png")
}

function setup() {
  createCanvas(600, 600);
  path = createSprite(300,300);
  path.addImage("path",towerImg);
  path.velocityY = 6;
  path.scale = 1.99   
  cop = createSprite(300,500,50,50);
  cop.scale = 0.6;
  cop.addImage("cop",copImg);
  
  thief = createSprite(300,300,50,50);
  thief.scale = 0.2;
  thief.addImage("thief",thiefImg);
  thief.velocityY = -2
}

function draw() {
  background(0); 
  if (gameState === "play") 
  { if(keyDown("left_arrow")){ cop.x = cop.x - 3; } 
  if(keyDown("right_arrow")){ cop.x = cop.x + 3; } 
  if(keyDown("space")){ cop.velocityY = 0; } 
  if(keyDown("up_arrow")){cop.velocityY = cop.velocityY + -0.1}
  cop.velocityY = cop.velocityY + 0 
  if(path.y > 400){ path.y = 300 } 
  if (thief.y < 100){thief.y = 300
  cop.y = cop.y + 200
  }

  //if(thief.isTouching(cop)){ cop.velocityY = 0; } 
  if(thief.isTouching(cop))
  { 
    //cop.destroy(); 
    gameState = "end" 
  } 
  drawSprites(); 
} 
  if (gameState === "end")
  { 
    stroke("yellow"); 
  fill("yellow");
   textSize(30); 
  text("Game Over", 230,250) 
} 
}

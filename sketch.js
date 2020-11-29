var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 100, 60);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(300, 300, 60, 100);
  movingRect.shapeColor = "green";

  fixedRect.debug = true;
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 
    && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2 
    && movingRect.y - fixedRect.y < movingRect.height/2+fixedRect.height/2
    && fixedRect.y - movingRect.y < movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "yellow";
  }
  else
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "green";
  }

  drawSprites();
}




var fixedRect , movingRect
 var character1 , character2 , character3 ;


function setup() {
  createCanvas(600,600);
  fixedRect = createSprite(300, 300, 50, 50);
  fixedRect.shapeColor = "green";

  character1= createSprite(200,100,120,20)
  character1.shapeColor="green"

  character2= createSprite(175,450,120,20)
  character2.shapeColor="green"

  character3= createSprite(150,400,120,20)
  character3.shapeColor="green"

  movingRect= createSprite(50,200,50,50);
  movingRect.shapeColor="green";
}
function draw() {
  background(0);  
  movingRect.x = World.mouseX
  movingRect.y= World.mouseY

  console.log(movingRect.x - fixedRect.x)

  if(isTouching(movingRect,character1)){
    character1.shapeColor = "red";
    movingRect.shapeColor="red"
 }
  else{
    character1.shapeColor = "green";
    movingRect.shapeColor="green"
  }
  drawSprites();
}


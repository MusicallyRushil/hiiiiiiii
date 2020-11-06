//Create variables here
var dog, happyDog
var database
var foodS, foodStock
function preload()
{
  loadImage("doglmg.png");
  loadImage("doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
dog = new dog(40,30);
dog.addImage("doglmg.png")  

foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  textSize(30);
  fill();
  stroke();

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){

  database.ref('/').update({
    Food:x
  })
}




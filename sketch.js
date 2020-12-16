//Create variables here
var dog, happyDog, database, foodS, foodStock
function preload()
{
  //load images here
  dog = loadImage("dogImg.png")
  happyDog = loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
  foodStock.set(20);

dog = createSprite(250,350,10,60)
dog.addImage(dogImg)
dog.scale = 0.2
}


function draw() {  
background("lightBlue");

if (foodS == undefined){

textSize(20);
fill(255);
text("Note: Press UP ARROW KEY to feed MAX the dog",50,50)
text("Food Remaining" + foodS ,150,150)
}

if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(dogImg)

}

if(keyWentDown(UP_ARROW)){

   dog.addImage(dogimg)
  
  }

  if (keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(dogImg1)

  }

  if (keyWentDown(UP_ARROW)){

     dog.addImage(dogImg1)

  }

if (foodS === 0){

foodS = 20

}

  drawSprites();
  //add styles here

}

function writeStock (x){

if (x<=0){
x=0
}
else{
  x=x+1;
}
database.ref("Food").update({
  Food:x
});

}

function readStock(data){

foodS = data.val();

}


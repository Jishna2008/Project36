
var dog,sadDog,happyDog;
var button,button2,food,MilkImg,milk;
var foodStock,foodS,database,feedTime,lastFed;
var namePet;
function preload(){
  sadDog=loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
  MilkImg=loadImage("Milk.png");
}

function setup() {
  createCanvas(1000,400);
  lastFed=13;
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

database= firebase.database();
console.log(database)

foodStock=database.ref('food');
foodStock.on("value",readStock)

  foodObj=new Food();

 feed=createButton("Feed the Dog");
 feed.position(700,95);
 feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods)

feedTime=database.ref('FeedTime');
feedTime.on("value",function (data){
  lastFed=data.val();})
  database.ref('/').update({FeedTime:lastFed})

// for ( var i = 60 ; i < 350;i=i+45){
//   for(var j=100;j<150;j=j+70){
//     milk=createSprite(i,j,150,150);
//     milk.addImage("milk",MilkImg);
//     milk.scale=0.1
//   }
  
//  }
  namePet=new Pet();

}

function draw() {
  background(46,139,87);
  //console.log(milk)
namePet.buttons()
foodObj.display();
  drawSprites();
  fill("yellow");
  textSize(28);
  if(lastFed>=12){
    text("Last Feed :"+lastFed%12+"PM",20,50)
  }else if(lastFed===0){
    text("Last Feed:12 AM",20,50)
  
  }else{
    text("Last Feed:"+lastFed+"AM",20,50)
  }
  // text(mouseX+","+mouseY,mouseX,mouseY)
}

//function to read food Stock
function feedDog(){
  lastFed=lastFed+1
  dog.addImage(happyDog);
  if(dog.x>=800){
    dog.x=dog.x-30
  }

database.ref('/').update({
  food:foodS,
  FeedTime:hour()
})
foodS=foodS-1;
}

function addFoods(){
  foodS++
  if(dog.x<=790){
    dog.x=dog.x+30
  }

  dog.addImage(sadDog)
  database.ref('/').update({
    food:foodS   
  }  )

}

function readStock(data){
  foodS=data.val();
}



function writeStock(x){
database.ref('/').update({'food':x})
}
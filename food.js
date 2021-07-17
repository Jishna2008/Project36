class Food{
    constructor(){
        this.image=loadImage("Milk.png");

    }
    getFood(){
        var foodRef=database.ref('food');
        foodRef.on("value",function (data){foodS=data.val();})
    
    }
    updateFood(foodS){
        database.ref('/').update({'food':foodS})
    }
    display(){
     
        imageMode(CENTER)
        image(this.image,720,220,70,70);

     for ( var i = 60 ; i < 350;i=i+45){
  for(var j=100;j<200;j=j+70){
    image(this.image,i,j,70,70);
  }
  
 }
 fill("yellow")
 textSize(30)
  text("FoodStock ="+foodS,250,50)
   
    }
    updateName(petName){
        database.ref('Pet/name').update({name:petName })
    }
}
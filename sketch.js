var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFoods;
var foodObj;

var foodVal

//create feed and lastFed variable here
var Feed



function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
bg=loadImage("bg.jpg");
bgs=loadSound("bgs.mp3");
crunch=loadSound("crunch.mp3");
}

function setup() {
  database=firebase.database();
  createCanvas(1240,538);
  bgs.loop();

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,280,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  feedFood=createButton("Feed Food");
  feedFood.position(900,95);
  feedFood.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(1000,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(bg);
  foodObj.display();

  //write code to read fedtime value from the database 
  var lastFed = createElement('h2')

    lastFed.html("last fed time: 2PM ");
    lastFed.position(760, 0);
 
    if (lastFed>=12){
      
    }
    
  //write code to display text lastFed time here
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 300,50);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 300,50);
   }
 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  //code to update food stock and last fed time
  dog.addImage(happyDog);
  crunch.play();
  foodS--;
  database.ref('/').update({
    Food:foodS
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}


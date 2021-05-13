class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('biscuit.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=20;
      
      imageMode(CENTER);
      image(this.image,720,285,40,70);
      
      if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%15==0){
            x=80;
            y=y+50;
          }
          image(this.image,x,y,28,49);
          x=x+30;
        }
      }
    }
}

class Game{
  constructor(){}

      getState(){
          var gameStateRef=database.ref('gameState');
          gameStateRef.on("value",function(data){
              gameState=data.val();
          });
      }

      update(state){
          database.ref('/').update({
              gameState:state
          });
      }

    async  start(){
          if(gameState===0){
              player=new Player();
              var playerCountRef=await database.ref('playerCount').once("value");
              if(playerCountRef.exists()){
                  playerCount=playerCountRef.val();
                  player.getCount();
              }
              form = new Form()
              form.display();

          }

        //create the car
          car1=createSprite(100,200)
          car1.addImage("car1",car1_img)
          car2=createSprite(300,200)
          car2.addImage("car2", car2_img)
          car3=createSprite(500,200)
          car3.addImage("car3", car3_img)
          car4=createSprite(700,200)
          car4.addImage("car4",car4_img)
          //stored it in an array
          cars=[car1, car2, car3, car4]
      }

      play(){
          form.hide();
          textSize(30);
          text("Game Start", 120,100)

          //static functions are called using the class name
          Player.getPlayerInfo();

           
           if(allPlayers!==undefined){
            background(rgb(198,135,103))
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5)
            

               //index of the array
                var index=0;

                // x and y position of the cars
                var x=175;
                var y;
                

               
                for(var plr in allPlayers){
                    //add 1 to the index for every loop
                    index=index+1;

                    //position the cars a little away from each other
                    x=x+200;
                
                    //use data from the database to display the car
                    y=displayHeight-allPlayers[plr].distance                           

                    cars[index-1].x=x;
                    cars[index-1].y=y;
                    
                    //if active player then fill red 
                    if(index===player.index){
                        fill("red")
                        cars[index-1].shapeColor="red";
                        camera.position.x=displayWidth/2;
                        camera.position.y=cars[index-1].y
                    }
                    else{
                        fill("white")
                    }


                    


                }                                      

          }//end of if condition to check if all players are defined
    
          if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance+=50
              //to write the name and distance on the database
              player.update()
          }

          if(player.distance  > 4200 ){
             
            gameState=2   
        }
      
      drawSprites();
        }//end of play function
        
       end(){
           console.log("Game has Ended")
       } 

       

    
    }




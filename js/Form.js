class Form {
  constructor() {
    this.input=createInput("Name")
    this.button=createButton("Play")
    this.greeting=createElement("h1")
    this.reset=createButton("reset")
  }
  hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
  }

  
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    
    title.position(displayWidth/2,0);
 // var input = createInput("Name");
 // var button = createButton('Play');
    
  this.input.position(displayWidth/2+40, displayHeight/2-80);
  this.button.position(displayWidth/2+80, displayHeight/2);
  this.reset.position(displayWidth-100, 20);


  this.reset.mousePressed(()=>
  {
    //resetting the playerCount to 0
player.updateCount(0)
//Resetting the gameState to 0
game.update(0)

  })
  
  this.button.mousePressed(()=>{
    this.input.hide();
    this.button.hide();
    player.name=this.input.value()
    playerCount+=1;

    player.index=playerCount;
    player.updateCount(playerCount)
    player.update();

    this.greeting.html("Hello "+ player.name)
    this.greeting.position(displayWidth/2,displayHeight/4)


  })



  // button.mousePressed(function(){
  // input.hide();
  // button.hide();

  //     var name = input.value();
      
  //    // playerCount+=1;
  //     //player.update(name)
  //     //player.updateCount(playerCount);
  //     var greeting = createElement('h3');
  //     greeting.html("Hello " + name )
  // greeting.position(130, 160)
  //   });

  }
}

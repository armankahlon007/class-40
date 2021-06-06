var canvas, backgroundImage;

var gameState = 0;
var playerCount
var database;

var form, player, game;

var allPlayers

var car1, car2, car3, car4;
var car1_img, car2_img, car3_img,car4_img
//array to store all the cares
var track
var ground

var cars



function preload() {


 
car1_img=loadImage("../images/car1.png")
car2_img=loadImage("../images/car2.png")
car3_img=loadImage("../images/car3.png")
car4_img=loadImage("../images/car4.png")
track=loadImage("../images/track.jpg")
ground=loadImage("../images/ground.png")
}
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

if(playerCount===4){
  game.update(1);
}
if(gameState===1){
  clear();
  game.play();
}

if(gameState===2){
  game.end();
}

  // if(Player count is 4){
  //   Update the gameState to 1 which is PLAY
  // }
  // if(gameState is PLAY){
  //   call the play screen which is Game Start
  // }
}

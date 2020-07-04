var PLAY = 0;
var END = 1;
var gameState=PLAY;

//Global Variables

var bananaImage,obstacleImage;
var jungle,score;
var obstacleGroup;
var Obstacle,invisibleGround;
var gameOver,restart;
var bananaGroup,obstacleGroup;

var score = 0;

function preload(){
 monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage=loadImage("Banana.png");
  
  obstacle=loadImage("stone.png");
  
  jungle=loadImage("jungle.jpg");
  
  obstacle1=loadImage("stone.png");
  
  banana1=loadImage("Banana.png");
  
  gameOverImage=loadImage("gameOver.png");
  
  restart=loadImage("restart.png");
}


function setup() {
  createCanvas(600,300);
  monkey=createSprite(40,250);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  monkey.depth=1;
 
  ground = createSprite(300,150);
  ground.addImage("jungle",jungle);
  ground.scale=0.6;
  ground.depth=0;
  
  invisibleGround = createSprite(300,280,600,5);
  invisibleGround.visible = false;
  
  gameOver = createSprite(300,150);
  gameOver.addImage("gameOverImage",gameOverImage);
  gameOver.visible=false;
  
  obstacleGroup=new Group();
  bananaGroup=new Group();
  
}


function draw(){
  
  console.log(monkey.y);
 
 // text("Score: "+score);

    
    bananaGroup.velocityX = -6;
    obstacleGroup.velocityX = -6;
  
  if(keyDown("space")&& monkey.y>=242) {
    monkey.velocityY = -15;
  }
 
  if(bananaGroup.isTouching(monkey)){
    monkey.scale=monkey.scale+0.02;
    bananaGroup.destroyEach();
  }
  
  if(obstacleGroup.collide(monkey)){
    monkey.scale=monkey.scale-0.02;
    bananaGroup.destroyEach();
    obstacleGroup.destroyEach();
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(invisibleGround);
    
    spawnObstacles();
    spawnBananas();
    drawSprites();
  

  }
 
  
function spawnObstacles() {
  if(frameCount % 90 === 0) {
    var obstacle = createSprite(600,250,10,40);
    
     
    obstacle.addImage(obstacle1);
    
    //generate random obstacles
    var rand =Math.round(random(1,6));
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
  
    obstacle.velocityX=-6;
    
    obstacleGroup.add(obstacle);
    
    obstacleGroup.collide(invisibleGround);
    
   
  }
}
function spawnBananas() {
  if(frameCount % 90 === 0) {
    
    var banana = createSprite(600,150,10,40);
    
    banana.velocityX=-6;
    
    banana.addImage(banana1);
    
    //generate random obstacles
    var rand =Math.round(random(1,6));
    
    //assign scale and lifetime to the obstacle           
    banana.scale = 0.03;
    bananaGroup.add(banana);
    
    bananaGroup.velocityX=-6;
    
  }
    
}
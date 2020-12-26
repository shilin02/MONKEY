var Survival_Time






var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg");
  
  
  
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  monkey.velocityX = 2
  
  
  ground = createSprite(monkey.x,350,900,10);
  console.log(ground.x);
  
  
  
  
  
  
}


function draw() {
background(jungleImage);
  
ground.x = monkey.x;  

stroke("black");
textSize(20);
fill("black");
Survival_Time= Math.ceil(frameCount/frameRate());
text("Survival Time: " + Survival_Time ,monkey.x,50);

  camera.position.x = monkey.x
  camera.position.y = 200
  
 if (ground.x < 0){
      ground.x = monkey.x;
    }      
  
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
      
    }
  
  
  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  Banana();
  
  Rock();
          
 drawSprites();          
  
}

function Banana(){
  
 if (frameCount % 70 === 0) {
     banana = createSprite(400+ monkey.x,130,40,10);
    banana.y = Math.round(random(210,240));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -1;
    
     
    banana.lifetime = 130;
    
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    
   
    }
 
  
}
function Rock(){

if (frameCount % 180 === 0){
   var rock = createSprite(400+ monkey.x,330,10,40);
   rock.addImage(rockImage);
  rock.scale = 0.08;
  rock.velocityX = -0.2;
    
     
    rock.lifetime = 300;
    
    
  
    
}
}
var car,car1,car6Group;
var car2,car3,car8Group;
var car4,car5;
var main1,main2;
//var policeSound;
var crashSound;
//var policecar,policecar2;
//var police4,police5;
var back,backimage
var ulta2,ulta3,ultawGroup;
var main5,main3,main9Group;
var score = 0;
var PLAY= 1
var END = 0
var gameState = PLAY;

function preload(){
car1 =loadImage("cha1.png");
  car3 = loadImage("cha2.png");
  //car5 = loadImage("cha3.png");
  main2 = loadImage("main.png")
  //policeSound = loadSound("police.mp3");
 crashSound = loadSound("car.mp3")
main3 = loadImage("main3.png");
 ulta2= loadImage("ulta2.png");
  backimage = loadImage("road.png");
}

function setup(){
createCanvas(800,600)
  background("white")
back = createSprite(400,400)
  back.addImage(backimage)
  back.scale = 1;
 back.velocityY=3

 
 
  //main1.velocity=0;
  
 cars6Group = new Group();
car8Group  = new Group();
  ultawGroup = new Group();
  main9Group = new Group();
  main1 = createSprite(400,550,20,20);
  main1.addImage(main2);

 main1.setCollider("rectangle",0,0,30,60);
  main1.debug = false


}



  
function draw(){
  
   if(back.y > 400){
      back.y = 300
}
main1.velocityY = 0;
    main1.velocityX =0;
  if(gameState === PLAY){
 score = score + Math.round(getFrameRate()/30);
    if(keyDown("Left_Arrow")){
   main1.velocityX= -8
   
 }
  if(keyDown("Right_Arrow")){
    main1.velocityX = 8 
    
  }
    if(keyDown("UP_Arrow")){
      main1.velocityY=-7
    }
  main1.velocityY = main1.velocityY+0.5
  
  back.velocityY = 4
  
  cars();  
rolsroyal();
reverseq();
 sudha(); 
  
    if(cars6Group.isTouching(main1)||car8Group.isTouching(main1)||ultawGroup.isTouching(main1)||main9Group.isTouching(main1)){
      crashSound.play();
      gameState=END
    }
}
  else if(gameState === END){
    back.velocityY = 0;
    cars6Group.setVelocityEach(0);
    car8Group.setVelocityEach(0);
    main1.velocityY=0;
    main1.velocityX = 0;
    ultawGroup.setVelocityEach(0);
    main9Group.setVelocityEach(0);
    main1.visible = false;
   // back.visible = false;
    
    
    
    text("GAME OVER",400,300)
    
    
    
  }

drawSprites();
text("score",350,30)
 
}
function cars(){
  if(frameCount%80===0){
  car  = createSprite(600,550,30,30)
  car.addImage(car1)
  car.x = Math.round(random(550,600));
  car.velocityY = -4
  car.lifetime=300;
 
  cars6Group.add(car)
     car.setCollider("rectangle",0,0,40,63);
    car.debug = false
  
  
  
  
  }
  
  
}
function rolsroyal(){
   if(frameCount%50===0){
  car2 = createSprite(500,550,30,30);
  car2.addImage(car3);
  car2.x = Math.round(random(450,500));
   car2.velocityY = -3
  car2.lifetime=300;
   car8Group.add(car2)
    car2.setCollider("rectangle",0,0,40,63);
     car2.debug =false
   }
}
function reverseq(){
  if(frameCount%60===0){
    main5 = createSprite(200,100,30,30)
  main5.addImage(main3);
  main5.x = Math.round(random(150,250));
  main5.velocityY= 6
    main5.lifetime = 300;
    main9Group.add(main5)
     main5.setCollider("rectangle",0,0,40,63);
    main5.debug = false
  }   
}
function sudha(){
  if(frameCount%70 === 0){
  ulta3 = createSprite(300,100,30,30)
    ulta3.addImage(ulta2);
   ulta3.x = Math.round(random(300,400))
    ulta3.velocityY = 8;
    ulta3.lifetime = 300;
    ultawGroup.add(ulta3);
  ulta3.setCollider("rectangle",0,0,40,63);
    ulta3.debug = false
  }
}
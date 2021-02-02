const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var spaceShipImg, spaceShip;
var backgroundImg, earth;
var laserImg, laser, laserGroup;
var asteroid1, asteroid2, asteroid3, asteroid1Group, asteroid2Group, asteroid3Group;
var obstacle;
var asteroid1Img, asteroid2Img, asteroid3Img;

function preload() {
  spaceShipImg = loadImage("images/images.png");
  backgroundImg = loadImage("images/earth.png");
  laserImg = loadImage("images/laser.png");
  asteroid2Img = loadImage("images/s.png");
  asteroid3Img = loadImage("images/comets.png");
  asteroid1Img = loadImage("images/asteroid.png");
}
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  earth = createSprite(600, 535, 50, 50);
  earth.addImage(backgroundImg);
  earth.scale = 0.8
  
  spaceShip = createSprite(200, 400, 50, 50);
  spaceShip.addImage(spaceShipImg);
  spaceShip.scale = 0.5;

  laserGroup = createGroup();
  asteroid1Group = createGroup();
  asteroid2Group = createGroup();
  asteroid3Group = createGroup();
}

function draw() {
  background(0,0,0);   
  if (keyWentDown("space")) {
    createLaser();
  }
  if (keyDown("right")) {
    spaceShip.x = spaceShip.x + 5 ; 
  }

  if (keyDown("left")) {
    spaceShip.x = spaceShip.x - 5 ; 
  }
  if (laserGroup.isTouching(asteroid1Group)){
    laser.destroy();
    asteroid1Group.destroyEach();
  }
  if (laserGroup.isTouching(asteroid2Group)){
    laser.destroy();
    asteroid2Group.destroyEach();
  }
  if (laserGroup.isTouching(asteroid3Group)){
    laser.destroy();
    asteroid3Group.destroyEach();
  }

  var select_asteroid = Math.round(random(1,3));
  
  if (frameCount % 100 === 0) {
    if (select_asteroid === 1) {
      createAsteroid1();
    } else if (select_asteroid === 2) {
      createAsteroid2();
    } else {
      createAsteroid3();
    }
  }
  drawSprites();
}

function createLaser() {
  laser= createSprite(200, 328 , 60, 10);
  laser.addImage(laserImg);
  laser.x = 360;
  laser.x=spaceShip.x;
  laser.velocityY = -4;
  laser.lifetime = 100;
  laser.scale = 0.1  ;
  laserGroup.add(laser);
  return laser;
}

function createAsteroid1() {
    asteroid1 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid1.addImage(asteroid1Img);
    asteroid1.velocityY = 1;
    asteroid1.lifetime = 600;
    asteroid1.scale = 0.05
    asteroid1Group.add(asteroid1);
    return asteroid1;
  }

function createAsteroid2() {
    asteroid2 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid2.addImage(asteroid2Img);
    asteroid2.velocityY = 1;
    asteroid2.lifetime = 600;
    asteroid2.scale = 0.05
    asteroid2Group.add(asteroid2);
    return asteroid2;
  }

function createAsteroid3() {
    asteroid3 = createSprite(Math.round(random(50,550)),0, 10, 10);
    asteroid3.addImage(asteroid3Img);
    asteroid3.velocityY = 1;
    asteroid3.lifetime = 600;
    asteroid3.scale = 0.05
    asteroid3Group.add(asteroid3);
    return asteroid3;
  }

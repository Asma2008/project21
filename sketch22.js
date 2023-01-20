//class 22: Physics Engine
//Developer: 

//Declare variables for game objects and behaviour indicators(FLAGS)
//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var userEngine, userWorld;

var ball, ground;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
  
}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(800, 400);

  userEngine = Engine.create();
  userWorld = userEngine.world;

  //construction of ball using matter.js
  var ball_options = {
    restitution: 0.7,
  };
  ball = Bodies.circle(100, 100, 20, ball_options);
  World.add(userWorld, ball);
  //console.log(ball);

  //construction of ground using matter.js
  var ground_options = {
    isStatic: true,
  };
  ground = Bodies.rectangle(400, 380, 800, 20, ground_options);
  World.add(userWorld, ground);
}

//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background(0);

  Engine.update(userEngine);

  //display of ball using matter.js
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 40, 40);

  //display of ground using matter.js
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 20);

  rectMode(CENTER);
  fill(255);
  rect(400, 200, 50, 50);
}

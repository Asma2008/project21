/*

class 20: Physics Engine
Developer:

Goals:
  ● Use a physics engine to create a world and the objects inthem.
  ● Integrate the physics engine with the p5 code to create interactive objects following the rules of physics in this world.
  ● Tune the physics engine to change the behavior of the objects in your world.

*/

//Declare variables for game objects and behaviour indicators(FLAGS)

//constants
const Engine = Matter.Engine; //universe
const World = Matter.World; //planet
const Bodies = Matter.Bodies; //living non living objects

//declare variables to assign the simulation objects
var amEngine, amWorld;

var ball, ground;
var floatingWall, wedge;
var angle;
var leftWall, rightWall;
var btn1,btn2;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(1000, 500);

  //create simulation and store in in variables
  amEngine = Engine.create();
  amWorld = amEngine.world;

  angle = 60;

  //modifiying physical properties
  var ground_options = {
    isStatic: true,
  };
  //construction of ground using matter.js
  ground = Bodies.rectangle(400, 400, width, 10, ground_options);
  //as soon as a body is created, it has to be specifically ADDED to current world
  World.add(amWorld, ground);
  console.log("GROUND BODY:--  ");
  console.log(ground);

  //modifiying physical properties
  var ball_options = {
    restitution: 0.3,
    density: 1.2,
  };
  //construction of ball using matter.js
  ball = Bodies.circle(50, 50, 10, ball_options);
  World.add(amWorld, ball);

  floatingWall = Bodies.rectangle(300, 150, 70, 10, ground_options);
  World.add(amWorld, floatingWall);

  wedge = Bodies.rectangle(650, 200, 100, 20, ground_options);
  World.add(amWorld, wedge);

  //creating trash can
  leftWall = Bodies.rectangle(650, 360, 25, 80, { isStatic: true });
  World.add(amWorld, leftWall);

  rightWall = Bodies.rectangle(760, 360, 25, 80, { isStatic: true });
  World.add(amWorld, rightWall);

  btn1 = createImg("right.png");
  btn1.position(220, 30);
  btn1.size(50, 50);
  btn1.mouseClicked(hForce);

  btn2 = createImg("up.png");
  btn2.position(20, 30);
  btn2.size(50, 50);
  btn2.mouseClicked(vForce);
}

//All changes, conditions, manipulations, actions to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
function draw() {
  background("black");

  //activate the simulation
  Engine.update(amEngine);

  //display of ground using matter.js
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 10);

  //display of  ball using matter.js
  fill("pink");
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  Matter.Body.rotate(wedge, angle);
  push();
  translate(wedge.position.x, wedge.position.y);
  rotate(angle);
  fill("yellow");
  rectMode(CENTER);
  rect(0, 0, 100, 20);
  pop();

  angle += 0.1;

  fill("blue");
  rectMode(CENTER);
  rect(floatingWall.position.x, floatingWall.position.y, 70, 20);

  //display trash can
  fill("lightgreen");
  rect(leftWall.position.x, leftWall.position.y, 25, 80);

  rect(rightWall.position.x, rightWall.position.y, 25, 80);

  if (keyIsDown(RIGHT_ARROW)) {
    // applying force to the body of the ball
    Matter.Body.applyForce(ball, ball.position, { x: 10, y: 10 });
  }
}
function hForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.5, y: 0 });
}
function vForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -3 });
}

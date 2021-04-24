const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ball;
var ground
function setup() {
  createCanvas(800,400);
  
myEngine = Engine.create();
myWorld = myEngine.world;


var ball_options={
 restitution : 0.7
}
ball = Bodies.circle(200,50,20,ball_options);
World.add(myWorld, ball)

var options= {
isStatic : true
}
ground = Bodies.rectangle(300,400,800,20,options);
World.add(myWorld, ground)



}

function draw() {
  background("lightBlue");  
  Engine.update(myEngine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);

  rectMode(CENTER);
  rect(ground.position.x ,ground.position.y,800,20);


}
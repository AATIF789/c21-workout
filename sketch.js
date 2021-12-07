const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint; 
let engine;
let world;
var ball;
var pendullum
var ball2
var cons;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  var option={
    restitution:0.95
  }
  ball= Bodies.circle(200,200,15,option)
  World.add(world,ball);
  var pendullumOptions={
    pointA:{x:200,y:20 },
    bodyB:ball,
    length:100
  }
  pendullum=Constraint.create(pendullumOptions)
  World.add(world,pendullum)

  var property={
    restitution:0.8
  }
  ball2= Bodies.circle(200,300,15,property)
  World.add(world,ball2)
  var ballOption={
    bodyA:ball,
    bodyB:ball2,
    length:100
  }
  cons=Constraint.create(ballOption)
  World.add(world,cons)
  }

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,15);
  ellipse(ball2.position.x,ball2.position.y,15)
  strokeWeight(3)
  stroke("white")
  line(pendullum.pointA.x,pendullum.pointA.y,ball.position.x,ball.position.y)
  line(ball.position.x,ball.position.y,ball2.position.x,ball2.position.y)
}
function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  }
}


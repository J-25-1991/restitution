const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,object,ball;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
var options={
  isStatic:true
}
object=Bodies.rectangle(200,390,400,20,options);
World.add(world,object);
console.log(object.type);

var options_ball={
  restitution:1.0
}
ball=Bodies.circle(200,100,50,options_ball);
World.add(world,ball);
}

function draw() {
  background(0);
  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);

}
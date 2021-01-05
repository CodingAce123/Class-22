const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


function setup() {
  createCanvas(400,400);
engine=Engine.create()
world=engine.world

var GroundOptions={
isStatic:true
}
Ground=Bodies.rectangle(200,390,400,20,GroundOptions)
World.add(world,Ground)
var BallOptions={
restitution:1.5
}
Ball=Bodies.circle(200,100,20,BallOptions)
World.add(world,Ball)
//console.log(Ground.type)
//console.log(object)
//console.log(object.position.x)
console.log(Ground.position.y)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
Engine.update(engine)
rectMode(CENTER)
rect(Ground.position.x,Ground.position.y,400,20)
ellipseMode(RADIUS)
ellipse(Ball.position.x,Ball.position.y,20)
}
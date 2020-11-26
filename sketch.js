const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
 
function preload()
{
    
}
 
function setup() {
    createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;
 
}
 
 
function draw() {

  background(0);
  Engine.update(engine);
  
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
ground = new Ground(300,400,700,20);
hero = new Hero(200,200);
fly = new Fly (hero.body,{x:200,y:100 });
}

function draw() {
  background(255);
  Engine.update(engine);
ground.display();
fly.display();
hero.display();
}

function mouseDragged() {

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});

}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rainD



function setup(){
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  rainA = new RainDrop(100,80);
  rainB = new RainDrop(150,57);
  rainC = new RainDrop(200,86);
  rainD = new RainDrop(250,66);
  rainE = new RainDrop(300,20);
  rainF = new RainDrop(350,33);
  rainG = new RainDrop(50,50);
  
}

function draw(){
  background(0,0,0);  
  Engine.update(engine);
  strokeWeight(4);
  rainA.display();
  rainB.display();
  rainC.display();
  rainD.display();
  rainE.display();
  rainF.display();
  rainG.display();

  rainA.move();
  rainB.move();
  rainC.move();
  rainA.move();
  rainE.move();
  rainF.move();
  rainG.move();
}


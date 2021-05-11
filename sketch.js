const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

function preload(){
    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    
   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);
   ground1 = new Ground();
}

    function draw(){
        background(255);
        Engine.update(engine);
     
        ground1.display();
    }





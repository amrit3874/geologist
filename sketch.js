const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,iron,stone;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(100,100,100);
   iron = new Iron(600,100,100,200);
    stone = new Stone(800,150,250,100);

}



function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   rubber.display();
   iron.display();
    stone.display();
 
}


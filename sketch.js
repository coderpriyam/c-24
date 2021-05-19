const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1 , pig2 ;
var log1 , log2 ;
var bird1 ; 
function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);

    pig1 = new Pig(810 , 350);
    pig2 = new Pig(750 , 220);

    log1 = new Log(810 , 260 , 300 , PI/2);
    log2= new Log(810 ,180 , 300 , PI/2);

    bird1 = new Bird (100  , 100);
}

function draw(){
    background("white");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird1.display();
}
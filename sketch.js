const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2, box3;
var ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    box1 = new Box(100,10,40,50);
    box2 = new Box(200,300,50,50);
    box3 = new Box(235,10,50,100);
    ball1 = new Ball(50,10,20);

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,380,200,100,ground_options);
    World.add(world,ground);

    


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,100);

 

    box1.display();
    box2.display();
    box3.display();
    ball1.display();
}
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var myEngine, myWorld, ground , ball,box ;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine=Engine.create();
    myWorld=myEngine.world;
    box=Bodies.rectangle(200,200,50,20);

var ball_options={restitution:3}

    ball=Bodies.circle(300,300,15,ball_options);
    var ground_options={
        isStatic: true
    }
    ground=Bodies.rectangle(200,395,400,10,ground_options);
    World.add(myWorld,ground);
    World.add(myWorld,ball);
    World.add(myWorld,box);
    
}
   
function draw(){
    background(0);
    Engine.update(myEngine);
    rectMode(CENTER);
    ellipseMode(RADIUS);
rect(box.position.x,box.position.y,50,20);
ellipse(ball.position.x,ball.position.y,15,15);
rect(ground.position.x,ground.position.y,400,10);

}

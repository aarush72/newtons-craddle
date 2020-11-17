
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5,ball6;
var ground;
var rope1,rope2,rope3,rope4,rope5,rope6;

function preload() {
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ball1 = new Ball(100,450,60);
	ball2 = new Ball(300,450,60);
	ball3 = new Ball(500,450,60);
	ball4 = new Ball(700,450,60);
	ball5 = new Ball(900,450,60);
	ball6 = new Ball(1100,450,60);

	ground = new Ground(width/2,200,700,20);

	rope1 = new Rope(ball1.body,ground.body);
	rope2 = new Rope(ball2.body,ground.body);
	rope3 = new Rope(ball3.body,ground.body);
	rope4 = new Rope(ball4.body,ground.body);
	rope5 = new Rope(ball5.body,ground.body);
	rope6 = new Rope(ball6.body,ground.body);
	

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 ball6.display();
 ground.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 rope6.display();
 
 
}

function mouseDragged(){
Matter.Body.setPosition(ball2.body,{x : mouseX,y : mouseY})


}


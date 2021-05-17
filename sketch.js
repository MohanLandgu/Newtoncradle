
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,200,300,20)

	ball1=new Ball(300,500,25);
	ball2=new Ball(350,500,25);
	ball3=new Ball(400,500,25);
	ball4=new Ball(450,500,25);
	ball5=new Ball(500,500,25);

	rope1=new Rope(ball1.body,roof.body,100,0)
	rope2=new Rope(ball2.body,roof.body,150,0)
	rope3=new Rope(ball3.body,roof.body,200,0)
	rope4=new Rope(ball4.body,roof.body,250,0)
	rope5=new Rope(ball5.body,roof.body,300,0)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  Engine.update(engine)

  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

  


 
}

function keyPressed(){


	if(keyCode===UP_ARROW){
	
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x: -730,y:0})
	
	
	}
	
	
	}
	


	




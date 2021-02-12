
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammerBody,stoneBody,rubberBody,groundBody;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options ={
		'density' : 2,
		'restitution' : 0.5,
		'friction'  : 1.0 
	}

	groundBody = Matter.Bodies.rectangle(400,675,800,50,{isStatic : true});
	World.add(world,groundBody);
	
	hammerBody = Matter.Bodies.rectangle(400,350,50,30,options);
	World.add(world,hammerBody);
	


		var options1={
			'density' : 1.5,
			'restitution' : 0.7,
			'friction' : 0.9
		}
	stoneBody = Matter.Bodies.rectangle(300,650,45,45,options1);
	World.add(world,stoneBody);

	var options2={
		'density' : 1,
		'restitution' : 1.2,
		'friction' : 0.5
	}

	rubberBody = Matter.Bodies.circle(250,650,30,options2);
	World.add(world,rubberBody);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammerBody.position.x = mouseX;
	hammerBody.position.y = mouseY;
  fill("brown");
  rect(groundBody.position.x,groundBody.position.y,800,50);
  fill("orange");
  rect(hammerBody.position.x,hammerBody.position.y,50,30);
  fill("white");
  rect(stoneBody.position.x,stoneBody.position.y,45,45);
  fill("blue");
  circle(rubberBody.position.x,rubberBody.position.y,30);
  
  
}




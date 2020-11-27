
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
                                                                                                                                                                              
                                                                                                                                                
var paper,ground,dustbin1,dustbin2,dustbin3;
             

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(50,690,30);
    ground=new Ground(500,700,1000,20);
   
dustbin1=new Dustbin(800,670,200,20);
dustbin2=new Dustbin(710,620,20,100);
dustbin3=new Dustbin(890,620,20,100);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.run(engine);
 
 
  ground.display();
  paper.display();
  dustbin2.display();
  dustbin3.display();
  dustbin1.display();
   
 if(keyCode===UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:7,y:-24})
}
}




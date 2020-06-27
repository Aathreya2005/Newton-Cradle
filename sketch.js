var b1,b2,b3,b4,b5,wall;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function setup(){
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  wall=new Ground(400,100,300,10)
  b1=new Ball(400,300,20,0.5);
  sling1=new SlingShot(b1.body,{x:400,y:100});
  b2=new Ball(380,300,20,0.5);
  sling2=new SlingShot(b2.body,{x:360,y:100});
  b3=new Ball(360,300,20,1.2);
  sling3=new SlingShot(b3.body,{x:320,y:100});
  b4=new Ball(420,300,20,0.5);
  sling4=new SlingShot(b4.body,{x:440,y:100});
  b5=new Ball(440,300,20,0.5);
  sling5=new SlingShot(b5.body,{x:480,y:100});
}
function draw(){
  background(0);
  Engine.update(engine);
  wall.display();
  b1.display();
  sling1.display();
  b2.display();
  sling2.display();
  b3.display();
  sling3.display();
  b4.display();
  sling4.display();
  b5.display();
  sling5.display();
}
function keyPressed(){
  if(keyCode==UP_ARROW){
    Matter.Body.applyForce(b3.body,b3.body.position,{x:-20,y:-20});
  }
}
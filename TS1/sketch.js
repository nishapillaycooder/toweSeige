const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(450,390,900,20);
 


   stage=new Ground(390,300,250,10)

  box1=new Box(300,280,50,50)
  box2=new Box(350,280,50,50)
  box3=new Box(400,280,50,50)
  box4=new Box(375,250,50,50)
  box5=new Box(325,250,50,50)
  box6=new Box(350,200,50,50)







 
  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  

  ground.display();
  stage.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
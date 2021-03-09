const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Stand;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block20, block11, block12, block13, block14, block15, block16

function setup(){
    createCanvas(1200, 500);

    engine = Engine.create();
    world = engine.world;

   Stand = new Ground(270, 220, 180, 20);

   block1 = new Block(105, 120, 20, 20);
   block2 = new Block(115, 120, 20, 20); 
   block3 = new Block(125, 120, 20, 20); 
   block4 = new Block(135, 120, 20, 20); 
   block5 = new Block(145, 120, 20, 20); 
   block6 = new Block(155, 120, 20, 20);  
   block7 = new Block(165, 120, 20, 20); 

   // row 2 begins
   block8 = new Block(115, 130, 20, 20); 
   block9 = new Block(125, 130, 20, 20); 
   block10 = new Block(135, 130, 20, 20); 
   block11 = new Block(145, 130, 20, 20); 
   block12 = new Block(155, 130, 20, 20);

   //row 3 begins 
   block13 = new Block(125, 140, 20, 20); 
   block14 = new Block(135, 140, 20, 20);
   block15 = new Block(145, 140, 20, 20);

   //row last
   block16 = new Block(135, 150, 20, 20);

}

function draw(){
    background('skyblue');



    textSize(30);
 
    stroke(8);
    text('Drag the hexagonal stone and release it, to launch it towards the blocks!', 50, 100);
  

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    Stand.display();

}
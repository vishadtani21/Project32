const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;

var stand1,stand2;

var score = 0;

//stand 1
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13;
var box14,box15,box16,box17,box18;
var box19,box20,box21,box22;
var box23,box24,box25;
var box26,box27;
var box28;

//stand 2
var box29,box30,box31,box32,box33;
var box34,box35,box36,box37;
var box38,box39,box40;
var box41,box42;
var box43;

var polygon;

var slingshot;

var gameState = "play";

function preload(){
    getBackgroundImg();
    backgroundImg = loadImage("day.jpg");
}


function setup(){
    var canvas = createCanvas(1400,700);

    engine = Engine.create();
    world = engine.world;

    //stand 1
    //level 1
    box1 = new Box (510,498,30,40);
    box2 = new Box (540,498,30,40);
    box3 = new Box (570,498,30,40);
    box4 = new Box (600,498,30,40);
    box5 = new Box (630,498,30,40);
    box6 = new Box (660,498,30,40);
    box7 = new Box (690,498,30,40);

    //level 2
    box8 = new Box (520,460,30,40);
    box9 = new Box (550,460,30,40);
    box10 = new Box (580,460,30,40);
    box11 = new Box (610,460,30,40);
    box12 = new Box (640,460,30,40);
    box13 = new Box (670,460,30,40);

    //level 3
    box14 = new Box (530,420,30,40);
    box15 = new Box (560,420,30,40);
    box16 = new Box (590,420,30,40);
    box17 = new Box (620,420,30,40);
    box18 = new Box (650,420,30,40);

    //level 4
    box19 = new Box (540,380,30,40);
    box20 = new Box (570,380,30,40);
    box21 = new Box (600,380,30,40);
    box22 = new Box (630,380,30,40);

    //level 5
    box23 = new Box (550,340,30,40);
    box24 = new Box (580,340,30,40);
    box25 = new Box (610,340,30,40);

    //level 6
    box26 = new Box (560,300,30,40);
    box27 = new Box (590,300,30,40);

    //level 7
    box28 = new Box (580,260,30,40);

    //stand 2
    //level 1
    box29 = new Box (940,200,30,40);
    box30 = new Box (970,200,30,40);
    box31 = new Box (1000,200,30,40);
    box32 = new Box (1030,200,30,40);
    box33 = new Box (1060,200,30,40);

    //level 2
    box34 = new Box (950,160,30,40);
    box35 = new Box (980,160,30,40);
    box36 = new Box (1010,160,30,40);
    box37 = new Box (1040,160,30,40);

    //level 3
    box38 = new Box (960,120,30,40);
    box39 = new Box (990,120,30,40);
    box40 = new Box (1020,120,30,40);

    //level 4
    box41 = new Box (970,80,30,40);
    box42 = new Box (1000,80,30,40);

    //level 5
    box43 = new Box (991,40,30,40);


    ground = new Ground(700,height,1400,30);


    stand1 = new Ground (600,500,300,10);
    stand2 = new Ground (1000,300,200,10);

    polygon = Bodies.circle(300,350,30, {'restitution':0.5,'friction':1.5,'density': 2});
    polygon.image=loadImage("polygon.png");
    World.add(world,polygon);


    slingshot = new Slingshot(polygon,{x:200,y:200});



}


function draw (){
    Engine.update(engine);

   if(backgroundImg){
    background(backgroundImg);

   }
    
    //stand 1
    //level 1
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    //level 2
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    //level 3
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    //level 4
    box19.display();
    box20.display();
    box21.display();
    box22.display();
 
    //level 5
    box23.display();
    box24.display();
    box25.display();

    //level 6 
    box26.display();
    box27.display();

    //level 7
    box28.display();

    //stand 2
    //level 1
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();

    //level 2
    box34.display();
    box35.display();
    box36.display();
    box37.display();

    //level 3
    box38.display();
    box39.display();
    box40.display();

    //level 4
    box41.display();
    box42.display();

    //level 5
    box43.display();
   

    ground.display();


    stand1.display();
    stand2.display();


    imageMode (CENTER);
    image (polygon.image,polygon.position.x,polygon.position.y,60,60);


    slingshot.display();

    //stand1
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();

    //stand2
    box29.score();
    box30.score();
    box31.score();
    box32.score();
    box33.score();
    box34.score();
    box35.score();
    box36.score();
    box37.score();
    box38.score();
    box39.score();
    box40.score();
    box41.score();
    box42.score();
    box43.score();
   

    textSize(20);
    stroke ("yellow");
    fill ("orange");
    text ("SCORE: "+score,650,40);

   
}

function mouseDragged (){
    Matter.Body.setPosition(polygon, { 'x' : mouseX, 'y' : mouseY });
}

function mouseReleased (){
    slingshot.fly();

}

function keyPressed (){
    if (keyCode===32){
        slingshot.attach(polygon);
        gameState = "play";
    }
}

async function getBackgroundImg(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=06 && hour<=18){
        bg = "day.jpg";
    }
    else{
      bg = "night.jpg"
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
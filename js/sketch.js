const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var world, engine;
var division1, division2, division3, division4, division5, division6, division7, division8, division9;
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plinko9,plinko10;
var plinko11,plinko12,plinko13,plinko14,plinko15,plinko16,plinko17,plinko18,plinko19, plinko20;
var plinko21,plinko22,plinko23,plinko24,plinko25,plinko26,plinko27,plinko28,plinko29,plinko30;
var plinko31,plinko32,plinko33,plinko34,plinko35,plinko36;
var particles = [];
var score = 0;
var particle;

function setup(){
    engine = Engine.create();
    world=engine.world;
    createCanvas(500,600);

    division1 = new Divisions(50,450,10,300);
    division2 = new Divisions(100,450,10,300);
    division3 = new Divisions(150,450,10,300);
    division4 = new Divisions(200,450,10,300);
    division5 = new Divisions(250,450,10,300);
    division6 = new Divisions(300,450,10,300);
    division7 = new Divisions(350,450,10,300);
    division8 = new Divisions(400,450,10,300);
    division9 = new Divisions(450,450,10,300);

    plinko1 = new Plinko(50,60,10);
    plinko2 = new Plinko(100,60,10);
    plinko3 = new Plinko(150,60,10);
    plinko4 = new Plinko(200,60,10);
    plinko5 = new Plinko(250,60,10);
    plinko6 = new Plinko(300,60,10);
    plinko7 = new Plinko(350,60,10);
    plinko8 = new Plinko(400,60,10);
    plinko9 = new Plinko(450,60,10);
    plinko10 = new Plinko(50,120,10);
    plinko11 = new Plinko(100,120,10);
    plinko12 = new Plinko(150,120,10);
    plinko13 = new Plinko(200,120,10);
    plinko14 = new Plinko(250,120,10);
    plinko15 = new Plinko(300,120,10);
    plinko16 = new Plinko(350,120,10);
    plinko17 = new Plinko(400,120,10);
    plinko18 = new Plinko(450,120,10);
    plinko19 = new Plinko(50,180,10);
    plinko20 = new Plinko(100,180,10);
    plinko21 = new Plinko(150,180,10);
    plinko22 = new Plinko(200,180,10);
    plinko23 = new Plinko(250,180,10);
    plinko24 = new Plinko(300,180,10);
    plinko25 = new Plinko(350,180,10);
    plinko26 = new Plinko(400,180,10);
    plinko27 = new Plinko(450,180,10);
    plinko28 = new Plinko(50,240,10);
    plinko29 = new Plinko(100,240,10);
    plinko30 = new Plinko(150,240,10);
    plinko31 = new Plinko(200,240,10);
    plinko32 = new Plinko(250,240,10);
    plinko33 = new Plinko(300,240,10);
    plinko34 = new Plinko(350,240,10);
    plinko35 = new Plinko(400,240,10);
    plinko36 = new Plinko(450,240,10);
}
function draw(){
    background(0);

    fill ("cyan");
    textSize (20);
    text("Score : " + score, 20,25);
    
    fill("yellow");
    text("500",5,320);
    text("500",60,320);
    text("500",110,320);

    fill("green");
    text("400",160,320);
    text("400",210,320);

    fill("pink");
    text("300",260,320);
    text("300",310,320);

    fill("orange");
    text("200",360,320);
    text("200",410,320);

    fill(155);
    text("100",460,320);

    Engine.update(engine);
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    division6.display();
    division7.display();
    division8.display();
    division9.display();

    plinko1.display();
    plinko2.display();
    plinko3.display();
    plinko4.display();
    plinko5.display();
    plinko6.display();
    plinko7.display();
    plinko8.display();
    plinko9.display();
    plinko10.display();
    plinko11.display();
    plinko12.display();
    plinko13.display();
    plinko14.display();
    plinko15.display();
    plinko16.display();
    plinko17.display();
    plinko18.display();
    plinko19.display();
    plinko20.display();
    plinko21.display();
    plinko22.display();
    plinko23.display();
    plinko24.display();
    plinko25.display();
    plinko26.display();
    plinko27.display();
    plinko28.display();
    plinko29.display();
    plinko30.display();
    plinko31.display();
    plinko32.display();
    plinko33.display();
    plinko34.display();
    plinko35.display();
    plinko36.display();

    for(var i in particles){
        particles[i].display();
    }
    text(mouseX+":"+mouseY,mouseX,mouseY);
    if(particle!=null){
        particle.display();

        if(particle.body.position.y>500){
            if(particle.body.position.x>450){
                score=score+100;
                particle=null;
            }
            else if(particle.body.position.x>400){
                score=score+200;
                particle=null;
            }
            else if(particle.body.position.x>350){
                score=score+200;
                particle=null;
            }
            else if(particle.body.position.x>300){
                score=score+300;
                particle=null;
            }
            else if(particle.body.position.x>250){
                score=score+300;
                particle=null;
            }
            else if(particle.body.position.x>200){
                score=score+400;
                particle=null;
            }
            else if(particle.body.position.x>150){
                score=score+400;
                particle=null;
            }
            else if(particle.body.position.x>100){
                score=score+500;
                particle=null;
            }
            else if(particle.body.position.x>50){
                score=score+500;
                particle=null;
            }
            else if(particle.body.position.x>0){
                score=score+500;
                particle=null;
            }
        }
    }
}
function mousePressed(){
    particle = new Particle(mouseX, 10, 10, 10);
    particles.push(particle);
}
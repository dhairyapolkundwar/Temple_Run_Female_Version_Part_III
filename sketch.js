// Variables

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var runner, ground, ninja;

var running, jumping, sliding, dead;
var running2, idle, bgm;
var engine, world;
var obstacleGroup;
var obsNo = 0;

var runner1, runner2, runner3, runner4, runner5, runner6, runner7, runner8;
var bg;

var gameState = {
  currentState: "running"
}

// Functions
function preload(){

  //Runner Running Images
  runner1= loadImage("./animations/player/run/Run1.png")
  runner2= loadImage("./animations/player/run/Run2.png")
  runner3= loadImage("./animations/player/run/Run3.png")
  runner4= loadImage("./animations/player/run/Run4.png")

  runner5= loadImage("./animations/player/run/Run5.png")
  runner6= loadImage("./animations/player/run/Run6.png")
  runner7= loadImage("./animations/player/run/Run7.png")
  runner8= loadImage("./animations/player/run/Run8.png")


  //Enemy Idle Images
  enemyidle1 = loadImage("./animations/enemy/idle/Idle__000.png")
  enemyidle2 = loadImage("./animations/enemy/idle/Idle__001.png")
  enemyidle3 = loadImage("./animations/enemy/idle/Idle__002.png")
  enemyidle4 = loadImage("./animations/enemy/idle/Idle__003.png")

  enemyidle5 = loadImage("./animations/enemy/idle/Idle__004.png")
  enemyidle6 = loadImage("./animations/enemy/idle/Idle__005.png")
  enemyidle7 = loadImage("./animations/enemy/idle/Idle__006.png")
  enemyidle8 = loadImage("./animations/enemy/idle/Idle__007.png")

  enemyidle9 = loadImage("./animations/enemy/idle/Idle__008.png")
  enemyidleA = loadImage("./animations/enemy/idle/Idle__009.png")

  //Enemy Running Images
  enemyrun1 = loadImage("./animations/enemy/run/Run__000.png")
  enemyrun2 = loadImage("./animations/enemy/run/Run__001.png")
  enemyrun3 = loadImage("./animations/enemy/run/Run__002.png")
  enemyrun4 = loadImage("./animations/enemy/run/Run__003.png")

  enemyrun5 = loadImage("./animations/enemy/run/Run__004.png")
  enemyrun6 = loadImage("./animations/enemy/run/Run__005.png")
  enemyrun7 = loadImage("./animations/enemy/run/Run__006.png")
  enemyrun8 = loadImage("./animations/enemy/run/Run__007.png")

  enemyrun9 = loadImage("./animations/enemy/run/Run__008.png")
  enemyrunA = loadImage("./animations/enemy/run/Run__009.png")

  //Background Music
  bgm = loadSound("./music/temple_run_female_music.aiff")

  bg = loadImage("./background/bg.png")
}

function setup(){

  

  bgm.play()

  engine = Engine.create()
  world = engine.world;

  createCanvas(windowWidth, windowHeight);
 
  runner = new Player();
  ninja = new Enemy();

  running = [runner1, runner2, runner3, runner4,
              runner5, runner6, runner7, runner8];

  enemyRunning = [enemyrun1, enemyrun2, enemyrun3, enemyrun4, enemyrun5,
                  enemyrun6, enemyrun7, enemyrun8, enemyrun9, enemyrunA];

  enemyIdle = [enemyidle1, enemyidle2, enemyidle3, enemyidle4, enemyidle5,
              enemyidle6, enemyidle7, enemyidle8, enemyidle9, enemyidleA]

  ground = new Ground();

}

function draw(){
  background(bg)

  Engine.update(engine);

  runner.display();
  ninja.display();
  ground.display();

  
}

  

 

function keyPressed(){
  if(keyCode === 32){
    runner.InJumpsTATE = true
    } else {
   runner.InJumpState = false
  }
}

// Classes

class Player{
  constructor(){
    var options = {
      'restitution': 0.1,
      'friction': 0.3,
      'density': 1.0,
    }

    this.body = Bodies.rectangle(400, 400, 40, 275, options)
    World.add(world, this.body)
  }
  i = 0
  display(){
    var positions = this.body.position
    Matter.Body.setAngle(this.body, 0);

    
    this.i += 0.3
    if(this.i < (running.length - 0.5)){
      image(running[Math.round(this.i)], positions.x, positions.y, 641 / 2, 542 / 2)
    }
    
    if(this.i >= (running.length - 0.5)){
      this.i = 0
    }

    
    
  }
}

class Ground{
  constructor(){
    this.body = Bodies.rectangle(0, windowHeight - 160, windowWidth, 80, {isStatic: true})
    World.add(world, this.body)
  }

  display(){
    push()
    fill("#888800")
    rect(0, windowHeight - 80, windowWidth, 80)
    pop()
  }
}

class Enemy{
  constructor(){
    var options = {
      'restitution': 0.1,
      'friction': 0.3,
      'density': 1.0,
    }

    this.body = Bodies.rectangle(50, 100, 290, 500, options)
    World.add(world, this.body)
  }
  i = 0
  display(){
    var positions = this.body.position
    Matter.Body.setAngle(this.body, 0);

    
    this.i += 0.5

    if(gameState.currentState === "running"){
      if(this.i < (enemyRunning.length - 0.5)){
        image(enemyRunning[Math.round(this.i)], positions.x, positions.y, 376 , 520)
      }

      if(this.i >= (enemyRunning.length - 0.5)){
        this.i = 0
      }

    } else {
      if(this.i < (enemyIdle.length - 0.5)){
        image(enemyIdle[Math.round(this.i)], positions.x, positions.y, 290 , 500)
      }

      if(this.i >= (enemyIdle.length - 0.5)){
        this.i = 0
      }
    }
    
    
    
    
  }
}
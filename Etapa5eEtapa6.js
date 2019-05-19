var hp = 100;
var pontuação = 0;
var level = 1;
var x = 0;
var y = 0;
var img
var bg
var xd
var yd
var disparo = false
var veli = 4
var xo = 0
var yo = 150
function preload(){


}

function setup() {
  createCanvas(500, 500);
  frameRate(30); 
}

function draw() {
  background(220);
  
textSize(18);
text('HP: '+ hp, 15, 25);
text('Pontuação : '+pontuação, 170, 25);
text('Level : '+level , 380, 25);

  
if (keyIsDown(CONTROL) && (! disparo) ){ 
    disparo = true; 
    xd = x;
    yd = y;     
  }

  if (disparo) {
    yd = yd + 10;
    
    if (yd > height) {
    
      disparo = false; 
    }
  }




  rect(x, y,40,40); 
  if ( keyIsDown(RIGHT_ARROW) ) 
  {
    x = x + 3;
  }

  if ( keyIsDown(LEFT_ARROW) ) 
  {
    x = x - 3;
  }

  if ( keyIsDown(UP_ARROW) ) 
  {
    y = y - 3;
  }

  if ( keyIsDown(DOWN_ARROW) ) 
  {
    y = y + 3;
  }
/* PROJÉTIL*/
  if (disparo) {
   ellipse(xd,yd,4,4);
    
  }
  
  
  ellipse(xo,yo,40,40)
  xo = xo + veli
  if(xo>500){
    xo = 0
    
     }

     if(dist(xd,yd,xo,yo) < 22){
       pontuação = pontuação + 1
       if(pontuação >= 10){
         level = level +1
         veli = veli + 6
         pontuação = 0
          }
     }
    
    if(dist(x,y,xo,yo) < 22){
       hp = hp - 1
      if(hp<=0){
          level = 2
          
         }
     }
    
  
} 

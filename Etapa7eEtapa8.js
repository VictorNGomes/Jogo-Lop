var hp = 10;
var pontuação = 0;
var level = 1;
var x = 0;
var y = 0;
var img;
var bg
var xd
var yd
var disparo = false
var veli = 4
var quant = 8
var xo = []
var yo = []
var i = 0
function preload(){


}

function setup() {
  createCanvas(500, 500);
  frameRate(30); 
  for (var i=0; i < quant; i++) { 
  	xo[i] = random(0,500);
    yo[i] = random(0,500); 
  }
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
  
  for( var i=0; i<quant; i++){
    ellipse(xo[i],yo[i],40,40)
    yo[i] = yo[i] - veli
    if(yo[i]<=0){
      xo[i] = random(0,500)
      yo[i] = 500
    
       }

    if(dist(xd,yd,xo[i],yo[i]) < 13){
        pontuação = pontuação + 1
        disparo = false
        yo[i] = 500
         if(pontuação >= 10){
           level = level +1
           veli = veli + 2
           pontuação = 0
               if(level>=5){
               level = 1 
               }
            }
       }
    
      if(dist(x,y,xo[i],yo[i]) < 22){
        hp = hp - 1
        if(hp<0){
          hp = 10
          level = 1
          veli = 3
           }
       }
    
  }
} 

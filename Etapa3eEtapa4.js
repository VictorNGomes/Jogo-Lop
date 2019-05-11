var x = 0;
var y = 0;
var img
var bg
var xd
var yd
var disparo = false

var xo = 0
var yo = 50
function preload(){

}

function setup() {
  createCanvas(500, 500);
  frameRate(30); 
}

function draw() {
  background(220);
  
  

  
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

  if (disparo) {
   ellipse(xd,yd,4,4);
    
  }
  
  
  ellipse(xo,yo,40,40)
  xo = xo + 4
  if(xo>500){
    xo = 0
    
     }


}

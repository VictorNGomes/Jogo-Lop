var x = 0;
var y = 0;
var img
var bg
var xd
var yd
var disparo = false
var missel
var tela = 1
var tela1 
var inimigo
var xeny = []
var yeny = []
var PONTOS = 0;
var B_PONTOS = 10
var LIFE = 100;
var level = 0
var quantidade = 8
var velin = 3
var gameover
var song
var som_coll
var som_c_enemy
var t_win

function preload(){
  som_c_enemy = loadSound('Sounds/som_c_enemy.mp3')
  gameover = loadImage('assets/bg3.png')
  img = loadImage('assets/fusca.png');
  bg = loadImage('assets/background.png');
  missel = loadImage("assets/Cmissel.png")
  tela1 = loadImage("assets/tela1.gif")
  inimigo = loadImage("assets/inimigo.png")
  t_win = loadImage('assets/tela_win.png')
  song = loadSound("Sounds/somt.mp3");
  som_coll = loadSound("Sounds/som_c.mp3")
}

function setup() {
  createCanvas(800, 600);
  frameRate(30); 
 // song = createAudio('somt.mp3');
 
  
  for (var i=0; i <quantidade; i++) { 
  	xeny[i] = random(0,800);
    yeny[i] = -random(0,600); 
  }

}

function draw() {

  

  if(tela == 1){
    background(tela1)
    
    if (keyIsDown(ENTER) ){
      
      tela = tela+tela
    }

  }



  
if (keyIsDown(CONTROL) && (! disparo) ){ 
    //song.autoplay(true)
    song.play();
    disparo = true; 
    xd = x;
    yd = y;     
  }

  if (disparo) {
    xd = xd +30;
    
    if (xd > width) {
    
      disparo = false; 
    }
  }

if(tela == 2){
  background(bg);

  fill(255);
  textSize(18);
  text('PONTOS: '+ PONTOS, 15,25 );

  fill(255);
  textSize(18);
  text('LIFE: '+ LIFE, 150,25 );
  
  fill(255);
  textSize(18);
  text('LEVEL: '+ level, 300,25 );

  image(img, x, y); 
  if(x>=0 || x>=800 ){
  if ( keyIsDown(RIGHT_ARROW) ) 
  {
    x = x + 5;
  }

  if ( keyIsDown(LEFT_ARROW) ) 
  {
    x = x - 5;
  }
  }else{
    x = 0
  }
  if ( keyIsDown(UP_ARROW) ) 
  {
    y = y - 5;
  }

  if ( keyIsDown(DOWN_ARROW) ) 
  {
    y = y + 5;
  }

  if (disparo) {
    
    image(missel,xd,yd);
    
  }
//Inimigo
  for(var i=0; i<quantidade; i++){
    image(inimigo,xeny[i],yeny[i]);
      xeny[i] = xeny[i] - velin
      
      if(xeny[i]<=0){
      
      xeny[i] = 800
      yeny[i] = random(0,600)

      
      }
      
//colisão disparo e inimigo
      if(dist(xd,yd,xeny[i],yeny[i] )<25){
      som_c_enemy.play();
      PONTOS = PONTOS + 1 
      disparo = false
      xeny[i] = 800
      yeny[i] = random(0,600)

        if(PONTOS>B_PONTOS){
          velin = velin + 3
          level = level +1
          B_PONTOS = B_PONTOS +10
          x = x + 1
          y = y + 1

          if(level>10){
            tela = 5

          }
        
      }
      
    }
    

    if(dist(x,y,xeny[i],yeny[i] )<30){
      som_coll.play();
      LIFE = LIFE-5
      xeny[i] = 800
      yeny[i] = random(0,600)
      
      if(LIFE<=0){

          tela = tela + tela
          PONTOS = 0 
          LIFE = 100
          level = 0
          velin = 3
          B_PONTOS = 10
        }
    }
  }

  







}/*TELA 2*/
//TELA DE GAME OVER
if(tela === 4){

    background(gameover)
    if(keyIsDown(ENTER)){
       PONTOS = 0 
       LIFE = 100
       level = 0
       velin = 3
       B_PONTOS = 10

      tela = 1

    }

  }


if(tela === 5){
background(t_win)
    if(keyIsDown(ENTER)){
       PONTOS = 0 
       LIFE = 100
       level = 0
       velin = 3
       B_PONTOS = 10

      tela = 1
    }
  }
} /*Draw*/

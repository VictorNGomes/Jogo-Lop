/* 
    Equipe: 
        Victor do Nascimento alguma coisa - Subturma A (Líder) 
        Fellype Eduardo de Farias Martins -    Subturma A 
        Etapa 1 e 2
*/
var x = 200
var y = 350

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(25);
  
  ellipse(x, y, 50, 50);
  
  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 5;
  }
  
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 5;
  }
  
  if (keyIsDown(UP_ARROW)) {
    y = y - 5;
  }
  
   if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  
  square(170, 100, 55);
}

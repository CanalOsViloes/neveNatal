let particulas = [];
function setup() {
  createCanvas(400, 400);
  
  for(let i=0;i<30;i++){
    particulas[i] = new Particula(random(10,width-10));    
  }
}

function draw() {
  background(100);
  for(let i=0;i<particulas.length;i++){
    particulas[i].desenhar();
    particulas[i].mover();  
    if(particulas[i].derreter()){
      particulas.splice(i,1);
      particulas.push(new Particula(random(10,width-10)));
    }
  } 
}

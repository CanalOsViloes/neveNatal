class Particula{
  constructor(x,y){
    this.posicao = createVector(x,y);
    this.tamanho = random(1,5);
    this.velocidade = createVector(0,random(0.5,2));
    this.xoff = random(0,100);
    this.derrete = false;
    this.derreterCount = 180;
  }
  
  desenhar(){
    stroke(200);
    fill(148, 204, 255);
    circle(this.posicao.x,this.posicao.y,this.tamanho);
  }
  
  mover(){
    if(!this.derrete){
      this.posicao.y += this.velocidade.y;
      this.posicao.x+=map(noise(this.xoff), 0, 1, -5,5);
      this.xoff+=0.01;
    
      if(this.posicao.y+this.tamanho>=height){
        this.posicao.y = height-this.tamanho;
        this.derrete = true;
      }  
    }
    
  }
     
  derreter(){
    if(this.derrete){
      if(this.derreterCount<=0){
        return true;  
      }
      this.derreterCount--;
      return false;
    }
    return false;    
  }
      
  aplicarForca(valor,angulo){
    
  }
  
}
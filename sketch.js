let cor;
let posicaoHorizontal;
let posicaoVertical;

function setup() {
   createCanvas(400, 400);
 background(220)
  cor=color(random(0,585),random(0,345),random(0,210));
  x=200;
  y=200;

}                    
function draw() {
  
  fill(cor)
circle(x,y , 50);
  if(mouseX< x){
    x = x-1;
}
if(mouseX>x){
  x=x+1
}  
if (mouseY< y){
  y--;
  }
  if(mouseY>y){
    y++;
  }
cor=color(random(0,585),random(0,345),random(0,210),random(0,100));
}
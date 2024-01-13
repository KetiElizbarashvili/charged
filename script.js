
let c; 
let sp = [];
let n;
let cnt;
let nf,nf2;
let a=9,b=0.1;
let dv = 5;
let wrds;
let tmr=100;
function setup(){
  nf=random(0.00001,0.05);
  nf2=random(1,10);
  c=1000//this width is used specifically for composition
  cnv = createCanvas(c,c);
  background(30);
  stroke(255);
  noFill();
  translate(c/2,c/2);
  spiralP(0,35,a,b);
  tmr=int(random(170,300));//timer for piece
  r1=random(0,90);
  g1=random(0,100);
  b1=random(0,150);
  

}
function draw(){
  background(r1,g1,b1,5)
  translate(c/2,c/2);
  fill(255-r1,255-g1,255-b1)
  text("n_"+round(nf2,4)+'_'+round(nf,4)+'_'+tmr,-c/2+30,c/2-30)
  noFill()
  ra=width/3*abs(cos(frameCount/1000))+50
  stroke(255);
  strokeWeight(0.1)
   for(let p=0;p<sp.length;p++){ 
      let n=noise(sp[p].x*nf,sp[p].y*nf)*TWO_PI
      sp[p].add(cos(n*nf2),sin(n*nf2))
      px=constrain(sp[p].x, ra*cos(p/dv),ra*sin(p/dv));
      py=constrain(sp[p].y,ra*cos(p/dv),ra*sin(p/dv) );
		  point(px,py)
  }
  if (frameCount>tmr){
    noLoop()
  }
}

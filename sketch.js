
cx =[]
cy= []
x = 0
y =  0
w =20
h=[]
n = 20
tht = 0
gx = n/2
gy = n/2
b =10
t = 0
brc =0 
nk =4
fl = 0
function preload()
{

mo = loadModel('workermanOBJ.obj')
  ke = loadModel('Key_B_02.obj')
tx =loadImage('images (8).jpeg')
sky = loadImage('OIP.jpg')

}
function setup() {
  createCanvas(800, 800,WEBGL);
cy[0] = 5
cy[1] = 2
cy[2] = 4
cy[3] = 6
cx[0] = 6  
cx[1] = 7
cx[2]  = 12
  cx[3]  = 11
 can = createGraphics(170,230) 
 
  // cx  =4
  for(i = 0;i<n*n;i++)
{
h[i] = noise(i*.009+52)*100
// h[i] = random(100)
}
for(i = 0;i<nk;i++)
 {
 loc = cy[i] + n*cx[i]
 h[loc] = 20*b
 
 }

}

function draw() {
  noStroke()
lights()
  rectMode(CENTER)
 // background(220);
  //cylinder bg
  push()
 // fill(100,100,255) 
  texture(sky)
  cylinder(n*w*2,1500)
  pop
  
//rotateX(PI/2)
  rotateX(274/20)
  rotateY(504/20)
  rotateZ(mouseX/30)
  for(i = 0;i<n;i++)
{
for(j = 0;j<n;j++)
{
loc = j + n*i
 push()
 
  translate(w*(j-n/2),w*(i-n/2),0)
texture(tx)
   // fill(0,255,0)
  box(w,w,h[loc])
pop()
}

}
 //scoreboard
push()
  translate(n*w/1-200.4,n*w/1-200.-700)
  rotateY(PI/2)
  can.textSize(32)
  can.background(225)
  can.text(cx.length + "x🗝️",20,100)
  
  can.text(brc+"x📤",20,130)
  texture(can)
  
  box(170,10,230)
  
  pop()

 // /player
  //rectMode(CENTER)
push()
  loc = y+n*x
 specularMaterial(0,225,0)
  translate(w*(y-n/2),w*(x-n/2),h[loc]*.75+40)
 fill(0,0,255)
  rotateX(PI/2)
rotateY(tht)
  scale(50)
model(mo)
  // box(w,w,50)
pop()
 //ghost
  push()
  loc = gy+n*gx
 translate(w*(gy-n/2),w*(gx-n/2),100)
 fill(0)
  rotateX(PI/2)
scale(50)
model(mo)
  // box(w,w,50)
pop()
  
  
  for(i = 0 ; i<nk  ; i++)
  {
  push()
  lc = cy[i]+n*cx[i]
specularMaterial(250,225,0)
    translate(w*(cy[i]-n/2),w*(cx[i]-n/2),h[lc]*.75+20)
 fill(255,215,0)
//console.log(h[lc]*.75)
rotateZ(t)
  t = t+.2

   // cylinder(w,b)

    rotateY(PI/2)
    scale(7)
    model(ke)
    pop()

  }
gx = gx + random(-1,1)
gy = gy + random(-1,1)
if(gx>n )
{
gx=gx-n
}
  if(gx<0)
  {gx = gx+n
  }

  if(gy<0)
  {gy = gy+n
  
  }
if(gy>n)
{
gy=gy-n
}
  
for(i = 0 ; i<nk;i++)
{
if(cx[i] == x && cy[i] == y)
{
for ( j = i ;j <nk-1; j++)
{


cx[i]=cx[i+1]
  cy[i] = cy[i+1]

}  
fl  =1

}


}
  
if(fl  ==1)
{
nk = nk-1
fl = 0
}
  
if (gx ==x && gy ==y)
{

brc = 0
}
  //console.log(mouseX +" "+ mouseY)
x =x%n
  y = y%n
}


function keyPressed()
{
  loc = y + n*x
if(keyCode === UP_ARROW && h[y +n*(x+1)] - h[loc] <4*b )
{x++
 //console.log("asdf")
tht = PI
}
  if(keyCode === DOWN_ARROW && h[y +n*(x-1)] - h[loc] <4*b)
{ x--

tht = 0
}
 if(keyCode === RIGHT_ARROW && h[y-1 +n*(x)] - h[loc] <4*b)
 { y--
tht = 3*(PI/2)
 } 
 if(keyCode === LEFT_ARROW && h[y+1 +n*(x)] - h[loc] <4*b)
 {y++
 tht = PI/2
 }
   if(keyCode === ENTER && brc>0)
 {h[y+x*n]+=b
 brc--
 }
   if(keyCode === BACKSPACE )
 {h[y+x*n]-=b
 brc++
 }

}

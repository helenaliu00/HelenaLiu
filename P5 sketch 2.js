//New//

var img, capture;
function preload (){
img=loadImage("Images/Cat_Element.png");
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  //background (0, 0, 255);
  imageMode(CENTER);
capture=createCapture(VIDEO);
capture.size(width,height);
capture.hide();
}


function draw() {
  let rx=random(width);
  let ry=random(height);
  let circlewidth=random(4,30);
  //if (mouseIsPressed){
    //image(capture, width/2, height/2, width, height);
  let c=img.get(rx,ry);
  fill(c);
  noStroke();
  circle(rx,ry, circlewidth);
    //else{
//image (capture, width/2, height/2,);}
//filter(POSTERIZE,2);
}

var counter;
let x, y, x0, y0, firstPress = 1;

function setup() {
createCanvas(windowWidth, windowHeight);
background(255,200,255);
counter=0;
  
  stroke('purple');
  strokeWeight(5);
  point(400, 100);
  point(350, 150);
  point(375, 200);
  point(450, 190);
  //five
  point(375, 190);
  point(375, 220);
  point(450, 220);
  point(390, 270);
  point(390, 220);
  //ten
  point(420, 250);
  point(320, 350);
  point(370, 370);
  point(360, 400);
  point(390, 415);
  //fifteen
  point(450, 430);
  point(390, 445);
  point(370, 470);
  point(390, 490);
  point(390, 540);
  //twenty
  point(650, 510);
  point(700, 375);
  point(730, 390);
  point(775, 300);
  point(750, 220);
  //twenty-five
  point(700, 260);
  point(700, 300);
  point(740, 260);
  point(735, 340);
  point(650, 325);
  //thirty
  point(650, 150);
  point(600, 80);
  point(300, 110);
  point(300, 200);
  point(250, 110);
  //thirty-five
  point(250, 50);
  point(600, 20);
  point(800, 50);
  point(875, 200);
  point(850, 400);
  //fourty
  point(875, 475);
  point(825, 450);
  point(800, 500);
  point(775, 475);
  point(775, 600);
  point(500, 600);
  point(500, 530);


textSize(15);
stroke(0);
strokeWeight(0);
text('1', 405, 105);
text('2', 355, 155);
text('3', 380, 205);
text('4', 455, 195);
text('5', 380, 195);
text('6', 380, 225);
text('7', 450, 220);
text('8', 390, 270);
text('9', 390, 220);
text('10', 420, 250);
text('11', 320, 350);
text('12', 370, 370);
text('13', 360, 400);
text('14', 390, 415);
text('15', 450, 430);
text('16', 390, 445);
text('17', 370, 470);
text('18', 390, 490);
text('19', 390, 540);
text('20', 650, 510);
text('21', 700, 375);
text('22', 730, 390);
text('23', 775, 300);
text('24', 750, 220);
text('25', 700, 260);
text('26', 700, 300);
text('27', 740, 260);
text('28', 735, 340);
text('29', 650, 325);
text('30', 650, 150);
text('31', 600, 80);
text('32', 300, 110);
text('33', 300, 200);
text('34', 250, 110);
text('35', 250, 50);
text('36', 600, 20);
text('37', 800, 50);
text('38', 875, 200);
text('39', 850, 400);
text('40', 875, 475);
text('41', 825, 450);
text('42', 800, 500);
text('43', 775, 475);
text('44', 775, 600);
text('45', 500, 600);
text('46', 500, 530);



textSize(15);
fill(255);
stroke(0);
strokeWeight(5);
text('Click on the numbers to draw.', 20, 50);
text('Cntrl + Z to undo.', 20, 75);
}

function draw() {
 strokeWeight(2);
 
  if (mouseIsPressed && firstPress == 1) {
    firstPress = 0;
    x0 = mouseX;
    y0 = mouseY;
    point(x0, y0);
  }
  if (mouseIsPressed && firstPress == 0) {
    x = mouseX;
    y = mouseY;
    point(x, y);
    line(x0, y0, x, y);
    x0 = x;
    y0 = y;
  }
}


function keyPressed(e) {
  // check if the event parameter (e) has Z (keycode 90) and ctrl or cmnd
  if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
    undoToPreviousState();
  }
}

function undoToPreviousState() {
  // if previousState doesn't exist ie is null
  // return without doing anything
  if (!previousState) {
    return;
  }
  // else draw the background (in this case white)
  // and draw the previous state
  background(255);
  image(previousState, 0, 0);
  // then set previous state to null
  previousState = null;
}

function mousePressed() {
  // the moment input is detect save the state
  saveState();
}

function saveState() {
  // save state by taking image of background
  // for more info look at reference for get
  previousState = get();
}
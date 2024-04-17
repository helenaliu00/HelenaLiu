var storageData = [30.5, 457, 12.95, 13.66, 0.54, 7.32];
var colors = ["red", "green", "blue", "yellow", "purple"];
var storageNames = ["A", "B", "C", "D", "E"];
var total;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw () {
  let lastPiece = 0;

  total = getTotal();
  console.log(total);

  for (let i = 0; i < storageData.length; i++) {
let randColor = color(random(255), random(255), random(255));
fill(randColor);
let piece = map(storageData[i], 0, total, 0, TWO_PI);
arc(width/2, height/2, 300, 300, lastPiece, lastPiece + piece);
lastPiece += piece;
}}

function getTotal () {
  let total = 0;
  for (let i = 0; i < storageData.length; i++) {
    total += storageData[i];
  }
  return total;
}

function drawLabel() {
  for (let i = 0; i < storageData.length; i++) {
fill (0);
textSize (100);
text (storageNames[i], 100 + i * 100, 100);

  }
}

  // function draw() {
  //   for (let i = 0; i< storageData.length; i++) {
  //    let randColor=color(random(255), random(255), random(255));
  //    fill (colors[i]); 
  //    circle(100 + i * 100, 100, storageData[i] * 0.2);
  //    fill (0); 
  //  }}

      //   let piece = map(storageData[i], 0, total, 0, TWO_PI)
  //   arc(
  //     width/2,
  //     height/2,
  //     300,
  //     300,
  //     lastPiece,
  //     lastPiece + radians(storageData[i])
  //   );
  //   lastPiece += radians(storageData[i]);
  // }
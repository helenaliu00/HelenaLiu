var rainbow;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255, 80, 100);
    rainbow = color(255, 255, 0); // Sets starting color as yellow
}

function draw() {
    background(rainbow); // Use the color object for background color
    strokeWeight(5);
    fill(255, 0, 0);
    circle(mouseX, mouseY, 100);
    line(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
    rainbow = color(random(256), random(0, 200), random(256)); // Assign a random color on mouse press
}

var hours, minutes, seconds;
var hAngle, mAngle, sAngle;
var hHand, mHand, sHand;
var scl;
var time;
var bg, backg;

function setup() {
  createCanvas(windowWidth, windowHeight)
  scl = windowHeight/500
  angleMode(DEGREES)

  darkMode();
}

function draw() {
  background(bg)
  translate(width/2, height/2)

  hours = hour();
  minutes = minute();
  seconds = second();

  hAngle = map(hours, 0, 12, -90, 270)
  mAngle = map(minutes, 0, 60, -90, 270)
  sAngle = map(seconds, 0, 60, -90, 270)
  //text(sAngle, 200, 200)

  push()
  noFill();
  stroke("blue")
  strokeWeight(9)
  arc(0, 0, 350*scl, 350*scl, -90, sAngle)
  rotate(sAngle + 90)
  sHand = line(0, 0, 0, -155 * scl)
  pop();



  push()
  noFill();
  stroke("#47f707");
  strokeWeight(10);
  arc(0, 0, 365*scl, 365*scl, -90, mAngle)
  rotate(mAngle + 90)
  mHand = line(0, 0, 0, -140 * scl)
  pop();


  push()
  noFill();
  stroke("red");
  strokeWeight(11);
  arc(0, 0, 381*scl, 381*scl, -90, hAngle)
  rotate(hAngle + 90)
  hHand = line(0, 0, 0, -125 * scl)
  pop();
  

  console.log("Time: " + hours + ": " + minutes + ": " + seconds)
  console.log(hAngle)
}

async function darkMode() {

  time = hour();

  if(time > 19)
    bg = "black"
  else
    bg = "white"

}
new p5();

function setup() {
  createCanvas(600, 600);

  noStroke();
}

var colors = [
  color(random(0, 255), random(0, 255), random(0, 255)),
  color(random(0, 255), random(0, 255), random(0, 255)),
  color(random(0, 255), random(0, 255), random(0, 255)),
  color(random(0, 255), random(0, 255), random(0, 255)),
  color(random(0, 255), random(0, 255), random(0, 255)),
  color(random(0, 255), random(0, 255), random(0, 255))
];

// position of the cars
var x = 10;
var y = 600;

var leftX = 150;
var rightX = 200;

var xPositions = [100];
var yPositions = [0];

var xSunrise = 10;
var ySunrise = 300;

for (var j = 0; j < 15; j++) {
  xPositions.push(random(0, 600));
  yPositions.push(random(0, 600));
}

xStar = [10];
yStar = [5];
for (var s = 0; s < 7; s++) {
  xStar.push(random(0, 600));
  yStar.push(random(0, 100));
}

draw = function() {
  background(137, 232, 245);

  // sunrise
  fill(230, 250, 0);
  ellipse(xSunrise + 10, ySunrise - 10, 60, 60);
  xSunrise += 0.8;
  ySunrise--;
  if (xSunrise > 220) {
    xSunrise++;
    ySunrise += 1.5;
    if (xSunrise > 600) {
      background(9, 78, 99); // night sky
      textSize(30);
      fill(247, 245, 123);
      for (var star = 0; star < 300; star++) {
        text("*", xStar[star], yStar[star], 100, 100); //stars
      }
    }
  }
  // clouds
  fill(255, 255, 255);
  // left cloud
  ellipse(leftX, 150, 126, 97);
  ellipse(leftX + 62, 150, 70, 60);
  ellipse(leftX - 62, 150, 70, 60);

  // left cloud
  ellipse(leftX + 250, 50, 126, 97);
  ellipse(leftX + 312, 50, 70, 60);
  ellipse(leftX + 182, 50, 70, 60);

  // right cloud
  ellipse(rightX, 100, 126, 97);
  ellipse(rightX + 62, 100, 70, 60);
  ellipse(rightX - 62, 100, 70, 60);

  leftX--;
  rightX++;

  // buildings
  //strokeWeight(33);
  var Building = function(xPos1, yPos1, xPos2, yPos2, xPos3, yPos3) {
    this.xPos1 = xPos1;
    this.yPos1 = yPos1;
    this.xPos2 = xPos2;
    this.yPos2 = yPos2;
    this.xPos3 = xPos3;
    this.yPos3 = yPos3;
  };

  var drawBuilding = function(building) {
    fill(colors[0]);

    rect(building.xPos1 - 140, building.yPos1 - 50, 130, 280);
    fill(112, 200, 235);
    rect(building.xPos1 - 130, building.yPos1 - 40, 110, 20); //window for rectangle
    rect(building.xPos1 - 130, building.yPos1 - 5, 110, 20);
    rect(building.xPos1 - 130, building.yPos1 + 30, 110, 20);
    fill(colors[1]);
    rect(building.xPos1, building.yPos1, 130, 280);
    triangle(
      building.xPos1,
      building.yPos1,
      building.xPos2,
      building.yPos2,
      building.xPos3,
      building.yPos3
    ); //roof
    fill(49, 139, 166);
    rect(building.xPos1 + 10, building.yPos1 + 10, 50, 30); //window for triangle

    rect(building.xPos1 + 10, building.yPos1 + 50, 50, 30);
    rect(building.xPos1 + 70, building.yPos1 + 10, 50, 30);
    rect(building.xPos1 + 70, building.yPos1 + 50, 50, 30);
  };

  var tallBuilding = new Building(230, 170, 295, 100, 360, 170);
  var smallBuilding = new Building(430, 310, 495, 250, 560, 310);

  drawBuilding(tallBuilding);
  var x1 = 0;
  var y1 = 250;
  fill(colors[2]); //hospital
  rect(x1, y1, 80, 200);
  rect(x1 + 80, y1 - 30, 120, 200);
  rect(x1 + 200, y1, 80, 200);

  for (var i = 0; i < 5; i++) {
    for (j = 0; j < 9; j++) {
      fill(238, 255, 0);
      rect(x1 + 10, y1 + 10, 15, 15); // window
      x1 += 30;
    }
    x1 = 0;
    y1 += 30;
  }

  var x2 = 370;
  var y2 = 200;
  fill(colors[3]);
  rect(x2, y2, 130, 250);
  rect(x2 + 20, y2 - 30, 90, 70);
  rect(x2 + 40, y2 - 60, 50, 30);
  fill(171, 237, 236);
  for (var i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      rect(x2 + 10, y2 + 20, 15, 20); // window
      x2 += 30;

      if (i % 2 === 1) {
        fill(171, 237, 236);
      } else {
        fill(238, 255, 0);
      }
    }
    x2 = 370;
    y2 += 30;
  }
  rect(380, 220, 15, 20); // window

  var x3 = 510;
  var y3 = 80;
  fill(colors[4]);

  quad(x3, y3, 600, 150, 600, 400, 510, 400);
  for (var i = 0; i < 6; i++) {
    for (j = 0; j < 3; j++) {
      fill(0, 0, 0);
      rect(x3 + 10, y3 + 90, 15, 30); // window
      x3 += 30;
    }
    x3 = 510;
    y3 += 40;
  }
  drawBuilding(smallBuilding);

  fill(colors[5]);
  rect(350, 330, 120, 250);
  fill(49, 139, 166);
  ellipse(375, 355, 35, 30);
  ellipse(410, 355, 35, 30);
  ellipse(445, 355, 35, 30);
  fill(89, 41, 41);
  rect(395, 375, 40, 50); // door

  // street with white lines
  fill(90, 94, 92);
  rect(0, 400, 600, 300);
  fill(255, 255, 255);

  for (var xLine = 0; xLine < 600; xLine++) {
    rect(xLine, 490, 80, 15);
    xLine += 100;
  }

  // moving car
  // draw the red car body

  fill(255, 0, 115);
  rect(y, 400, 100, 20);
  rect(y + 15, 378, 70, 40);

  // draw the wheels
  fill(77, 66, 66);
  ellipse(y + 25, 421, 24, 24);
  ellipse(y + 75, 421, 24, 24);

  // draw the yellow car body
  fill(24, 89, 167);
  rect(x + 50, 500, 100, 20);
  rect(x + 50, 478, 70, 40);

  // draw the wheels
  fill(77, 66, 66);
  ellipse(x + 75, 521, 24, 24);
  ellipse(x + 120, 521, 24, 24);

  // draw the green car body
  fill(38, 140, 84);
  rect(x - 150, 550, 170, 30);
  rect(x - 60, 500, 70, 60);

  // draw the wheels
  fill(77, 66, 66);
  ellipse(x - 130, 580, 24, 24);
  ellipse(x - 100, 580, 24, 24);
  ellipse(x - 30, 580, 24, 24);
  ellipse(x, 580, 24, 24);

  x = x + 1;
  y -= 1;
  if (x > 750 && y < 0) {
    // draw the red car body
    x = 0;
    y = 600;
  }
  // rain drops
  for (var i = 0; i < xPositions.length && xSunrise > 600; i++) {
    noStroke();
    fill(147, 216, 237);
    ellipse(xPositions[i], yPositions[i], 3, i);
    yPositions[i] += 5;
    if (yPositions[i] > 600) {
      yPositions[i] = 0;
    }
  }
};

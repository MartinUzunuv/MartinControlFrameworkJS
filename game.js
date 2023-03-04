elementType = "button";
color = "blue";
drawPriority = 10;
az = iredrawable(mouseX, mouseY, 100, 100);
az.addEventListener("click", function () {
  // Do something when the button is clicked
  console.log("Button clicked!");
});


function update() {
  changeX(az, mouseX)
  changeY(az, mouseY)
}

updateTime = 10;

drawTime = 1000

//clear = false;

function draw() {
    drawPriority = 200;
    fillRect(getEndX(az)-30, getEndY(az)-30, 20, 20)
    drawPriority = 2;
    color = `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`;
    color = `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`;
    drawPriority = 0;
    elementType = "div";
    drawImage("https://static.javatpoint.com/images/javascript/javascript_logo.png",0, 0, 700, 700);
    color = `rgb(${Math.random() * 255},${Math.random() * 255},${
      Math.random() * 255
    })`;
    drawPriority = 3;
    lineWidth = 20;
    drawLine(100, 100, 200, 130);

    drawPriority = 700;
    drawCircle(500,500,100,300)
}

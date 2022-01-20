function preload()
{

}


function setup()
{
canvas=createCanvas(500,500);
canvas=canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw()
{
fill(0,10,239);
rect(50, 30, 380, 30);
rect(50, 68, 30, 380);
rect(400, 68, 30, 380);
rect(50, 460, 380, 30);

fill(0,234,225);
circle(60,40, 80);
circle(60,450, 80);
circle(410,450, 80);
circle(410,40, 80);

image(video, 140,170, 200,200);


}


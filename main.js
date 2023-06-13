function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("posenet is initialized");
}
function draw()
{
    background('#d5f4f5');
    textSize(difference);
    fill("#04b7d6");

}
function text()
{
    text("Sahiti", 50, 50);
}
function gotPoses(results)
{ 
    if (results.length > 0)
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWrist - rightWrist);
    }
}
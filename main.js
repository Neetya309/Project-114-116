mustacheX = 0
mustacheY = 0
function preload(){
    man_mustache = loadImage('mustache.png')
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPosses);
}
 function draw(){
    image(video, 0, 0, 300, 300);
    image(man_mustache, mustacheX, mustacheY, 30, 30);
    }
function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPosses(results) {
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x-35;
        mustacheY = results[0].pose.nose.y-10;

    }
}

function draw(){
image(video, 0, 0, 300, 300);
image(man_mustache, mustacheX, mustacheY, 75, 50);
}




  function take_snapshot(){
    save("my_picture");
 }
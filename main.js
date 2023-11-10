nose_x=0;
nose_y=0;
function preload(){
mustache_img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(400,180);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("POSEnet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x-6;
        nose_y=results[0].pose.nose.y-3;
        console.log("nose x = " +nose_x);
        console.log("nose y = " +nose_y);
    }
}
function draw(){
image(video,0,0,300,300);
image(mustache_img,nose_x,nose_y,30,30);
}
var nosex=0
var nosey=0

function preload(){
    lip_filter=loadImage("lip_filter.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses)
}

function modelLoaded(){
    console.log("poseNet is initialised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nose x= "+nosex);
        console.log("nose y= "+nosey);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(lip_filter,nosex-20,nosey+20,40,20)
}

function take_snapshot(){
    save("Kpop.png");
}
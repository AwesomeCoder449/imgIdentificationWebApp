Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="snap" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tQTZGajPk/model.json',modelloaded);
function modelloaded(){
    console.log("model has been loaded.");
}
function check(){
    img = document.getElementById('snap');
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("objectResult").innerHTML=results[0].label;
        document.getElementById("accuracyResult").innerHTML=results[0].confidence.toFixed(3);
    }
}
resultado=[];
var navidad="";
var cargando="";

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    cam=createCapture(VIDEO);
    cam.hide();
    analizar=ml5.objectDetector("cocossd",pug_navideño);
    document.getElementById("reconocer").innerHTML="🔎estoy detectando🔍";
}

function pug_navideño(){
    console.log("esta listo");
    cargando="true";
    analizar.detect(cam,Mel_navideño);
}

function Mel_navideño(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    resultado=results;
}

function preload(){
    navidad=loadImage("pug_adelante.png");
}

function draw(){
    image(cam,0,0,500,500);
    if(cargando!=""){
        analizar.detect(cam,Mel_navideño);
        for(var perro_Mel=0;perro_Mel<resultado.length;perro_Mel++){
            fill("#0800FF");
            calculo=floor(resultado[perro_Mel].confidence*100);
            text(resultado[perro_Mel].label+ " "+calculo+"%");
            stroke("#FF0000");
            noFill();
            rect(resultado[perro_Mel].x,resultado[perro_Mel].y,resultado[perro_Mel].width,resultado[perro_Mel].height); 
        }
    }
}
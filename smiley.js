function getcontext(){
let canvas = document.getElementById("smile");
let context = canvas.getContext("2d");
return context;
}
function smileyapp(){

    // Visage
    let context = getcontext("smile");
    context.beginPath();
    context.arc(100,100, 75 ,Math.PI,4*Math.PI);
    context.lineWidth = 5;
    context.fillStyle ="yellow";
    context.strokeStyle = "black";
    context.closePath();
    context.stroke();
    context.fill();

    // Oeil droit
    context.beginPath();
    context.arc(65,70, 10 ,Math.PI,4*Math.PI);
    context.fillStyle ="black";
    context.strokeStyle = "black";
    context.closePath();
    context.stroke();
    context.fill();

    //Oeil gauche 
    context.beginPath();
    context.arc(135,70, 10 ,Math.PI,4*Math.PI);
    context.fillStyle ="black";
    context.strokeStyle = "black";
    context.closePath();
    context.stroke();
    context.fill();

    //Sourire
    context.beginPath();
    context.arc(99,120, 35 ,Math.PI/56,Math.PI);
    context.lineWidth = 6;
    context.fillStyle ="black";
    context.strokeStyle = "black";
    context.closePath();
    context.stroke();

    //Texte
    context.textBaseline= "middle";
    context.textAlign = "center";
    context.font =  "20px sans serif";
    context.fillText("Salut les gens !",105, 200 );
}

function Displatdatetime(){
var Time = new Date();
document.getElementById("time").innerHTML= Time;
}

function Displatdatetime2(){
const event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
Date = event.toLocaleDateString('fr', options);
Time = event.toLocaleTimeString('fr'); 
// On ne met pas options pour avoir juste l'heure
document.getElementById("date").innerHTML= Date;
document.getElementById("time").innerHTML=Time;
}

/*function decrementsecond(second){
    document.time.compte.value=heures+":"+second;
 
  if(second > 0) {
        secondes--;
  } 
        if(second <= 0)
            smileyapp();
        else
          setTimeout("decrementsecond("+secondes+")", 1000);
}*/

Displatdatetime2();
getcontext();
smileyapp();
//decrementsecond(58);

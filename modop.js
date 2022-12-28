
const btnPlay= document.getElementById("btn-play");
const sonido = document.getElementById("sonido");

const btnNext= document.getElementById("btn-next");

btnPlay.addEventListener("click", ejecuto);
btnNext.addEventListener("click", continuar);


let g0 = ['Arise', 'Arose', 'Arisen', 'Surgir'];
let g1 =['Awake', 'Awoke', 'Awoken', 'Despertar'];
let g2 =['Be', 'Was, / Were', 'Been', 'Ser, / Estar'];
let g3 =['Beat', 'Beat', 'Beaten', 'Golpear, / Vencer']
let g4 =['Become', 'Became', 'Become', 'Convertir']
let g5 =['Begin', 'Began', 'Begun', 'Empezar']
let g6 =['Bet', 'Bet', 'Bet', 'Apostar']
let g7 =['Bite', 'Bit', 'Bitten', 'Morder']
let g8 =['Blow', 'Blew', 'Blown', 'Soplar'];
let g9 =['Break', 'Broke', 'Broken', 'Romper, / Quebrar'];
let g10 =['Bring', 'Brought', 'Brought', 'Traer'];
let g11 =['Build', 'Built', 'Built', 'Construir'];
let g12 =['Buy', 'Bought', 'Bought', 'Comprar'];
let g13 =['Catch', 'Caught', 'Caught', 'Agarrar, / Tomar']
let g14 =['Choose', 'Chose', 'Chosen', 'Elegir, / Escoger']
let g15 =['Come', 'Came', 'Come', 'Venir']
let g16 =['Cost', 'Cost', 'Cost', 'Costar']
let g17 =['Cut', 'Cut', 'Cut', 'Cortar']
let g18 =['Dig', 'Dug', 'Dug', 'Cavar, / Excavar']
let g19 =['Do', 'Did', 'Done', 'Hacer']
let g20 =['Draw', 'Drew', 'Drawn', 'Dibujar']
let g21 =['Dream', 'Dreamt', 'Dreamt', 'soñar']
let g22 =['Drink','Drank', 'Drunk', 'Beber']


let numPose;
let numPoseGenerado;

function numPoseG () {
     numPoseGenerado= Math.floor(Math.random() * 22);
     document.getElementById("num-generated").innerHTML = numPoseGenerado
     numPose = numPoseGenerado
     console.log(numPoseGenerado)



//AQUI TEMRMINA ESTA LLAVE

let gruposPalabras = [g0,g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17,g18,g19,g20,g21,g22];
let numeroparaTodosElementos = gruposPalabras[numPose];


let button2 =  document.getElementById("palabra-es") 

document.getElementById("uno-palabra-en").innerHTML = numeroparaTodosElementos[0]; 
document.getElementById("dos-palabra-en").innerHTML = numeroparaTodosElementos[1]; 
document.getElementById("tres-palabra-en").innerHTML = numeroparaTodosElementos[2]; 


    button2.style.visibility = "hidden";
    button2.disabled = true;


    setTimeout(function() {
    button2.disabled = false;
    button2.style.visibility = "visible";
    button2.innerHTML = numeroparaTodosElementos[3]; ;
    }, 4000);


}


    function ejecuto() {
         sonido.src =  `/audiofilesproject/Audio-${numPose}.mp3` 
        sonido.play()
    }

    function continuar() {
        numPoseG()

    }

    




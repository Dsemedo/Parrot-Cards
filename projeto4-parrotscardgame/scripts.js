let todasCartas = ["unicorn", "unicorn", "fiesta", "fiesta", "metal", "metal", "bobross", "bobross", "explody", "explody", "revertit", "revertit", "triplets", "triplets"];
let algumasCartas = [];
let carta1;
let carta2;
let jogadas = 0;
let cartaCerta = 0;

let number = prompt("Qual o numero de cartas que deseja jogar? \nSó vale números pares entre 4 e 14!");

//Usuario escolhe o numero de cartas

function par(number){
    if (Number(number) % 2 == 0){
        return true;
    }
    return false;
}

console.log(par());

function valido (number){
    if (Number(number) >= 4 && Number(number) <= 14){
        return true;
    }
    return false;
}

console.log(valido());

function respostaValida(number){
    return par(number) && valido(number); 
}

console.log(respostaValida());

numeroCartas();

function numeroCartas(){
    while ( number === null || !respostaValida(number)){
        number = prompt("Digite um número par entre 4 e 14, por favor");
    }    
}

embaralharCartas();
//embaralhar as cartas escolhidas pelo usuário 

function embaralharCartas(){
    for (let i = 0; i < number; i++){
        const carta = todasCartas[i];
        algumasCartas.push(carta);
    }
    algumasCartas.sort(comparador);
    adicionarCartas();
}

function comparador() {
    return Math.random() - 0.5;
  }

//

function adicionarCartas(){
    for (let i=0; i < algumasCartas.length; i++){
        document.querySelector(".espaco-cartas").innerHTML += 
        `
        <div class="carta" onclick="virarFront(this)">
            <div class="front-face face">
            <img src="Gifs/front.png" alt="" />
            </div>         

            <div class="back-face face">
            <img src="Gifs/${algumasCartas[i]}parrot.gif" alt="" />
            </div>                     
        </div>` ;
   } 
 }

function virarFront(front){
    const cartaClicada = document.querySelector("carta");
    if (cartaClicada !== null){
        cartaClicada.classList.remove("virar");
    }
    front.classList.add("virar");

    jogadas++;

    if (carta1 === undefined){
        carta1 = front;       
    } else{
        carta2 = front;}

        if(carta1.innerHTML == carta2.innerHTML){
            cartaCerta += 2;
            resetarCartas();
        } else{
            setTimeout(desvirarCartas, 500)
        }

}


function desvirarCartas(){
    carta1.classList.remove("virar");
    carta2.classList.remove("virar");
    resetarCartas();    
}

console.log(desvirarCartas());

function resetarCartas() {
    carta1 = undefined;
    carta2 = undefined;
    finalizarJogo();
}


console.log(resetarCartas());

function finalizarJogo(){
    if(cartaCerta == number){
        setTimeout(alert, 800, `Voce ganhou em ${jogadas} jogadas!!`)
    }
}

console.log(finalizarJogo());
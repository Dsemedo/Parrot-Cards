let number = prompt("Qual o numero de cartas que deseja jogar? \nSó vale números pares entre 4 e 14!");

function par(number){
    if (Number(number) % 2 == 0){
        return true;
    }
    return false;
}

console.log(par(number));

function valido (number){
    if (Number(number) >= 4 && Number(number) <= 14){
        return true;
    }
    return false;
}

console.log(valido(number));

function respostaValida(number){
    return par(number) && valido(number); 
}

console.log(respostaValida());

function numeroCartas(){
    while ( number === null || !respostaValida(number)){
        number = prompt("Digite um número par entre 4 e 14, por favor");
    }    
}

console.log(numeroCartas());

// criarCartas();

// function criarCartas(){
//     for (let i = 0; i < number; i++){
//         document.querySelector(".espaco-cartas").innerHTML += `
//                  <div class="carta">
//                      <div class="front" onclick="apagarFront(this)">
//                      </div>         
//                      <div class="back">
//                      </div>                     
//                  </div>`
//                  ;
//     }
// }

const nomes = ["unicorn", "fiesta", "metal", "bobross", "explody", "revertit", "triplets"]

    for (let i=0; i < number; i++){
         document.querySelector(".espaco-cartas").innerHTML += `
         <div class="carta">
             <div class="front" onclick="apagarFront(this)">
             <img src="Gifs/front.png" alt="" />
             </div>         
             <div class="back">
             <img src="Gifs/${nomes[i]}parrot.gif" alt="" />
             </div>                     
         </div>`
         ;
    }  

function apagarFront(front){
    const cartaClicada = document.querySelector("virar");
    if (cartaClicada !== null){
        cartaClicada.classList.remove("virar");
    }
        front.classList.toggle("virar");
}
/*let titulo = document.querySelector('h1')
titulo.innerHTML = 'Secret number game'

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'choose a number between 1 and 10'
*/

 let lista = [];
 let listaMax = 3
 let numberSecret = gerarNumeroAleatorio();
 let tentavivas = 1;
 console.log(numberSecret);

function addtexto(tag, texto){
    let conteudo = document.querySelector(`${tag}`)
    conteudo.innerHTML = texto
}

function mensagemInicial(){
    addtexto('h1', 'Secret number game')
    addtexto('p', 'choose a number between 1 and 10') 
}
mensagemInicial();


function verificarChute(){
    let nchute = document.querySelector('input').value;
   
    
    if (nchute == numberSecret){
        let palavraT = tentavivas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `2VENCEU!! você acertou o numero secreto é ${numberSecret}, e o numero de ${palavraT} foi ${tentavivas}`;

        addtexto('p', mensagem)
        
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpacampo()
    }
    else if (nchute < numberSecret){
        addtexto('p', 'Quase! Você quase acertou, o número é maior que isso.')
    }
    else {
       
        addtexto('p', 'opa, o número é menor que esse')

    }

    tentavivas++
    limpacampo()
}

function gerarNumeroAleatorio(){
let numeroGerado = Math.floor(Math.random() * listaMax) + 1
let tamanhoLista = lista.length;

  if(tamanhoLista == listaMax){
    lista = []
  }

  if (lista.includes(numeroGerado)){
    return gerarNumeroAleatorio();
  }
  else{
    lista.push(numeroGerado)
    console.log(lista);
    return numeroGerado
  }


}

function limpacampo(){
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarGame(){

    numberSecret = gerarNumeroAleatorio();
    limpacampo();
    tentavivas = 1
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
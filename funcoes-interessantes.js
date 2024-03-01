//1.
function palindromo (palavra) {
    //método que separa cada letra da palavra.
    let palavraSeparada = palavra.split('');
    //método que inverte cada letra da palavra.
    let palavraInvertida = palavraSeparada.reverse('');
    //método que junta cada letra da palavra.
    let palavraInvertidaJunta = palavraInvertida.join('');

    if (palavra == palavraInvertidaJunta) {
        console.log(`A palavra ${palavra} é um palíndromo`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }
}

//2.
//função já pronta que organiza de forma crescente os números de um array.
function organizarNumeros (a,b,c) {
    let numerosOrdenados = [a,b,c].sort((x,y) => x - y); //y - x para ordem decrescente.
    console.log(`Os números ordenados são ${numerosOrdenados.join(', ')}.`); 
}

//3.
var minhaLista = [];
//Coloca elementos numa array.
minhaLista.push(1,2,3);
var outraLista = [4,5,6];
//concatena uma array na outra.
var novaLista = minhaLista.concat(outraLista);
//tira o último elemento de uma array.
novaLista.pop();
//função já pronta que embaralha os elementos de uma array.
function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        let indiceAleatorio = Math.floor(Math.random() * indice);
        //guarda de um índice aleatório da lista.
        let elemento = lista[indice - 1];
        lista[indice - 1] = lista[indiceAleatorio];
        lista[indiceAleatorio] = elemento;
    }
}
//função que exclui elementos duplicados de uma lista.
novaLista.push(1,2,3,4,5);
function removerDuplicatas(lista) {
    return [...new Set(lista)];
}
//tem que ser guardada em uma nova variável.
let listaSemDuplicatas = removerDuplicatas(novaLista);

//4.
function calcularFatorial(numero) {
    //Se o número for 0 ou 1, o resultado é sempre 1.
    if (numero === 0 || numero === 1) {
      return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial = fatorial * i;
    }
    return fatorial;
}



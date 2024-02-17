function palindromo (palavra) {
    let palavraSeparada = palavra.split('');
    let palavraInvertida = palavraSeparada.reverse('');
    let palavraInvertidaJunta = palavraInvertida.join('');

    if (palavra == palavraInvertidaJunta) {
        console.log(`A palavra ${palavra} é um palíndromo`);
    } else {
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }
}

function organizarNumeros (a,b,c) {
    let numerosOrdenados = [a,b,c].sort((x,y) => x - y);
    console.log(`Os números ordenados são ${numerosOrdenados.join(', ')}.`); 
}
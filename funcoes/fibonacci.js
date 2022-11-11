function fibonacci(quantidade_termos){
    //let quantidade_termos = prompt('Informe o número de termos da seqência: ')
    let a = 0;
    let b = 1;
    let sucessor;

    if (quantidade_termos <= 0) {
        return [];
    } else if (quantidade_termos == 1) {
        return [0];
    } else if(quantidade_termos == 2) {
        return [0, 1]
    }

    resultado = [0, 1]

    for(let i = 2; i < quantidade_termos; i++){
      sucessor = a + b
      a = b
      b = sucessor
      resultado.push(sucessor);
    }

return resultado

}

module.exports = fibonacci;
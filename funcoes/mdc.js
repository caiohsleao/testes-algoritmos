function mdc(primeiro, segundo){
    //let x = prompt('Digite o primeiro valor: ');
    //let y = prompt('Digite o segundo valor: ');

    for(let i = primeiro; i>0; i--){
        if(primeiro%i == 0 && segundo%i == 0){
            return 'O MDC entre o número ' + primeiro + ' e o número ' + segundo + ' é ' + i;
            break;

        }
    }
}

module.exports = mdc;
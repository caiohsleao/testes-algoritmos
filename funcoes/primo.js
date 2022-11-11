function primo(n){

    //let n = parseInt(prompt("Informe um número: "));
    let divisores = 0;
    for(i = 1; i <= n; i++) {
         if(n%i == 0) {
             divisores++;
         }
    }

    if (divisores == 2) {
        return "O número informado é primo!"
    } else {
        return "O número informado não é primo!"
    }
}

module.exports = primo;
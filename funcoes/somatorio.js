function somatorio(conjunto){
  let soma = 0;
  
  for(i = 0; i < conjunto.length; i ++){
    soma = parseInt(conjunto[i]) + soma;
  
  }
  return soma;
  }
  module.exports = somatorio;
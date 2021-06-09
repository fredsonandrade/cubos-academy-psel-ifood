function solucao(precos) {
    //seu codigo aqui
    let menorValor = precos[0];
    let valor = 0;
    let tamanho = 0;
    for(let item of precos){
       valor = valor + item;
       tamanho++;
       if(item < menorValor){
          menorValor = item;
       }
    } 
    if(tamanho >= 5){    
        console.log(valor - menorValor);
    } else {
        console.log(valor);
    }
    
}
function solucao(letra, palavras) {
	//seu codigo aqui
    let contador = 0;
    for(let item of palavras){
        if(item[0] !== letra){
           contador = contador + 1;
        }
    }
    console.log(contador);
}
function solucao(produtos) {
	//seu codigo aqui
    const result = {
        totalTop: 0,
        percentual: 0
    }
    let valorTotal = 0;
    for(let item of produtos){
        valorTotal += item.preco;
        if(item.preco > 10000){
            result.totalTop += item.preco;
        }
    }
    result.percentual = result.totalTop / valorTotal;
    console.log(result);
    
}
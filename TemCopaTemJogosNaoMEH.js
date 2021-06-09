function solucao(ano) {
	//seu codigo aqui
    let result = ano - 2021;
    if(ano < 2021){
       console.log("DADO INVALIDO");
    }else if(result % 2 == 0){
       console.log("MEH"); 
    }else if((result + 1) % 4 == 0){
        console.log("JOGOS");
    }else{
        console.log("COPA");
    }
    
}
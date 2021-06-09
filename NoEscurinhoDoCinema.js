function solucao(obj) {
	//seu codigo aqui
    
    if(obj.idade < obj.censura && obj.estaComPais == false || obj.temIngresso == false){
       console.log("ACESSO NEGADO");
    } else if(obj.idade < 18 || obj.temCarteirinha == true){
       console.log("MEIA");       
    } else {
        console.log("INTEIRA");
    }
    
}
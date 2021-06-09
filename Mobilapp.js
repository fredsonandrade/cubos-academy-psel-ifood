function solucao(tempo, distancia) {
	//seu codigo aqui
    
    if(tempo < 5){
       console.log(600);
    }else if(tempo <= 60){
       console.log((tempo + distancia/2)*100);      
    }else if(distancia < 100){
       console.log(distancia * 200);      
    }else{
       console.log(distancia * 150); 
    }

}
function solucao(largura, altura) {
    //seu codigo aqui
    
      if(largura <= 0 || altura <= 0){
         console.log("DADO INVALIDO");
      } else if(largura < altura){
         console.log("RETRATO");       
      } else if(altura < largura){
         console.log("PAISAGEM"); 
      } else {
          console.log("QUADRADA");
      }
      
}
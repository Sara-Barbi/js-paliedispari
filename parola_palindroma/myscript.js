//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma.

let parola = prompt("inserisci una parola palindroma!");
let parolaDivisa = parola.split('');

let alContrario=[];







    for(i=0; i<parolaDivisa.length; i++){

      //  console.log(parolaDivisa[i]);
    }

    for(index=parolaDivisa.length; index>0; index--){
        
      //  console.log(parolaDivisa[index -1]);

        alContrario.push(parolaDivisa[index -1]);
    }

    console.log(parolaDivisa, alContrario);

    if(parolaDivisa==alContrario){
        document.writeln("parola palindroma")
    }else{
        document.writeln("parola NON palindroma")

    }










  


  



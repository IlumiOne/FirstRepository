function novaData(){
        let oData = new Date();
        let dia   = String(oData.getDate()).padStart(2,'0');
        let mes   = String(oData.getMonth()+1).padStart(2,'0');
        let ano   = String(oData.getFullYear());

        let data  = document.getElementById('sup');
        data.innerHTML = (dia+`/`+mes+`/`+ano);
}

function sorteioDia(){
        let min = 1;
        let max = 31;
        let aleatorio = Math.random();
        let aleatorio2 = Math.random();
        let sorteioDia   = min + Math.trunc(max * aleatorio);
        let sorteioDia2   = min + Math.trunc(max * aleatorio2);

        let saidaDia = document.getElementById('saidaDia');
        let saidaDia2 = document.getElementById('saidaDia2');
        saidaDia.innerHTML = sorteioDia;
        saidaDia2.innerHTML = sorteioDia2;
        
}

function sorteioMes(){
        saidaMes = document.getElementById('saidaMes');
        let meses = ["Janeiro","Fevereiro","Marco","Abril","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
        let sorteioMes = meses[Math.floor(Math.random() * meses.length )]
        saidaMes.innerHTML = sorteioMes;
        
}
         /*Se liga na dificuldade pra colocar uma data decente(mm/dd/aaaa) !!! 😣😣*/
        /*data real*/
       /*padStart() = caracter a esquerda,no caso, um zero a esquerda*/
      /*L4 = em JS os meses sao cont. de 0-11*/
     /*Math.random = numero aletorio de 0 a 1*/
    /*Math.trunc = parte fracionária truncada|cortada */
   /*L25 = o sorteio acontece dentro do array meses, por isso deve ser colocado como mese[aqui o sorteio] 😁*/
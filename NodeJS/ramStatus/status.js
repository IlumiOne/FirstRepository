// NODE = JS Runtime Enviroment = Hambiente de execucão Java Script
// JS -> Ñ executa na maquina e sim no navegador(no chrome, a partir do motor V8)
// NODE -> Usa o a ferramenta de compilacão V8 para executar o código na maquina.
// Facilitando o desenvolvimento back-end ou full-stack 
// ex.: NETFLIX, PAYPAL,

//setInterval() = funcao,primeiro paramentro é a minha funcao, e o segundo, um intervalo(em milessegundos) para o loop da funcao do primeiro parametro
setInterval(()=>{
    let os = require('os'); 
    // NODE usa o comando require para importar modulos
    //(neste caso, modulos do sistema operacional)
    let {freemem, totalmem} = os;
    /*
    L10 = a mesma coisa que: 
    let freemen(memoria livre) = os.freemen;
    let totalmen(memoria total) = os.totalmen;
    */ 
    freemem = parseInt(freemem()/1024/1024);
    totalmem = parseInt(totalmem()/1024/1024);
    let porcent = parseInt((freemem/totalmem)*100);
    //freemen é apresentado como forma de bytes,divide-se                                      
    //por 1024 para kilobytes e depois para megabytes 
    let status = {
        livre: `${freemem} MB`,
        total: `${totalmem} MB`,
        usada: `${porcent}%`,
    }
    console.clear();
    console.log("=========== MEMORIA PRINCIPAL ============")
    console.table(status);
    // console.table = "Quem precisa de HTML 😋" 
},1000)






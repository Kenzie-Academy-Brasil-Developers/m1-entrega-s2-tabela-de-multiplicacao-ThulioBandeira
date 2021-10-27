function add(a,b){
    return a + b;
}
function multiply(a,b){
    let soma = 0;
    for(let i =1; i<b;i++){
        soma=add(soma,a)
    }
    return soma;
}

function tabelaMultiplicação() { 
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x = [];
    for (let i = 1; i < 12; i++) {
        x[i] = [];
        for(let c = 0; c<11; c++){
            x[i].push(multiply(c,i))

        }
    }
    console.table(x)
}
function tabelaMultiplicaçãoBonus(num) { 
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x = [];
    for (let i = 0; i <= 10; i++) {
        x[i] = [];
        for(let c = 0; c<=num; c++){
            x[i].push(multiply(c,i))

        }
    }
    console.table(x)
}
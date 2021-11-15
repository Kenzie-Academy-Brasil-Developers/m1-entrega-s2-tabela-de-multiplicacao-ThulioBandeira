function tabelaMultiplicação() { 
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x = [];
    for (let i = 0; i <= 10; i++) {
        x[i] = [];
        for(let c = 0; c<=10; c++){
            x[i][c] = i*c

        }
    }
    console.table(x)
}
function tabelaMultiplicaçãoBonus(num) { 
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    let x = [];
    for (let i = 0; i <= num; i++) {
        x[i] = [];
        for(let c = 0; c<=num; c++){
            x[i][c] = i*c

        }
    }
    console.table(x)
}
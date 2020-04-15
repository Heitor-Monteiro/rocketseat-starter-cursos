// Operações com Array *****************************************

const arr = [1, 3, 4, 5, 8, 10];


export function exemplo01() {
    // Exemplo de utilização do map para percorrer vetores
    // , e manipular cada item.

    const newArr = arr.map(function (item, index) {
        return item + index;
    });
    console.log(newArr);
}

export function exemplo02() {
    // Exemplo da utilzação de reduce
    // Obs.: O reduce é um recurso para consumir todos os itens de um vetor
    // , e transforma-lá numa única informação.

    const sum = arr.reduce(function (total, next) {
        return total + next;
    });
    console.log(sum);
}

export function exemplo03() {
    // Utilização de filter
    const filter = arr.filter(function (item) {
        return item % 2 === 0;
    });
    console.log(filter);
}

export function exemplo04() {
    // O find é utilizado quando deseja-se encontrar,
    // ou verificar uma informação no array.
    const find = arr.find(function (item) {
        return item === 4;
    });
    console.log(find);
}
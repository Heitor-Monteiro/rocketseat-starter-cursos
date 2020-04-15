// Arrow Functions **************************************
const arr = [1, 3, 4, 5, 6];

// Obs.: A arrow functions dispensa a declaração function.
// Obs.: Caso a arrow functions receba apenas um único parâmetro,
// não é necessário utilizar parênteses.

export function exemplo01() {
    const newArr = arr.map(item => {
        return item * 2;
    });
    console.log(newArr);
}

export function exemplo02() {
    const newArr2 = arr.map(item => item + 2);
    console.log(newArr2);
}

export function exemplo03() {
    const teste = () => {
        return 'teste';
    }
    console.log(teste());
}

export function exemplo04() {
    const teste2 = () => [1, 2, 3];
    const teste3 = () => 'teste';
    const teste4 = () => 3;
    console.log(teste2());
    console.log(teste3());
    console.log(teste4());

    // Obs.: para retornar objeto.
    const teste5 = () => ({ nome: 'Beltrano' });
    console.log(teste5());
}










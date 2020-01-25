"use strict";

// Arrow Functions **************************************
var arr = [1, 3, 4, 5, 6]; // Obs.: A arrow functions dispensa a declaração function.
// Obs.: Caso a arrow functions receba apenas um único parâmetro,
// não é necessário utilizar parênteses.
// Exemplo 1 -----------------------------------

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // Exemplo 2 -----------------------------------

var newArr2 = arr.map(function (item) {
  return item + 2;
});
console.log(newArr2); // Exemplo 3 -----------------------------------

var teste = function teste() {
  return 'teste';
};

console.log(teste()); // Exemplo 4 -----------------------------------

var teste2 = function teste2() {
  return [1, 2, 3];
};

var teste3 = function teste3() {
  return 'teste';
};

var teste4 = function teste4() {
  return 3;
};

console.log(teste2());
console.log(teste3());
console.log(teste4()); // Obs.: para retornar objeto.

var teste5 = function teste5() {
  return {
    nome: 'Beltrano'
  };
};

console.log(teste5());
/**
// Operações com Array *****************************************

const arr = [1, 3, 4, 5, 8, 10];

// Exemplo de utilização do map para percorrer vetores
// , e manipular cada item.
// Exemplo 1 -----------------------------------------

const newArr = arr.map(function (item, index) {
    return item + index;
});
console.log(newArr);

// Exemplo da utilzação de reduce
// Obs.: O reduce é um recurso para consumir todos os itens de um vetor
// , e transforma-lá numa única informação.
// Exemplo 2------------------------------------------
const sum = arr.reduce(function (total, next) {
    return total + next;
});
console.log(sum);

// Utilização de filter
// Exemplo 3 -----------------------------------------
const filter = arr.filter(function (item) {
    return item % 2 === 0;
});
console.log(filter);

// O find é utilizado quando deseja-se encontrar,
// ou verificar uma informação no array.
// Exemplo 4 -----------------------------------------
const find = arr.find(function (item) {
    return item === 4;
});
console.log(find);
*/

/** Exemplo de const e let ************************************************
 *
 * Exemplo 1:
// Obs.: uma const não pode ter o seu valor reatribuido
// , ou seja, são variáveis que só podem ser lidas.
const a = 1;

// Obs.: Objetos declarados como const
// , permitem que os seus atributos sejam alterados.
// Obs.: O nome deste exemplo é denominado Mutação.
const usuario = { nome: 'Beltrano' };
usuario.nome = 'Sicrano';
console.log(usuario);


// Exemplo sobre variáveis de escopo. ****************************************
// Exemplo 2 -----------------------
function teste(x) {
    let y = 2;

    if (x > 5) {
        console.log(x, y);
    }
}
teste(10);
*/

/** Exemplo de classes no JavaScript ******************************************
 * Exemplo 1----------------------------
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Fulano';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo 2');
}

MinhaLista.mostraUsuario();


* Exemplo 2----------------------------
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));
*/

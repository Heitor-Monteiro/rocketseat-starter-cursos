


























// Object Short Syntax **************************************
/*
const nome = 'Fulano Souza';
const idade = 44;
const usuario = {
    nome,
    idade,
    empresa: 'Rocketseat',
};
console.log(usuario);
*/


// Template LiteralsConceitos ****************************************8
/*
const nome = "Beltrano Monteiro Silva";
const idade = 29;
// console.log('1: Meu nome é ' + nome + ' e tenho ' + idade + ' anos.');
console.log(`2: Meu nome é ${nome} e tenho ${idade} anos.`);
*/


// Operadores rest/spread ***********************************************
// REST
/* Exemplo 1------------------------------------------
const usuario = {
    nome: 'Sicrano Monteiro',
    idade: 22,
    empresa: 'FicticiaLTDA'
};

const { nome, ...resto } = usuario;
console.log(nome);
console.log(resto);
*/

// Exemplo 2 ------------------------------------------
/**
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;
console.log(a);
console.log(b);
console.log(c);
*/

// Exemplo 3 ------------------------------------------
/*
function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 3, 4));
*/

// SPREAD
// Exemplo 4 ------------------------------------------
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
*/

// Exemplo 5 ------------------------------------------
/*
const usuario1 = {
    nome: 'Fulano Reis',
    idade: 33,
    empresa: 'Teste Empresa',
};

const usuario2 = { ...usuario1, nome: 'Beltrano Moraes' };
console.log(usuario2);
*/


/*
// Desestruturação ***************************************
const usuario = {
    nome: 'Beltrano Silva',
    idade: 30,
    endereco: {
        cidade: 'Belém',
        estado: 'PA',
    },
};

// Exemplo 1 -----------------------------------------
//const { nome, idade, endereco: { cidade } } = usuario;
//console.log(nome, idade, cidade);

// Exemplo 2 -----------------------------------------
// function mostraNome({ nome, idade }) {
//     console.log(nome, idade);
// }
// mostraNome(usuario);
*/


/*
// Valores padrão *******************************************
function soma(a = 3, b = 6) {
    return a + b;
}
console.log(soma(1));
console.log(soma());
*/


/*
// Arrow Functions **************************************
const arr = [1, 3, 4, 5, 6];

// Obs.: A arrow functions dispensa a declaração function.
// Obs.: Caso a arrow functions receba apenas um único parâmetro,
// não é necessário utilizar parênteses.
// Exemplo 1 -----------------------------------
const newArr = arr.map(item => {
    return item * 2;
});
console.log(newArr);

// Exemplo 2 -----------------------------------
const newArr2 = arr.map(item => item + 2);
console.log(newArr2);

// Exemplo 3 -----------------------------------
const teste = () => {
    return 'teste';
}
console.log(teste());

// Exemplo 4 -----------------------------------
const teste2 = () => [1, 2, 3];
const teste3 = () => 'teste';
const teste4 = () => 3;
console.log(teste2());
console.log(teste3());
console.log(teste4());

// Obs.: para retornar objeto.
const teste5 = () => ({ nome: 'Beltrano' });
console.log(teste5());
*/


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
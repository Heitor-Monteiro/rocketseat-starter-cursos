// Operadores rest/spread ***********************************************


// REST -----------------------------------------------------------------
export function exemplo01() {
    const usuario = {
        nome: 'Sicrano Monteiro',
        idade: 22,
        empresa: 'FicticiaLTDA'
    };

    const { nome, ...resto } = usuario;
    console.log(nome);
    console.log(resto);
}

export function exemplo02() {
    const arr = [1, 2, 3, 4];
    const [a, b, ...c] = arr;
    console.log(a);
    console.log(b);
    console.log(c);
}

export function exemplo03() {
    function soma(...params) {
        return params.reduce((total, next) => total + next);
    }
    console.log(soma(1, 3, 4));
}

// SPREAD ---------------------------------------------------------------

export function exemplo04() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);
}

export function exemplo05() {
    const usuario1 = {
        nome: 'Fulano Reis',
        idade: 33,
        empresa: 'Teste Empresa',
    };

    const usuario2 = { ...usuario1, nome: 'Beltrano Moraes' };
    console.log(usuario2);
}
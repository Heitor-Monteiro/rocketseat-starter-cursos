// Desestruturação ***************************************
const usuario = {
    nome: 'Beltrano Silva',
    idade: 30,
    endereco: {
        cidade: 'Belém',
        estado: 'PA',
    },
};

export function exemplo01() {
    const { nome, idade, endereco: { cidade } } = usuario;
    console.log(nome, idade, cidade);
}

export function exemplo02() {
    function mostraNome({ nome, idade }) {
        console.log(nome, idade);
    }
    mostraNome(usuario);
}
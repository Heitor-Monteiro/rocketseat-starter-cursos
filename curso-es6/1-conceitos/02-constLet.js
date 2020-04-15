//Exemplo de const e let ************************************************

export default function constLet02() {
    // Exemplo 1:
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
}


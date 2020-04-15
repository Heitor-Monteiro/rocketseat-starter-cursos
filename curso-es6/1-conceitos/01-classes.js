// Exemplo de classes no JavaScript ******************************************

export function exemplo01() {
    // 1. Create the button
    var button = document.createElement("button");
    button.innerHTML = "ADICIONAR";
    button.setAttribute("id", "novotodo2");

    // 2. Append somewhere
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);

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
    document.getElementById('novotodo2').onclick = function () {
        MinhaLista.add('Novo todo 2');
    }

    MinhaLista.mostraUsuario();
}

export function exemplo02() {
    class Matematica {
        static soma(a, b) {
            return a + b;
        }
    }
    console.log(Matematica.soma(1, 2));
}

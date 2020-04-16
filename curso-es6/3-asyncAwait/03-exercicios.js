import axios from 'axios';

export function exercicio01() {
    // Funão delay aciona o .then após 1s
    const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
    function umPorSegundo() {
        delay().then(() => {
            console.log('1s');
            delay().then(() => {
                console.log('2s');
                delay().then(() => {
                    console.log('3s');
                });
            })
        });
    }
    umPorSegundo();
}

export function resposta01() {
    const delay = (temp) => new Promise(resolve => setTimeout(() => { resolve(temp) }, 1000));
    async function umPorSegundo() {
        console.log(await delay('- 1 -'));
        console.log(await delay('- 2 -'));
        console.log(await delay('- 3 -'));
    }
    umPorSegundo();
}

export function exercicio02() {
    function getUserFromGithub(user) {
        axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Usuário não existe');
            })
    }
    getUserFromGithub('diego3g');
    //getUserFromGithub('diego3g124123');
}

export function resposta02() {
    async function getUserFromGithub(user) {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);
        } catch (error) {
            console.warn(error);
        }
    }
    getUserFromGithub('Heitor-Monteiro');
    //getUserFromGithub('Heitor-MonteiroXXXXXX');
}

export function exercicio03() {
    class Github {
        static getRepositories(repo) {
            axios.get(`https://api.github.com/repos/${repo}`)
                .then(response => {
                    console.log(response.data);
                })
                .catch(err => {
                    console.log('Repositório não existe');
                })
        }
    }
    Github.getRepositories('rocketseat/rocketseat.com.br');
    Github.getRepositories('rocketseat/dslkvmskv');
}

export function resposta03() {
    class Github {
        static async getRepositories(repo) {
            try {
                const response = await axios.get(`https://api.github.com/repos/${repo}`);
                console.log(response);
            } catch (error) {
                console.warn('Repositório não existe');
            }
        }
    }
    Github.getRepositories('Heitor-Monteiro/curso-java-script-es6');
    Github.getRepositories('Heitor-Monteiro/XXXXXXX');
}

export function exercicio04() {
    const buscaUsuario = user => {
        axios.get(`https://api.github.com/users/${user}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Usuário não existe');
            });
    }
    buscaUsuario('diego3g');
}

export function resposta04() {
    const buscaUsuario = async (user) => {
        try {
            const response = await axios.get(`https://api.github.com/users/${user}`);
            console.log(response);
        } catch (error) {
            console.log('Usuário não existe');
        }
    }
    buscaUsuario('Heitor-Monteiro');
}
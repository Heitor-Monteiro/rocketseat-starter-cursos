
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

export function exemplo01() {
    minhaPromise()
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log('ERR!!!');
        });
}

export function exemplo02() {
    async function executaPromise() {
        const response = await minhaPromise();
        console.log(response);
    }
    executaPromise();
}

export function exemplo03() {
    async function executaPromise() {
        console.log(await minhaPromise());
        console.log(await minhaPromise());
        console.log(await minhaPromise());
    }
    executaPromise();
}

export function exemplo04() {
    const executaPromise = async () => {
        console.log(await minhaPromise());
        console.log(await minhaPromise());
        console.log(await minhaPromise());
    };
    executaPromise();
}
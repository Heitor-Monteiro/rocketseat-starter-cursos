// Valores padrão *******************************************

export default function valoresPadrao05() {
    function soma(a = 3, b = 6) {
        return a + b;
    }
    console.log(soma(1));
    console.log(soma());
}
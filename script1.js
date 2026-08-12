const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let numero1, numero2, resultado;
let operacao, regra = true;

function pedirOperacao() {
    rl.question("digite a operacao escolhida: ", (texto3) => {
        operacao = texto3;

        if (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/") {
            console.log("operacao invalida");
            rl.close();
        }

        rl.question("digite o segundo numero: ", (texto2) => {
            numero2 = parseFloat(texto2);

            if (regra) {
                regra = false;
            } else {
                numero1 = resultado;
            }

            switch (operacao) {
                case "+":
                    resultado = numero1 + numero2;
                    break;
                case "-":
                    resultado = numero1 - numero2;
                    break;
                case "*":
                    resultado = numero1 * numero2;
                    break;
                case "/":
                    resultado = numero1 / numero2;
                    break;
                default:
                    break;
            }

            console.log("o resultado é: " + resultado);
            pedirOperacao();
        });
    });
}

rl.question("digite o primeiro numero: ", (testo1) => {
    numero1 = parseFloat(testo1);
    pedirOperacao();
});

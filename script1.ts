import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

type Operacao = "+" | "-" | "*" | "/";

let numero1: number;
let numero2: number;
let resultado: number;
let operacao: string;
let regra: boolean = true;

function pedirOperacao(): void {
    rl.question("digite a operacao escolhida: ", (texto3: string) => {
        operacao = texto3;

        if (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/") {
            console.log("operacao invalida");
            rl.close();
            return;
        }

        const op = operacao as Operacao;

        rl.question("digite o segundo numero: ", (texto2: string) => {
            numero2 = parseFloat(texto2);

            if (regra) {
                regra = false;
            } else {
                numero1 = resultado;
            }

            switch (op) {
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
            }

            console.log("o resultado é: " + resultado);
            pedirOperacao();
        });
    });
}

rl.question("digite o primeiro numero: ", (texto1: string) => {
    numero1 = parseFloat(texto1);
    pedirOperacao();
});

import * as readline from 'readline';
import Somador from './somador';
import Subtrador from './subtrador';
import Divisor from './divisor';
import Multiplicador from './multiplicador';
import Bhaskara from './bhaskara';


let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question("Quais são os números e a operação desejada?\n", (valor) => {
        let instrucao = valor.trim().split(" ");

        let numeros = instrucao.slice(0, -1).map(Number);
        let operacao = instrucao[instrucao.length - 1]
            ?.toLowerCase()
            .replace("ç", "c")
            .replace("ã", "a");

        console.log(`Operação: ${operacao}\nNúmeros: ${numeros.join(", ")}\n`);

        switch (operacao) {
            case "soma":
                if (numeros.length < 2) return console.log("Informe pelo menos dois números para soma.");
                let somador = new Somador();
                console.log(`Resultado: ${somador.calcular(numeros[0], numeros[1])}`);
                break;

            case "subtracao":
                if (numeros.length < 2) return console.log("Informe pelo menos dois números para subtração.");
                let subtrador = new Subtrador();
                console.log(`Resultado: ${subtrador.calcular(numeros[0], numeros[1])}`);
                break;

            case "multiplicacao":
                if (numeros.length < 2) return console.log("Informe pelo menos dois números para multiplicação.");
                let multiplicador = new Multiplicador();
                console.log(`Resultado: ${multiplicador.calcular(numeros[0], numeros[1])}`);
                break;

            case "divisao":
                if (numeros.length < 2) return console.log("Informe pelo menos dois números para divisão.");
                let divisor = new Divisor();
                console.log(`Resultado: ${divisor.calcular(numeros[0], numeros[1])}`);
                break;

            case "bhaskara":
                if (numeros.length < 3) {
                    console.log("Para Bhaskara, informe três números: a b c");
                } else {
                    try {
                        let bhaskara = new Bhaskara();
                        const resultado = bhaskara.calcular(...numeros);
                        console.log(`Raízes da equação: ${resultado}`);
                    } catch (err: any) {
                        console.log(`Erro: ${err.message}`);
                    }
                }
                break;

            case "sair":
                console.log("Encerrando o programa...");
                leitor.close();
                return;

            default:
                console.log("Operação inválida. Tente novamente.");
        }

        leitor.close();
    });
};

iniciar();

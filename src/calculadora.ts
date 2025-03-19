import * as readline from 'readline';
import Somador from './somador';
import Subtrador from './subtrador';
import Divisor from './divisor';
import Multiplicador from './multiplicador';

let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    leitor.question("Quais são os números e a operação desejada? ", (valor) => {
        let instrucao = valor.split(" ");
        let numero1 = Number(instrucao[0]);
        let numero2 = Number(instrucao[1]);
        let operacao = instrucao[2];

        if (instrucao.length === 13) {
            operacao = instrucao[0]
        }

        console.log(`Esta foi sua Operação: ${operacao} \n Este foi seu numero 1: ${numero1} \n Este foi seu numero 2: ${numero2} \n`);

        switch (operacao) {
            case "Somar":
                let somador = new Somador();
                console.log(` O resultado da operação é: ${somador.calcular(numero1, numero2)}`);
                break;
            case "Subtração":
                let subtrador = new Subtrador();
                console.log(` O resultado da operação é: ${subtrador.calcular(numero1, numero2)}`);
                break;
            case "Multiplicação":
                let multiplicador = new Multiplicador();
                console.log(` O resultado da operação é: ${multiplicador.calcular(numero1, numero2)}`);
                break;
            case "Divisão":
                let divisor = new Divisor();
                console.log(` O resultado da operação é: ${divisor.calcular(numero1, numero2)}`);
                break;
            case "Sair":
                leitor.close();
                break
        }


    })
}


iniciar()

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const somador_1 = __importDefault(require("./somador"));
const subtrador_1 = __importDefault(require("./subtrador"));
const divisor_1 = __importDefault(require("./divisor"));
const multiplicador_1 = __importDefault(require("./multiplicador"));
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
            operacao = instrucao[0];
        }
        console.log(`Esta foi sua Operação: ${operacao} \n Este foi seu numero 1: ${numero1} \n Este foi seu numero 2: ${numero2} \n`);
        switch (operacao) {
            case "Somar":
                let somador = new somador_1.default();
                console.log(` O resultado da operação é: ${somador.calcular(numero1, numero2)}`);
                break;
            case "Subtração":
                let subtrador = new subtrador_1.default();
                console.log(` O resultado da operação é: ${subtrador.calcular(numero1, numero2)}`);
                break;
            case "Multiplicação":
                let multiplicador = new multiplicador_1.default();
                console.log(` O resultado da operação é: ${multiplicador.calcular(numero1, numero2)}`);
                break;
            case "Divisão":
                let divisor = new divisor_1.default();
                console.log(` O resultado da operação é: ${divisor.calcular(numero1, numero2)}`);
                break;
            case "Sair":
                leitor.close();
                break;
        }
    });
};
iniciar();

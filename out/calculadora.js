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
const bhaskara_1 = __importDefault(require("./bhaskara"));
let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Quais são os números e a operação desejada?\n", (valor) => {
        var _a;
        let instrucao = valor.trim().split(" ");
        let numeros = instrucao.slice(0, -1).map(Number);
        let operacao = (_a = instrucao[instrucao.length - 1]) === null || _a === void 0 ? void 0 : _a.toLowerCase().replace("ç", "c").replace("ã", "a");
        console.log(`Operação: ${operacao}\nNúmeros: ${numeros.join(", ")}\n`);
        switch (operacao) {
            case "soma":
                if (numeros.length < 2)
                    return console.log("Informe pelo menos dois números para soma.");
                let somador = new somador_1.default();
                console.log(`Resultado: ${somador.calcular(numeros[0], numeros[1])}`);
                break;
            case "subtracao":
                if (numeros.length < 2)
                    return console.log("Informe pelo menos dois números para subtração.");
                let subtrador = new subtrador_1.default();
                console.log(`Resultado: ${subtrador.calcular(numeros[0], numeros[1])}`);
                break;
            case "multiplicacao":
                if (numeros.length < 2)
                    return console.log("Informe pelo menos dois números para multiplicação.");
                let multiplicador = new multiplicador_1.default();
                console.log(`Resultado: ${multiplicador.calcular(numeros[0], numeros[1])}`);
                break;
            case "divisao":
                if (numeros.length < 2)
                    return console.log("Informe pelo menos dois números para divisão.");
                let divisor = new divisor_1.default();
                console.log(`Resultado: ${divisor.calcular(numeros[0], numeros[1])}`);
                break;
            case "bhaskara":
                if (numeros.length < 3) {
                    console.log("Para Bhaskara, informe três números: a b c");
                }
                else {
                    try {
                        let bhaskara = new bhaskara_1.default();
                        const resultado = bhaskara.calcular(...numeros);
                        console.log(`Raízes da equação: ${resultado}`);
                    }
                    catch (err) {
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

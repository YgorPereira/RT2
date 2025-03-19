import Calculo from "./calculo";

export default class Bhaskara extends Calculo {
    public calcular(...numeros: number[]): number[] {
        if (numeros.length < 3) {
            throw new Error("É necessário informar pelo menos três valores: a, b e c");
        }

        const [a, b, c] = numeros;

        if (a === 0) {
            throw new Error("O coeficiente 'a' não pode ser zero em uma equação de segundo grau.");
        }

        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            throw new Error("A equação não possui raízes reais.");
        }

        const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

        return [raiz1, raiz2];
    }
}

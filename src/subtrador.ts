import Calculo from "./calculo";

export default class Subtrador extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 - numero2;
    }
}
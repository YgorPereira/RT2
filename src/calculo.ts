// export default abstract class Calculo {
//     public abstract calcular(numero1: number, numero2: number): number;
// }

// calculo.ts
export default abstract class Calculo {
    public abstract calcular(...numeros: number[]): number | number[];
}
